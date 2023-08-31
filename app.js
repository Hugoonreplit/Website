function toggleText1() {
  const output = document.getElementById("text");
  if (output.innerHTML === "Hey, I\'m Hugo! A 15 year old that was borned in Madrid, Spain\'s Capital. I enjoy creating websites like this one and working on fun projects using languages like Python and Go. Currently I\'m trying to expand my Javascript skills and hopefully learn a general purpose language like Go in the next couple of years") {
    output.innerHTML = "";
  } else {
    output.innerHTML = "Hey, I\'m Hugo! A 15 year old that was borned in Madrid, Spain\'s Capital. I enjoy creating websites like this one and working on fun projects using languages like Python and Go. Currently I\'m trying to expand my Javascript skills and hopefully learn a general purpose language like Go in the next couple of years";
  }
}

function toggleText2() {
  const output = document.getElementById("text");
  if (output.innerHTML === "I first started studying on the King's College Chamartin at the age of 3 and then at the age of 7 transfered to the King's College soto de viñuelas and have since studied there until 2026 that will be when I graduate. I've got a C2 spanish level C1 in English and A2 in French. Regarding expirience I've been an ambassador 2 time in @replit, the second time being a mentor to new ambassadors. I'm also a community moderator, Discourse Forum Leader and have done various beta testing and given feedback and reported multiple bugs.") {
    output.innerHTML = "";
  } else {
    output.innerHTML = "I first started studying on the King's College Chamartin at the age of 3 and then at the age of 7 transfered to the King's College soto de viñuelas and have since studied there until 2026 that will be when I graduate. I've got a C2 spanish level C1 in English and A2 in French. Regarding expirience I've been an ambassador 2 time in @replit, the second time being a mentor to new ambassadors. I'm also a community moderator, Discourse Forum Leader and have done various beta testing and given feedback and reported multiple bugs.";
  }
}

const clickableText1 = document.getElementById("menu-title-one");
const clickableText2 = document.getElementById("menu-title-two");

clickableText1.addEventListener("click", function() {
  toggleText1();
  // Ensure Text 2 is hidden when Text 1 is displayed
  const output = document.getElementById("text");
  if (output.innerHTML === "Text 2") {
    output.innerHTML = "";
  }
});

clickableText2.addEventListener("click", function() {
  toggleText2();
  // Ensure Text 1 is hidden when Text 2 is displayed
  const output = document.getElementById("text");
  if (output.innerHTML === "Text 1") {
    output.innerHTML = "";
  }
});