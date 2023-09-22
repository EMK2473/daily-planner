let today = dayjs();
$("#today").text(today.format("MM D, YYYY")); 
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
// generates 8 blocks, corresponding the time and an event slot
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
// assigns current hour to index
function assignCurrentHour(hourlySchedule, currentHour) {
  if (currentHour >= 9 && currentHour <= 16) {
    let index = currentHour - 9;
    if (index >= 0 && index < hourlySchedule.length) {
      hourlySchedule[index].currentHour = true;
    }
  }
}
assignCurrentHour(hourlySchedule, currentHour);
// displays the hourly schedule and styles current hour, past hours, and future hours
function displayHourlySchedule(hourlySchedule, currentHour) {
    let hourBlock = document.getElementById("hourBlock");
    for (let i = 0; i < hourlySchedule.length; i++) {
      let item = hourlySchedule[i];
      let blockElement = document.createElement("div");
      blockElement.className = item.plan.class;
      blockElement.textContent = item.time;
      if (item.currentHour) {
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
// saves plans and stores locally
  function updatePlan(index, event) {
    event.preventDefault();
    let inputElement = document.getElementById(`planText${index}`);
    let inputValue = inputElement.value;
    let plansSection = document.getElementById(`p${index}`);
    plansSection.textContent = inputValue;
    localStorage.setItem(`plan${index}`, inputValue);
  }
  // clears all local storage at midnight
  if (currentHour >= 17) {
    for (let i = 0; i < hourlyPlans.length; i++) {
      localStorage.removeItem(`plan${i}`);
    }
  }
  // loads stored data
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