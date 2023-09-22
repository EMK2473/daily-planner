let today = dayjs();
$("#today").text(today.format("MM/D/YYYY")); 
let currentHour = dayjs().hour(); 
console.log(currentHour); 
const nineToFive = [
  { text: "9am", id: "b0", class: "blocks" },
  { text: "10am", id: "b1", class: "blocks" },
  { text: "11am", id: "b2", class: "blocks" },
  { text: "12pm", id: "b3", class: "blocks" },
  { text: "1pm", id: "b4", class: "blocks" },
  { text: "2pm", id: "b5", class: "blocks" },
  { text: "3pm", id: "b6", class: "blocks" },
  { text: "4pm", id: "b7", class: "blocks" },
];
const hourlyPlans = [
  { id: "p0", class: "plans" },
  { id: "p1", class: "plans" },
  { id: "p2", class: "plans" },
  { id: "p3", class: "plans" },
  { id: "p4", class: "plans" },
  { id: "p5", class: "plans" },
  { id: "p6", class: "plans" },
  { id: "p7", class: "plans" },
];
// function #1
// generates 8 blocks, corresponding to the time and an event slot.
function createHourlySchedule() {
  let schedule = [];
  for (let i = 0; i < nineToFive.length; i++) {
    let timeSlot = nineToFive[i];
    let plan = hourlyPlans[i];
    let scheduleItem = {
      time: timeSlot.text,
      plan: plan,
    };
    schedule.push(scheduleItem);
  }
  return schedule;
}
let hourlySchedule = createHourlySchedule();
// function #2
// assigns current hour to the hourlySchedule index.
function assignCurrentHour(hourlySchedule, currentHour) {
  if (currentHour >= 9 && currentHour <= 16) {
    let index = currentHour - 9;
    if (index >= 0 && index < hourlySchedule.length) {
      hourlySchedule[index].currentHour = true;
    }
  }
}
assignCurrentHour(hourlySchedule, currentHour);
// function #3
// displays the hourly schedule and styles current hour, past hours, and future hours accordingly.
function displayHourlySchedule(hourlySchedule, currentHour) {
    let hourBlock = document.getElementById("hourBlock");
    for (let i = 0; i < hourlySchedule.length; i++) {
      let sunDial = hourlySchedule[i];
      let blockElement = document.createElement("div");
      blockElement.className = sunDial.plan.class;
      blockElement.textContent = sunDial.time;
      if (sunDial.currentHour) {
        blockElement.classList.add("current-hour");
      } else if (i < currentHour - 9) {
        blockElement.classList.add("before-current-hour");
      } else {
        blockElement.classList.add("after-current-hour");
      }
      hourBlock.appendChild(blockElement);
    }
  }
  displayHourlySchedule(hourlySchedule, currentHour);
// function #4
// saves plans in hourlyPlans array, and stores data locally
  function updatePlan(index, event) {
    event.preventDefault();
    let inputElement = document.getElementById(`planText${index}`);
    let inputValue = inputElement.value;
    let plansSection = document.getElementById(`p${index}`);
    plansSection.textContent = inputValue;
    localStorage.setItem(`plan${index}`, inputValue);
  }
  // clears all local storage at 5pm
  if (currentHour >= 17) {
    for (let i = 0; i < hourlyPlans.length; i++) {
      localStorage.removeItem(`plan${i}`);
    }
  }
  // function #5
  // loads stored data in hourlyPlans array
  function loadStoredData() {
    for (let i = 0; i < hourlyPlans.length; i++) {
      const storedValue = localStorage.getItem(`plan${i}`);
      if (storedValue !== null) {
        document.getElementById(`planText${i}`).value = storedValue;
        document.getElementById(`p${i}`).textContent = storedValue;
      }
    }
  }
  window.addEventListener("load", loadStoredData);