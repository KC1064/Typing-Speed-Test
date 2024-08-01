const text = document.querySelector(".typingtext p");
const input = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistake span");
const cpm = document.querySelector(".wpm span");
const wpm = document.querySelector(".cpm span");
const btn = document.querySelector("button");

//set Value
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
  const paragraph = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Life is what happens when you're busy making other plans.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You miss 100% of the shots you don't take.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict your future is to create it.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "It is our choices, that show what we truly are, far more than our abilities.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "You must be the change you wish to see in the world.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "The only way to do great work is to love what you do.",
    "It does not matter how slowly you go as long as you do not stop.",
    "If you tell the truth, you don't have to remember anything.",
    "The only thing we have to fear is fear itself.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Our lives begin to end the day we become silent about things that matter.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Believe you can and you're halfway there.",
    "It is never too late to be what you might have been.",
    "The purpose of our lives is to be happy.",
    "Don't watch the clock; do what it does. Keep going.",
  ];

  const randomidx = Math.floor(Math.random() * paragraph.length);
  text.innerHTML = "";
  for (const char of paragraph[randomidx]) {
    text.innerHTML += `<span>${char}</span>`;
  }

  text.querySelectorAll("span")[0].classList.add("active");

  document.addEventListener('keydown',()=>input.focus());
  text.addEventListener("click",()=>{input.focus()})
}

//Hanndling User Input
function initTyping() {
  const char = text.querySelectorAll("span");
  const typedChar = input.value.charAt(charIndex);
  if (charIndex < char.length && timeLeft > 0) {
    if (char[charIndex].innerText === typedChar) {
      char[charIndex].classList.add("correct");
    //   console.log("correct");
    } else {
      mistake++;
      char[charIndex].classList.add("incorrect");
    //   console.log("Incorrect");
    }
    charIndex++;

    char[charIndex].classList.add('active');

    mistakes.innerText = mistake;
  }
  else{

  }
}

input.addEventListener("input", initTyping);
loadParagraph();


/// 36