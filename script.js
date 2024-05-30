// theme
// changing
// code

const themeChangeButton = document.getElementById("theme-change-button");
const darkModeButton = document.getElementById("darkModeButton");
const lightModeBotton = document.getElementById("lightModeButton");
themeChangeButton.onclick = function () {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    darkModeButton.style.display = "inline";
    lightModeBotton.style.display = "none";
  } else {
    darkModeButton.style.display = "none";
    lightModeBotton.style.display = "inline";
  }
};

// typing
// Effect
// code

const typingText = document.getElementById("typingText");
const text = " Designer and Developer..";

function textTypingEffect(element, text, i = 0) {
  typingText.textContent += text[i];
  if (i === text.length - 1) {
    typingText.textContent = "";
    textTypingEffect(element, text);
    return;
  }
  setTimeout(() => textTypingEffect(element, text, i + 1), 120);
}
textTypingEffect(typingText, text);

//removes
// white
// spaces
// from
// textarea

function removeTextAreaWhiteSpace() {
  var myTxtArea = document.getElementById("message");
  myTxtArea.value = myTxtArea.value.replace(/^\s*|\s*$/g, "");
}
removeTextAreaWhiteSpace();
