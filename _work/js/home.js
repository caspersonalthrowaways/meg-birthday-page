/* Home page script */

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


