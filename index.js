// Random color changing functionality setting:
document.getElementById("bg-btn")
    .addEventListener("click", function() {
  
  let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

  document.body.style.backgroundColor = randomColor;
});




// Current Date fixing:
let today = new Date();

let options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
let formattedDate = today.toLocaleDateString("en-US", options).replace(",", "");

let parts = formattedDate.split(" "); 
let finalDate = `${parts[0]} <br> ${parts[1]} ${parts[2]} ${parts[3]}`;

document.getElementById("dateDiv").innerHTML = finalDate;




// redirect to the next html page
document.getElementById('next-html').addEventListener('click', function(){
  window.location.href='./next.html';
})


// Doing Dynamic of all buttons by 
function dynamicFunc(mainBtn, cardHead){

  document.getElementById(mainBtn)
  .addEventListener('click', function(){
  // alert set:
  alert("Board updated successfully");
  
  // button disable:
  const cardBtn = document.getElementById(mainBtn);
  cardBtn.setAttribute("disabled", true);

  // Task assign counting:
  let taskAssign = document.getElementById('task-assign');
  const integerTaskAssignInnerText = parseInt(taskAssign.innerText);
  taskAssign.innerText = integerTaskAssignInnerText -1;


  // Task assign counting:
  let updateValue = document.getElementById('update-value');
  const integerUpdateValueInnerText = parseInt(updateValue.innerText);
  updateValue.innerText = integerUpdateValueInnerText +1;
  
  // adding history:
  const historyParent = document.getElementById("history-parent");
    
  const historyH3 = document.createElement('h3');
  historyH3.classList.add("h3-class");

  // Current Time Generating:
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // 12-hour format
  const formattedTime = `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds} ${amPm}`;
  
  //adding history:
  const cardHeadInnerText = document.getElementById(cardHead).innerText; 
  historyH3.innerText = `You have completed tha task ${cardHeadInnerText} at: ${formattedTime}`;
  historyParent.appendChild(historyH3);
  })
}
// calling function to create all button dynamic:
dynamicFunc('card1-btn', "card1-head");
dynamicFunc('card2-btn', "card2-head");
dynamicFunc('card3-btn', "card3-head");
dynamicFunc('card4-btn', "card4-head");
dynamicFunc('card5-btn', "card5-head");
dynamicFunc('card6-btn', "card6-head");



// history remove function:
function historyRemoveFunc (removeBtn, historyDiv){
  document.getElementById(removeBtn)
      .addEventListener('click', function(){

        const HistoryDiv = document.getElementById(historyDiv);
        HistoryDiv.innerText="";
      })
}
// calling function to create history button dynamic:
historyRemoveFunc('history-btn', "history-parent");




