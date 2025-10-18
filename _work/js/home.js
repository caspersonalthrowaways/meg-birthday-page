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
var standsForButton = document.getElementById("evil");

const M_nice = ["MEMORABLE!", "MARVELOUS!", "MAGNETIC!"]
const E_nice = ["EARNEST!", "EXCEPTIONAL!", "ENDEARING!"]
const G_nice = ["GENIUS!", "GREAT!", "GOOD!"]

const M_evil = ["MAANTUKIN!", "MATANDA!"]
const E_evil = ["EVIL!"]
const G_evil = ["GLUTTONOUS!", "GAY!", "GYATT!!!!!", "GUTOM PALAGI!"]

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
        standsForButton.textContent = ":)"
        niceMode = false;
    } else {
        m_text = M_evil[Math.floor(Math.random()*M_evil.length)];
        e_text = E_evil[Math.floor(Math.random()*E_evil.length)];
        g_text = G_evil[Math.floor(Math.random()*G_evil.length)];
        standsForButton.textContent = ">:)"
        niceMode = true;
    }    
    M.textContent = m_text;
    E.textContent = e_text;
    G.textContent = g_text;
}

/* ------------ */


