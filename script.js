let today = dayjs();
$("#today").text(today.format("MM D, YYYY")); // format's today's date into string value
let currentHour = dayjs().hour(); // gets current hour value 0-23
console.log(currentHour);
console.log(today);

let style = [
  future = "blue",
  present = "green",
  past = "red",
]

function sunDial(){

}

// daily 9-5 planner
// it's a sundial

// if my number is inside 9 and 16;
// then it points to an array and makes that number green;
// and every number before it to [0] red (past);
// and every number after it to [7] in blue (future);
// if my number is before 9;
// then it misses the array and then the planner is blue; everything is in the future;
// if my number is after 16;
// then it misses the array and then the planner is red and clears storage; everything is in the past;

// Pseudo Code:
// let today = today's date, offering current hour 0-23
// let currentHour = a number value between 0-23

// function parseTime(){
// create an array of 8 [0-7] called hourCheck;

// if currentHour >= 9 and <= 16; continue;
//      else if (currentHour > 9) style blue;
//        else (currentHour > 16); style red; clear storage;   nested if statement


// if this then
//      do something
// else
//      do something else
// end if;

// if this then
//      do something
// else
//      if this then
//          do something
//      else
//          do something else
//      end if;
// end if;

// if (curentHour >= 9 & <= 16) then;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


// if currentHour >= 9 and <= 16; continue;
//      else if (currentHour > 9) style blue;
//        else (currentHour > 16); style red; clear storage;   nested if statement

if (currentHour >= 9 <= 16){
} else if( currentHour > 9){
  style = blue;
} else{ currentHour > 16

}

// 0-23


// 9-16
// continue our algorithm
// < 9 style blue
// > 16 style red and clear;

function sunDial(){

}



function parseTime(){ 
}

if (currentHour >= 9 <= 16){
  sunDial()
} else if(true){ // 0 > 9
  style = blue;
}else{          // 9 < 16
  style = red;   
}





// if currentHour >= 9 and <= 16;


//function parseTime()

// let hourCheck = [9,   10,   11,   12,  13,  14,  15,  16];
//     array:       0     1     2     3    4    5    6    7 ;
//     display =  [9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm];
//     append     input box for display[0-7]

// let display = [9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm];
// if currentHour

// ex:                            Value["13"]
// let hourCheck = [ 9,   10,   11,   12,  13,  14,  15,  16];
//     array:      0     1     2     3    4    5    6    7 ;
//     display = [9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm];
//  this will trigger: hourCheck = (13, array[4];
//  and display 1pm as green, 9am-12am as red, and 2pm-4pm as blue;

// ex:                                                       Value["19"]
// let hourCheck = [ 9,   10,   11,   12,  13,  14,  15,  16];
//     array:      0     1     2     3    4    5    6    7 ;
//     display = [9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm];
//  this will trigger: futureTime = (hourtime X, array[X])
//  and display nothing as green, and 9am-4pm as red; clearing storage;

// ex: Value["6"]
// let hourCheck = [ 9,   10,   11,   12,  13,  14,  15,  16];
//     array:      0     1     2     3    4    5    6    7 ;
//     display = [9am, 10am, 11am, 12am, 1pm, 2pm, 3pm, 4pm];
//  this will trigger: hourCheck = (hourtime X, array[X])
//  and display nothing as green, and 9am-4pm as blue; rendering storage inputs;

// let new time = currentHour???**** do i need this?

// let oldTime = (hourCheck[i] - 1) and (include until [] = [0];
// let futureTime = (hourCheck[i] + 1) and include until [] = [7];

// hourCheck.value = style.green;
// oldTime.values = style.red;
// futureTime.values = style.blue;

// }

//  this is essentially a watch

// hourCheck.value = nineToFive
// let nineToFive = 8;
// let twentyFourHour = (nineToFive) * 3;
// let thirtyMinutes = (twentyFourHour) * 2;

// smallest factors (amount of variables) possible

let planList = document.querySelector("#planList");
let planForm = document.querySelector("#planForm");
let planInput = document.querySelector("#planText");
let plans = [];

function genPlanner() {
  for (let i = 0; i < plans.length; i++) {
    let hour = planList[i];
  }
}

function init() {
  let storedPlans = JSON.parse(localStorage.getItem("planSect"));
  if (storedPlans !== null) {
    planSect = storedPlans;
  }
}

// let pastHour = (differentColor)
// let futureHour = (differentColor)

// let date = new Date(); //creating a function
// let dateFormatted = formatDate(date);

// function formatDate(dateObject){
//     let parts = {
//         date: dateObject.getDate(),
//         month: dateObject.getMonth() +1,
//         year: dateObject.getFullYear(),
//         hour: (dateObject.getHours() % 12) || 12,
//         minutes: dateObject.getMinutes().toString().padStart(2, 0),
//         amOrPm: dateObject.getHours() < 12 ? "am" : "pm"
//     };

//     console.log(parts)// checking to see whaht parts gives me
//     return `${parts.month}/${parts.date}/${parts.year} ${parts.hour}:${parts.minutes} ${parts.amOrPm}`;
// }

// console.log(dateFormatted)
