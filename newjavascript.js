jQuery(function($){

    var launch = new Date(2115, 10, 18, 00, 00, 00);//Les dates sont comme ce-ci : (annÃ©e, mois(janvier = 00 et dÃ©cembre 11), jour, heure, minute, seconde)
    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');
    
    let bouttonDemarrer = document.getElementById('btn0');
let btn = document.getElementById('selecteur');


    setDate();
    function setDate(){
        var now = new Date();
        var s = ((launch.getTime() -now.getTime())/1000) -now.getTimezoneOffset()*60;
        var d = Math.floor(s/86400);
        days.html('<strong>'+d+'</strong>Jour'+(d>1?'s':''));
        s -= d*86400;
        
        var h = Math.floor(s/3600);
        hours.html('<strong>'+h+'</strong>Heure'+(h>1?'s':''));
        s -= h*3600;
        
        var m = Math.floor(s/60);
        minutes.html('<strong>'+m+'</strong>Minute'+(m>1?'s':''));
        s -= m*60;
        
        s = Math.floor(s);
        seconds.html('<strong>'+s+'</strong>Seconde'+(s>1?'s':''));
        
        setTimeout(setDate, 1000);
    
    }
    
 });
 
 

btn.addEventListener('click', changeBoutton);

function changeBoutton() {
    if (btn.value === 'Pause') {
        btn.value = 'Reprendre';
        btn.style.backgroundColor = "#0066ff" ;
        stopTimer();
    } else {
    btn.value = 'Pause';
        stopTimer();
        loop(document.getElementById("compteur").innerHTML);
        btn.style.backgroundColor = "blue" ;
        
    }

}



//On recupere la valeur entrée par l'utilisateur.
function demarrer() {
    stopTimer();
    let i = document.getElementById('nbr').value;
    loop(i);
}
//Arrete le timer
function stopTimer() {
    clearTimeout(alpha);
}
