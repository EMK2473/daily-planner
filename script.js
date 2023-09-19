// Need to access "all available time" through dayJS to bootstrap time mechanics
let time = allTime (dayjs.access)


// now
let currentTime = (currentDate + currentHour +currentMinute) 



// variables to access current times
let currentDate = (dayjs.currentDate)
let currentHour = (dayjs.currentHour)
let currentMinute = (dayjs.currentMinute)
let currentMonth = (dayjs.currentMonth)
let currentYear = (dayjs.currentYear)



// current hour until 11:59 currentDate 
let presentDate = (time >= currentTime(math.floor) && <= currentDate)



// Math.floor current minutes to previous hour value --- if it's 10:15, 10 oclock is available
let today = currentDate & currentMinute (math.floor)


// target "pastBtn"
let past = (time <= pastTime)


// current hour(math.floor) and everything before it
let pastTime = (time <= currentHour)


// (Tomorrow and on)
let future = (time > currentDate)


// what is typed into the list
let event = "";

// saving function to store eventText local storage
let save = (aFunctionThat.event.store.setLocalStorage)

// remove saved eventText from local storage (clear button)
let delete = (aFunctionThat.event.retrieve.removeLocalStorage)

// a list being created when eventText is added
let eventList = li.appending.event("").uponInput(event[text]);









