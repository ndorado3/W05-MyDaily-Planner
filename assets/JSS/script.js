//Current date & time display at the header
var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(today);

// <!-- Timeblocks criteria:  -->
//       <!-- standart time -->
//       <!-- each block are color coded by past, present & future -->
//         <!-- time is attach to the colors -->
//       <!-- click each block to enter an event:-->
//       <!-- ecah event must be saved on the local storage -->
//       <!-- when refresh the page the event stays on the calendar -->


// Thsi is the container for the time blocks 
const containerEl = $(".container");

var hours = ["09", "10", "11", "12", "01", "02", "03", "04", "05"];

//This for loop creates a block for each hr 
for (let i = 0; i < hours.length; i++) {
  var rowDiv = document.createElement("div")  
  rowDiv.innerHTML=
  //These divs display the hour, text input area and saved btn,for each hour
  `<div class='input-group input-group-lg'>
    <div class='input-group-prepend'>
    <span class='input-group-text'id='inputGroup-sizing-small'>${hours[i]}:00</span>
  </div>
    <textarea id='${hours[i]}' data-hour= ${hours[i]} type='text' class='form-control'
    placeholder='Important Events' aria-label='hourly agenda' aria-describedby='basic-addon2'></textarea>
  <div class ='input-group-append btnSaved'>
    <button data-hour=${hours[i]} class='btn btn-outline-secondary' id="savedBtn" type='saved'><img src='./assets/img/saved-icon.png'
        alt='saved icon for the saved button'></button>
        
 </div>  
</div>`
containerEl.append(rowDiv)
}


// $( "#btn" ).click(function() {
    //local storage
//   });


