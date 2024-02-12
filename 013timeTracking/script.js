/*let data;

function cargarDatos() {
  fetch('./data.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
    })
    .catch(error => {
      console.error('Error al cargar los datos:', error);
    });
}*/

let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");
let newly = document.getElementById("newly");

daily.addEventListener("click", function() {
  document.getElementById("workHrs").innerText = "5hrs";
  document.getElementById("playHrs").innerText = "1hrs";
  document.getElementById("studyHrs").innerText = "0hrs";
  document.getElementById("exerciseHrs").innerText = "1hrs";
  document.getElementById("socialHrs").innerText = "1hrs";
  document.getElementById("selfCareHrs").innerText = "0hrs";
  document.querySelectorAll(".period").forEach(function(element) {element.innerText = "Yesterday";})
  document.getElementById("periodWorkHrs").innerText = "7hrs";
  document.getElementById("periodPlayHrs").innerText = "2hrs";
  document.getElementById("periodStudyHrs").innerText = "1hrs";
  document.getElementById("periodExerciseHrs").innerText = "1hrs";
  document.getElementById("periodSocialHrs").innerText = "3hrs";
  document.getElementById("periodSelfCareHrs").innerText = "1hrs";
})

weekly.addEventListener("click", function() {
  document.getElementById("workHrs").innerText = "32hrs";
  document.getElementById("playHrs").innerText = "10hrs";
  document.getElementById("studyHrs").innerText = "4hrs";
  document.getElementById("exerciseHrs").innerText = "4hrs";
  document.getElementById("socialHrs").innerText = "5hrs";
  document.getElementById("selfCareHrs").innerText = "2hrs";
  document.querySelectorAll(".period").forEach(function(element) {element.innerText = "Last Week";})
  document.getElementById("periodWorkHrs").innerText = "36hrs";
  document.getElementById("periodPlayHrs").innerText = "8hrs";
  document.getElementById("periodStudyHrs").innerText = "7hrs";
  document.getElementById("periodExerciseHrs").innerText = "5hrs";
  document.getElementById("periodSocialHrs").innerText = "10hrs";
  document.getElementById("periodSelfCareHrs").innerText = "2hrs";
})

monthly.addEventListener("click", function() {
  document.getElementById("workHrs").innerText = "103hrs";
  document.getElementById("playHrs").innerText = "23hrs";
  document.getElementById("studyHrs").innerText = "13hrs";
  document.getElementById("exerciseHrs").innerText = "11hrs";
  document.getElementById("socialHrs").innerText = "21hrs";
  document.getElementById("selfCareHrs").innerText = "7hrs";
  document.querySelectorAll(".period").forEach(function(element) {element.innerText = "Last Month";})
  document.getElementById("periodWorkHrs").innerText = "128hrs";
  document.getElementById("periodPlayHrs").innerText = "29hrs";
  document.getElementById("periodStudyHrs").innerText = "19hrs";
  document.getElementById("periodExerciseHrs").innerText = "18hrs";
  document.getElementById("periodSocialHrs").innerText = "23hrs";
  document.getElementById("periodSelfCareHrs").innerText = "11hrs";
})
