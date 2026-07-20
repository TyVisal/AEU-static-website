// ---- Tab switching ----
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ---- Tab 1: Location ----
const latEl = document.getElementById("lat");
const lngEl = document.getElementById("lng");
const resultBox = document.getElementById("resultBox");
const viewMapBtn = document.getElementById("viewMapBtn");
const status = document.getElementById("status");
let coords = null;

function requestLocation() {
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by this browser.";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      latEl.textContent = coords.lat.toFixed(7);
      lngEl.textContent = coords.lng.toFixed(7);
      status.textContent = "";
      resultBox.style.display = "block";
    },
    (error) => {
      resultBox.style.display = "none";
      if (error.code === error.PERMISSION_DENIED) {
        status.textContent = "Location access was blocked.";
      } else {
        status.textContent = "Unable to get location: " + error.message;
      }
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
  );
}
requestLocation();

viewMapBtn.addEventListener("click", () => {
  if (!coords) return;
  const url =
    "https://www.google.com/maps/search/?api=1&query=" +
    coords.lat +
    "," +
    coords.lng;
  window.open(url, "_blank");
});

// ---- Tab 2: Camera ----
const video = document.getElementById("video");
const camStatus = document.getElementById("camStatus");

function requestCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    camStatus.textContent = "Camera access is not supported by this browser.";
    return;
  }
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
      video.srcObject = stream;
      video.style.display = "block";
      camStatus.textContent = "";
    })
    .catch((err) => {
      video.style.display = "none";
      camStatus.textContent =
        "Camera access was blocked or unavailable: " + err.message;
    });
}

// Only request the camera the first time the Camera tab is opened
let cameraRequested = false;
document.querySelector('[data-tab="camera"]').addEventListener("click", () => {
  if (!cameraRequested) {
    cameraRequested = true;
    requestCamera();
  }
});
