let daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let monthsList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
];


function getDate() {
    var myDate = new Date();
    let date = `${myDate.getDate()} / ${monthsList[myDate.getMonth()]
        } / ${myDate.getFullYear()}`;
    return date;
}

function getTime() {
    var myDate = new Date();
    let day = daysList[myDate.getDay()];
    let month = monthsList[myDate.getMonth()];
    let date = myDate.getDate();
    let year = myDate.getFullYear();
    let hour = myDate.getHours();
    let minutes = myDate.getMinutes();
    let sec = myDate.getSeconds();
    let time = `${day} ${month} ${date} ${year} ${hour}:${minutes}:${sec} GMT+0530 (Indian Standard Time)`;
    return time;
}

document.querySelector("#btnDate").addEventListener("click", function () {
    // console.log("Date clicked");
    const disp = document.querySelector(".date");
    disp.textContent = getDate();
});

document.querySelector("#btnTime").addEventListener("click", function () {
    // console.log("Time clicked");
    const disp = document.querySelector(".time");
    disp.textContent = getTime();
});
