// function showTime() {
//     let date = new Date();
//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();
//     let session = "AM";

//     if (h === 0) {
//         h = 12
//     }
//     if (h > 12) {
//         h = h - 12;

//     }

//     h = (h < 10) ? `0${h}` : h;
//     m = (m < 10) ? `0${m}` : m;
//     s = (s < 10) ? `0${s}` : s;
//     clock = `${h}:${m}:${s} ${session}`
//     document.querySelector(".clock").innerHTML = clock
// }

// setInterval(showTime, 1000)

function closure() {
    let iterator = 0;
    console.log("hello")

    function counter() {
        iterator++;

        return iterator;
    }
    return counter
}

const data = closure();
console.log(data())
console.log(data())
console.log(data())
console.log(data())
console.log(data())
console.log(data())