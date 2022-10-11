function myFunction(myDIV) {
  var x = document.getElementById(myDIV);
  if (x.style.display !== "none") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
  }
}

// function toggler(divId) {
//     $("#" + divId).toggle();
// }

// GFG_Fun()

// function GFG_Fun() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display !== "none") {
//     x.style.display = "none";
//   } 
//   else {
//     x.style.display = "block";
//   }
// }

// jQuery.noConflict();
// jQuery(function($){
//   $('.fold_reply').click(function() {
//     $('.reply').toggle(500)
//   });
// });