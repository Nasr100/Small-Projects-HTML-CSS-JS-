const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
     
    
    let dayElem = document.getElementById("days");
    let hourElem = document.getElementById("hours");
    let minElem = document.getElementById("minutes");
    let secElem = document.getElementById("seconds");



    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();

    let giveawaydate = new Date(tempYear, tempMonth, tempDay+1, 11, 33, 0);

    let giveawayTime = giveawaydate.getTime();
    const year = giveawaydate.getFullYear();
    const hours = giveawaydate.getHours();
    const minutes = giveawaydate.getMinutes();

    let month = giveawaydate.getMonth();
    month = months[month];
    const weekday = weekdays[giveawaydate.getDay()];
    const date = giveawaydate.getDate();
    giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

   function getTime(){
    const today = new Date().getTime();
    let distance = giveawayTime - today;
   
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(distance < 0){
        clearInterval(x);
    }
    dayElem.innerHTML = days;
    hourElem.textContent = hours;
    minElem.textContent = minutes;
    secElem.innerHTML = seconds;
   }
    let x = setInterval(getTime,1000)
    getTime();
