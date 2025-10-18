/* Global script */

/* Age clicker */
var age = 22;
const birthdate = "2002-10-18"

age = calculateAge(birthdate);
document.getElementById("age-clicker").textContent = age.toString();

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

function addAge() {
    var ageCount = Number(document.getElementById('age-clicker').textContent);
    ageCount++;
    document.getElementById("age-clicker").textContent = ageCount;    
}