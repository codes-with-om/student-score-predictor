const form = document.getElementById("prediction-form");
const result = document.getElementById("result");
const loader = document.getElementById("loader");
const loaderText = document.getElementById("loader-text");
const button = form.querySelector("button");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  result.innerText = "";
  loader.style.display = "block";
  button.disabled = true;
  button.innerText = "Predicting...";

  const loaderMessages = [
    "Analyzing student features...",
    "Applying preprocessing pipeline...",
    "Running regression model...",
    "Generating prediction...",
  ];

  let messageIndex = 0;
  loaderText.innerText = loaderMessages[messageIndex];

  const messageInterval = setInterval(() => {
    messageIndex = (messageIndex + 1) % loaderMessages.length;
    loaderText.innerText = loaderMessages[messageIndex];
  }, 600);

  const formData = {
    Gender: document.getElementById("Gender").value,
    EthnicGroup: document.getElementById("EthnicGroup").value,
    ParentEduc: document.getElementById("ParentEduc").value,
    LunchType: document.getElementById("LunchType").value,
    TestPrep: document.getElementById("TestPrep").value,
    ParentMaritalStatus: document.getElementById("ParentMaritalStatus").value,
    PracticeSport: document.getElementById("PracticeSport").value,
    IsFirstChild: document.getElementById("IsFirstChild").value,
    TransportMeans: document.getElementById("TransportMeans").value,
    WklyStudyHours: document.getElementById("WklyStudyHours").value,
  };

  try {
    const response = await fetch(
      "/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();

    setTimeout(() => {
      clearInterval(messageInterval);

      loader.style.display = "none";
      button.disabled = false;
      button.innerText = "Predict Score";

      if (data.success) {
        result.innerText = `Predicted Math Score: ${data.prediction}`;
      } else {
        result.innerText = data.error;
      }
    }, 1800);
  } catch (error) {
    setTimeout(() => {
      clearInterval(messageInterval);

      loader.style.display = "none";
      button.disabled = false;
      button.innerText = "Predict Score";
      result.innerText =
        "Something went wrong. Please check if backend is running.";
    }, 1800);
  }
});
