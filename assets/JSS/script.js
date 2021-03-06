//Current date & time display at the header
var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);

//variables need it
// var saveBtn = $("#saveBtn");
// var areaText = $(".form-control");
// var timeHour = $(".input-group-text");

// var hour = hours[i];
var containerEl = $(".container");

var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentHour = moment().format("H A");

//This for loop creates a block for each hr
// const containerEl = $(".container");

for (let i = 0; i < hours.length; i++) {
  var rowDiv = document.createElement("div");
  rowDiv.innerHTML =
    //These divs display the hour, text input area and saved btn,for each hour
    `<div class='input-group input-group-md time-block'>
    <div class='input-group-prepend '>
    <span class='input-group-text 'id='inputGroup-sizing-small'>${hours[i]}:00</span>
  </div>
    <textarea id='${hours[i]}' data-hour= ${hours[i]} type='text' class='form-control '
    placeholder='Important Event' aria-label='hourly agenda' aria-describedby='basic-addon2'></textarea>
  <div class ='input-group-append btnSaved'>
    <button id="saveBtn" data-hour=${hours[i]} class='btn btn-outline-secondary' type='button'><img src='./assets/img/saved-icon-1.png'
        alt='saved icon for the saved button'></button>
 </div>  
</div>`;
  
  containerEl.append(rowDiv);

  function colorTime(hours) {
    var now = moment(currentHour, "H A");
    var nowEntry = moment(hours, "H A");
    if (now.isBefore(nowEntry) === true) {
      return "future";
    } else if (now.isAfter(nowEntry) === ture) {
      return "past";
    } else {
      return "present";
    }
    
  }


  // This function allows the storage of the event for each hr
  // by clicking the save btn of each hr block
  $("button").each(function () {
    $(this).on("click", function (event) {
      event.preventDefault();
      console.log("I was click");
      var parentDiv = $(this).parent();
      var textEvent = $(parentDiv).siblings(".form-control").val();
      var hour = $(this).attr("data-hour");
      //Saves events data to localStorage
      localStorage.setItem(hour, JSON.stringify(textEvent));
      //Displays the text
      // $(parentDiv).siblings(".form-control").val(localStorage.getItem(hour));
    });
  });
 
  
}

// $("textarea").each(function(currentHour){
//  var currentHour = moment().format("HH");
//  //Past time block = blue
//  if (parseInt(hours[i]) < currentHour) {
//    $("text" + hours[i]).attr({
//      "class": "past",
//    });
//  }
// });

// function updateTime() {
//     var currentHour = moment().hours();
//     $(".time-block").each(function () {
//       var blockTime = parseInt($(hours[i]).attr("id").split("-")[1]);
//       if (blockTime < currentHour) {
//         $(this).addClass("past");
//       }
//     });
//   }
    
//   // updateTime();