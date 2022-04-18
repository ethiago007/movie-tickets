// BUSINESS LOGIC
function Ticket (movie, time, tickettype) {
  this.movie = movie;
  this.time = time;
  this.tickettype = tickettype;
};
Ticket.prototype.fullTicket = function() {
  let total = 3000;
  if (this.tickettype === "REGULAR" && (this.time === "12:00pm" || this.time === "3:00pm"))
  {
  total -= 0;
} else if (this.tickettype === "VIP"){
  total += 500;
  }
  else if (this.tickettype === "PREMIUM"){
  total += 1000;
  } if (this.tickettype === "REGULAR" && (this.time === "06:45pm" || this.time === "09:15pm"))
  {
  total += 500;
} else if (this.tickettype === "VIP") {
    total += 1000;
  }
  else if (this.tickettype === "PREMIUM") {
    total += 1500;
  } if (this.tickettype === "REGULAR" && (this.time === "10:30am" )) {
    total -= 500;
  } else if (this.tickettype === "VIP") {
    total -= 1000 ;
  } if (this.tickettype === "PREMIUM"){
    total = total
  }
  return total;
};

function Confirm () {
  let username = $("#username").val();
    let password = $("#password").val();
  let person1 = $("#person1").val();
if (person1 === password) {
  alert("Purchase Successful:)");
} else if (person1 !== password) {
  alert("WRONG PASSWORD!!!!");
}

};
// USER-INTERFACE LOGIC
$(document).ready(function() {
  $("form#adult-teen").submit(function(event){
    event.preventDefault();
    let movie = $("select#movie").val();
    let time = $("select#time").val();
    let tickettype = $("select#tickettype").val();
    let ticketNum = parseInt($("select#number").val());
    let newTicket = new Ticket(movie, time, tickettype);
    let total = 3000;

    let grandTotal = newTicket.fullTicket() * ticketNum;
    $(".display").empty();
    $(".display").append("<li class='ticketNumli'> Number of tickets -->" + ticketNum + " ticket(s) </li>");
    $(".display").append( "<li class='movieli'> Movie name -->"  + movie + "</li>");
    $(".display").append("<li class='timeli'> At  " + time + " </li>");
    $(".display").append("<li class='tickettypeli'> Ticket type --> " + tickettype + " </li>");
    $(".display").append("<li> Total Cost of ticket is #" + grandTotal + "</li>");
    if ( movie === "" &&  time === ""  )  {
      $("#warning").show();
    } else {
    $(".ticket").show();
   
  }
  
});
});
$(document).ready(function() {
  $("form#adultForm").submit(function(event){
    event.preventDefault();
    
    
  
      $(".display1").show();;
    
  });
});
$(document).ready(function() {
  $("form#confirmation").submit(function(event){
    event.preventDefault();
   
   Confirm();  
   
  });
});





