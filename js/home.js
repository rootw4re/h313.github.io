var state = 0;
function doThing() {
  switch(state) {
    case 0:
      $("#title").text("Some guy");
      break;
    case 1:
      $("#title").text("Family and Friends Tech Support");
      break;
    case 2:
      $("#title").text("Good at searching Stack Overflow");
      break;
    case 3:
      $("#title").text("Will code for money");
      break;
    case 4:
      $("#title").text("Good with current cloud tech things");
      break;
    case 5:
      $("#title").text("Sadly still a student");
      break;
    case 6:
      $("#title").text("Happens to be a Christian");
      break;
    case 7:
      $("#title").text("Kind of Hungry Right Now");
      break;
    case 8:
      $("#title").text("Getting a sandwich");
      break;
    case 9:
      $("#title").text("Will do Linux tricks for food");
      break;
  }
  if(++state==10) {
    state = 0;
  }
};
setInterval(doThing, 1500);
