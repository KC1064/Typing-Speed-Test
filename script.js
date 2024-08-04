const text = document.querySelector(".typingtext p");
const input = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistake span");
const cpm = document.querySelector(".cpm span");
const wpm = document.querySelector(".wpm span");
const btn = document.querySelector("button");

// Set values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
  const paragraphs = [
    "The essence of humanity lies in our ability to dream and overcome. It's this spirit that pushes us towards success, improvement, and creation. The countless stories of individuals who have conquered adversity highlight the strength and resilience inherent in the human spirit.",
    "Throughout history, incredible achievements have sprung from humble beginnings. Visionaries, leaders, and innovators often started with just a dream and steadfast belief. Despite numerous obstacles, their unwavering determination drove them forward, leading to remarkable advancements in various fields, fueled by the unyielding human spirit.",
    "The quest for knowledge is central to human nature. Our curiosity propels us to explore and understand the universe's mysteries. This relentless pursuit has led to groundbreaking discoveries and innovations, transforming our world and pushing the boundaries of what is known and possible.",
    "Education is more than just acquiring facts; it's about cultivating a deeper understanding of our world and our place within it. This drive to learn and explore highlights our intellectual capabilities and the desire to expand our horizons, contributing to continuous personal and societal growth.",
    "Human history is filled with stories of those who, starting with nothing but a dream, have achieved greatness. Their journeys are marked by perseverance and resilience, demonstrating that the human spirit can overcome even the most daunting challenges to achieve significant progress and change.",
    "The relentless pursuit of betterment is a defining feature of humanity. This drive manifests in various forms, from personal triumphs to significant societal advancements. The will to succeed, improve, and create underscores our actions and fuels the continuous progress of our civilization."
  ];
  
  const randomIdx = Math.floor(Math.random() * paragraphs.length);
  text.innerHTML = "";
  for (const char of paragraphs[randomIdx]) {
    text.innerHTML += `<span>${char}</span>`;
  }

  text.querySelectorAll("span")[0].classList.add("active");

  document.addEventListener("keydown", () => input.focus());
  text.addEventListener("click", () => {
    input.focus();
  });
}

function initTyping() {
  const chars = text.querySelectorAll("span"); 
  const typedChar = input.value.charAt(charIndex);

  if (charIndex < chars.length && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTime, 1000);
      isTyping = true;
    }
    if (chars[charIndex].innerText === typedChar) {
      chars[charIndex].classList.add("correct");
    } else {
      mistake++;
      chars[charIndex].classList.add("incorrect");
    }
    charIndex++;

    if (charIndex < chars.length) {
      chars[charIndex].classList.add("active");
    }

    mistakes.innerText = mistake;
    let cpmVal = charIndex - mistake;
    cpm.innerText = cpmVal;
  } else if (charIndex >= chars.length) { 
    clearInterval(timer);
    input.value = "";
  }
}

function initTime() {
  if (timeLeft > 0) {
    timeLeft--;
    time.innerText = timeLeft;
    let wpmVal = Math.round((charIndex - mistake) / 5 / ((maxTime - timeLeft) / 60)); // Fixed WPM calculation
    wpm.innerText = wpmVal;
  } else {
    clearInterval(timer);
  }
}

function reset() {
  loadParagraph();
  clearInterval(timer);
  timeLeft = maxTime;
  time.innerText = timeLeft;
  input.value = "";
  charIndex = 0;
  mistake = 0;
  isTyping = false;
  wpm.innerText = 0;
  cpm.innerText = 0;
  mistakes.innerText = 0;
}

input.addEventListener("input", initTyping);
btn.addEventListener("click", reset);
loadParagraph();
