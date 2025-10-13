/* Home page script */
/* TODO: Calculate age + age clicker */

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

/* ------------ */

/* MEG stands for */

var niceMode = true;

var M = document.getElementById("m-stands-for");
var E = document.getElementById("e-stands-for");
var G = document.getElementById("g-stands-for");

const M_nice = ["MEMORABLE!", "MARVELOUS!", "MAGNETIC!"]
const E_nice = ["EARNEST!", "EXCEPTIONAL!", "ENDEARING!"]
const G_nice = ["GENIUS!", "GROOVY!", "GOOD!"]
const M_evil = ["MATULOG!"]
const E_evil = ["EVIL!"]
const G_evil = ["GLUTTONOUS!", "GAYSEX!"]

// const M_nice_maxIndex = M_nice.length;
// const E_nice_maxIndex = E_nice.length;
// const G_nice_maxIndex = G_nice.length;

// const M_evil_maxIndex = M_evil.length;
// const E_evil_maxIndex = E_evil.length;
// const G_evil_maxIndex = G_evil.length;

standsForSwitch();

function standsForSwitch(){
    console.log("standsForSwitch() called");
    console.log(niceMode);
    var m_text = "ERROR";
    var e_text = "ERROR";
    var g_text = "ERROR";
    if(niceMode){
        m_text = M_nice[Math.floor(Math.random()*M_nice.length)];
        e_text = E_nice[Math.floor(Math.random()*E_nice.length)];
        g_text = G_nice[Math.floor(Math.random()*G_nice.length)];
        niceMode = false;
    } else {
        m_text = M_evil[Math.floor(Math.random()*M_evil.length)];
        e_text = E_evil[Math.floor(Math.random()*E_evil.length)];
        g_text = G_evil[Math.floor(Math.random()*G_evil.length)];
        niceMode = true;
    }    
    M.textContent = m_text;
    E.textContent = e_text;
    G.textContent = g_text;
}

/* ------------ */


