let first_time = true;

let sncr = 1000;

let voltage = 10;
let r1 = 100;
let r2 = 100;
let rl = 50;

let rges = r1 + ((rl*r2)/(rl+r2));
let strom = voltage/rges;

let u1 = voltage*r1/rges;
let u2 = voltage*((rl*r2)/(rl+r2))/rges;
let url = voltage*((rl*r2)/(rl+r2))/rges;

let I2 = u2/r2;
let I3 = url/rl;

get_data();

function get_data(){
    if(first_time){

      document.getElementById("i_u").value = voltage;
      document.getElementById("i_r1").value = r1;
      document.getElementById("i_r2").value = r2;    
      document.getElementById("i_rl").value = rl;
      
      first_time = false;
    }
    voltage = parseFloat(document.getElementById("i_u").value);
    r1 = parseFloat(document.getElementById("i_r1").value);
    r2 = parseFloat(document.getElementById("i_r2").value);
    rl = parseFloat(document.getElementById("i_rl").value);
    

    //voltage
    if(voltage > 1000){
        voltage =  1000;
    }
    if(voltage < 0){
        voltage = 0;
    }
    //r1 
    if(r1 > 10000){
        r1 = 10000;
    }
    if(r1 < 0){
        r1 = 0;
    }
    if(r2 > 10000){
        r2 = 10000;
    }
    if(r2 < 0){
        r2 = 0;
    }
    //rl
    if(rl > 10000){
        rl = 10000;
    }
    if(rl < 0){
        rl = 0;
    }

    
    

    document.getElementById("i_u").value = Math.round(voltage * sncr)/sncr;
    document.getElementById("i_r1").value = Math.round(r1 * sncr)/sncr;
    document.getElementById("i_r2").value = Math.round(r2 * sncr)/sncr;
    document.getElementById("i_rl").value = Math.round(rl * sncr)/sncr;

    claculate();
}

function claculate(){
    rges = r1 + ((rl*r2)/(rl+r2));
    strom = voltage/rges;

    u1 = voltage*r1/rges;
    u2 = voltage*((rl*r2)/(rl+r2))/rges;
    url = voltage*((rl*r2)/(rl+r2))/rges;
    
    I2 = u2/r2
    I3 = url/rl;

    print_out();
}

function print_out(){
    document.getElementById("out_rges").innerHTML = Math.round(rges*sncr)/sncr;
    document.getElementById("out_strom").innerHTML = Math.round(strom*sncr)/sncr;
    document.getElementById("out_I2").innerHTML = Math.round(I2*sncr)/sncr;
    document.getElementById("out_IL").innerHTML = Math.round(I3*sncr)/sncr;
    document.getElementById("out_u1").innerHTML = Math.round(u1*sncr)/sncr;
    document.getElementById("out_u2").innerHTML = Math.round(u2*sncr)/sncr;
    document.getElementById("out_url").innerHTML = Math.round(url*sncr)/sncr;
}

