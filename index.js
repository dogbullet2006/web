const rates = {
  uah: 0.027,
  usd: 1,
  eur: 1.08
};

const firstCurr = document.getElementById("first_curr");
const secondCurr = document.getElementById("second_curr");
const inputNum = document.getElementById("num");
const resultEl = document.getElementById("result");

function preventSameCurrency() {
  for (let i = 0; i < firstCurr.options.length; i++) {
    firstCurr.options[i].disabled =
      firstCurr.options[i].value === secondCurr.value;
  }

  for (let i = 0; i < secondCurr.options.length; i++) {
    secondCurr.options[i].disabled =
      secondCurr.options[i].value === firstCurr.value;
  }
}

function calculate() {
  preventSameCurrency();
  const from = firstCurr.value;
  const to = secondCurr.value;
  const amount = parseFloat(inputNum.value);

  if (isNaN(amount) || !rates[from] || !rates[to]) {
    resultEl.textContent = "";
    return;
  }

  const rate = rates[to] / rates[from];
  resultEl.textContent = `${(amount * rate).toFixed(2)} ${to.toUpperCase()}`;
}

firstCurr.addEventListener("change", calculate);
secondCurr.addEventListener("change", calculate);
inputNum.addEventListener("input", calculate);

preventSameCurrency();