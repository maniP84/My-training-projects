from os import name
from time import sleep

from selenium import webdriver

from info import user,password

class Bot():
    def __init__(self) :
        self.login(user, password)

    def login(self,username, password):
        self.driver = webdriver.Firefox()
        self.driver.get('https://instagram.com')
        sleep(1)
        self.driver.find_element_by_xpath('/html/body/div[3]/div/div/button[1]').click()
        username_input = self.driver.find_element_by_xpath('/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[1]/div/label/input ')
        username_input.send_keys(username)
        sleep(1)
        password_input = self.driver.find_element_by_xpath('/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[2]/div/label/input')
        password_input.send_keys(password)
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="loginForm"]/div/div[3]/button/div').click()
        sleep(1)
        self.driver.find_element_by_class_name('sqdOP').click()
        sleep(3)
        self.driver.get('https://www.instagram.com/accounts/edit/')
        sleep(2)
        self.driver.get('https://www.instagram.com/accounts/access_tool/current_follow_requests')
        list_of_usernames =[]
        for names in self.driver.find_elements_by_class_name('-utLf'):
            list_of_usernames.append(names.text)

        for i in list_of_usernames    :
            self.driver.get(f'https://instagram.com/{i}')
            sleep(2)
            self.driver.find_element_by_xpath('/html/body/div[1]/section/main/div/header/section/div[1]/div[1]/div/div/button').click()
            sleep(2)
            self.driver.find_element_by_xpath('/html/body/div[5]/div/div/div/div[3]/button[1]').click()

           

        

def main():
    myBot = Bot()


if __name__=='__main__':
    main()            
