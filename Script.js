const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const lengthEl = document.getElementById("length");
const passwordEl = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

// Character pools
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const syms = "!@#$%^&*()_+{}[]<>?/";

function generatePassword() {
  let pool = "";
  if (uppercaseEl.checked) pool += upper;
  if (lowercaseEl.checked) pool += lower;
  if (numbersEl.checked) pool += nums;
  if (symbolsEl.checked) pool += syms;

  const length = parseInt(lengthEl.value);
  if (!pool || length < 4) {
    passwordEl.value = "Select options & valid length";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += pool[Math.floor(Math.random() * pool.length)];
  }

  passwordEl.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (!passwordEl.value || passwordEl.value.startsWith("Select")) return;
  navigator.clipboard.writeText(passwordEl.value);
  copyBtn.textContent = "✅";
  setTimeout(() => (copyBtn.textContent = "📋"), 1500);
});

// GSAP animation for logo
gsap.to("#logo circle", {
  duration: 2,
  repeat: -1,
  yoyo: true,
  scale: 1.1,
  transformOrigin: "center",
  ease: "sine.inOut",
});

gsap.fromTo(
  "#logo text",
  {
    scale: 0.8,
    opacity: 0.5,
  },
  {
    scale: 1.2,
    opacity: 1,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    transformOrigin: "center",
    ease: "sine.inOut",
  }
);
