const adviceText = document.getElementById("advice-text");

const adviceChange = document.getElementById("advice-change");

const adviceId = document.getElementById("advice-id");

const apiCall = async () => {
  const data = await fetch("https://api.adviceslip.com/advice");

  const json = await data.json();

  adviceText.textContent = json?.slip?.advice;

  adviceId.textContent = json?.slip?.id;
};

adviceChange.onclick = () => apiCall();
