import subprocess
import re

netsh_output = subprocess.run(
    ["netsh", "wlan", "show", "profiles"], capture_output = True).stdout.decode()

profiles_names = (re.findall("All User Profile     : (.*)\r", netsh_output)) 

wifi_list = []

if len(profiles_names) != 0:
    for name in profiles_names:

        wifi_profils = {}

        profiles_info = subprocess.run(
            ["netsh", "wlan", "show", "profile", name],capture_output = True).stdout.decode() 
        if re.search("Security key           : Absent",profiles_info ):
            continue
        else:
            wifi_profils["ssid"] = name
            profiles_info_pass = subprocess.run(
                ["netsh","wlan","show","profile", name, "key=clear"], capture_output=True).stdout.decode()

        password = re.search("Key Content            : (.*)\r",profiles_info_pass)
        if password ==None:
            wifi_profils["password"] = None
        else:
            wifi_profils["password"] = password[1]

        wifi_list.append(wifi_profils)

for x in range(len(wifi_list)):
    print(wifi_list[x])
