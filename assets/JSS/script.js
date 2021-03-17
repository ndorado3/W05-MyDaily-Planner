//Current date & time display at the header
var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(today);



// <!-- Timeblocks criteria:  -->
//       <!-- standart time -->
//       <!-- each block are color coded by past, present & future -->
//         <!-- time is attach to the colors -->
//       <!-- click each block to enter an event:-->
//       <!-- ecah event must be saved on the local storage -->
//       <!-- when refresh the page the event stays on the calendar -->