"use strict";

/* Global script */

/* Age clicker */
var age = 22;
var birthdate = "2002-10-18";
age = calculateAge(birthdate);
document.getElementById("age-clicker").textContent = age.toString();

function calculateAge(birthDate) {
  var today = new Date();
  var birth = new Date(birthDate);
  var age = today.getFullYear() - birth.getFullYear();
  var monthDiff = today.getMonth() - birth.getMonth();
  var dayDiff = today.getDate() - birth.getDate();

  if (monthDiff < 0 || monthDiff === 0 && dayDiff < 0) {
    age--;
  }

  return age;
}

function addAge() {
  var ageCount = Number(document.getElementById('age-clicker').textContent);
  ageCount++;
  document.getElementById("age-clicker").textContent = ageCount;
}