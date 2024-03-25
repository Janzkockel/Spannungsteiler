let voltage = 100;
let r1 = 1000;
let r2 = 1000;

let rges = r1 + r2;
let strom = voltage/rges;

let u_r1 = strom*r1;
let u_r2 = strom*r2; 

let firstime = true;
//sncr = stellen nach comma runden -> ein 0 = eine Zahl
let sncr = 1000;



getdata();
function getdata(){
    if (firstime) {
        document.getElementById("i_voltage").value = voltage;
        document.getElementById("i_r1").value = r1;
        document.getElementById("i_r2").value = r2;
        firstime = false;
    }
    voltage = parseFloat(document.getElementById("i_voltage").value);
    r1 = parseFloat(document.getElementById("i_r1").value);
    r2 = parseFloat(document.getElementById("i_r2").value);
    if(r1 < 0){
        r1 = 0;
    }
    if (r1 > 10000) {
        r1 = 10000;
    }
    if(r2 > 10000){
        r2 = 10000;
    }
    if(r2 < 0){
        r2 = 0;
    }
    if(voltage < 0){
        voltage = 0;
    }
    if(voltage > 1000){
        voltage = 1000;
    }

    
    parseInt(document.getElementById("i_voltage").value = voltage);
    parseInt(document.getElementById("i_r1").value = r1);
    parseInt(document.getElementById("i_r2").value = r2);
    
    calcuate();
}   

function calcuate(){
    rges = r1 + r2;
    strom = voltage/rges;

    u_r1 = strom*r1;
    u_r2 = strom*r2;

    printout();
}

function printout(){
    document.getElementById("out_rges").innerHTML = Math.round(rges*sncr)/sncr;
    document.getElementById("out_strom").innerHTML = Math.round(strom*sncr)/sncr;
    document.getElementById("out_ur1").innerHTML = Math.round(u_r1*sncr)/sncr;
    document.getElementById("out_ur2").innerHTML = Math.round(u_r2*sncr)/sncr;

}
