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
$(document).ready(function() {
  $("form#adult-teen").submit(function(event){
    let movie = $("select#movie").val();
    let time = $("select#time").val();
    let tickettype = $("select#tickettype").val();
    let ticketNum = parseInt($("select#number").val());
    let newTicket = new Ticket(movie, time, tickettype);
    let total = 3000;

    let grandTotal = newTicket.fullTicket() * ticketNum;
    $(".display").empty();
    $(".display").append("<li class='ticketNumli'>" + ticketNum + " ticket(s) </li>");
    $(".display").append("<li class='movieli'>" + movie + "</li>");
    $(".display").append("<li class='timeli'> At " + time + " </li>");
    $(".display").append("<li class='ageli'> For " + tickettype + " </li>");
    $(".display").append("<li> Total: #" + grandTotal + "</li>");
    $(".ticket").show();

  event.preventDefault();
});
});