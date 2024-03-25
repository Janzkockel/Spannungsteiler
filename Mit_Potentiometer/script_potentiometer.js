let canvas = document.getElementById("canvas_html");
let ct = canvas.getContext("2d");

let schema = new Image();
schema.src = "Schema.png";

let arrow = new Image();
arrow.src = "arrow.png";

let shrek = new Image();
shrek.src = "shrek.png";

let count = 0;
//sncr = stellen nach comma runden -> ein 0 = eine Zahl
let sncr = 1000;

let poti = 200;
let rl = 50;
let voltage = 100;

let n = 50;
let poti_down = poti/100*n;
let poti_up = poti-poti_down;


let rges = poti_up + ((rl*poti_down)/(rl+poti_down));
let strom = voltage/rges;

let u_poti = voltage;
let u_rl = ((rl*poti_down)/(rl+poti_down))*voltage/((rl*poti_down)/(rl+poti_down) + poti_up);

let I3 = u_rl/rl;
let I2 = strom - I3;

let first_time = true;

get_data();

function get_data(){
        if(first_time){

          document.getElementById("i_u").value = voltage;
          document.getElementById("i_rl").value = rl;
          document.getElementById("i_poti").value = poti;
          document.getElementById("i_poti_up_per").value = n;
              

          first_time = false;
        }
        poti = parseFloat(document.getElementById("i_poti").value);
        rl = parseFloat(document.getElementById("i_rl").value);
        voltage = parseFloat(document.getElementById("i_u").value);
        n = parseFloat(document.getElementById("i_poti_up_per").value);
        

        //poti gesmat
        if(poti > 10000){
            poti = 10000;
        }
        if(poti < 0){
            poti = 0;
        }

        //rl
        if(rl > 10000){
            rl = 10000;
        }
        if(rl < 0){
            rl = 0;
        }

        //voltage
        if(voltage > 1000){
            voltage =  1000;
        }
        if(voltage < 0){
            voltage = 0;
        }
        
        //poti up persentage
        if(n > 100){
            n = 100;
            alert("Woher zauberst du den restlichen Widerstand?");
            count += 1;
        }
        if(n < 0){
            n = 0;
        }

        document.getElementById("i_u").value = Math.round(voltage * sncr)/sncr;
        document.getElementById("i_rl").value = Math.round(rl * sncr)/sncr;
        document.getElementById("i_poti").value = Math.round(poti * sncr)/sncr;
        document.getElementById("i_poti_up_per").value = Math.round(n * sncr)/sncr;
        
        
        claculate();
}

function claculate(){

    poti_down = poti/100*n;
    poti_up = poti-poti_down;
    rges = poti_up + ((rl*poti_down)/(rl+poti_down));
    strom = voltage/rges;
    u_poti = voltage;
    u_rl = ((rl*poti_down)/(rl+poti_down))*voltage/((rl*poti_down)/(rl+poti_down) + poti_up);
    I3 = u_rl/rl;
    I2 = strom - I3;

    draw();
    print_out();
}
function reset(){
    poti = 200;
    n = 50;
    rl = 50;
    voltage = 100;
    
    document.getElementById("i_u").value = voltage;
    document.getElementById("i_rl").value = rl;
    document.getElementById("i_poti").value = poti;
    document.getElementById("i_poti_up_per").value = n;
    
    get_data();
}

function draw(){
        let add_y = 111/100*n;
        ct.drawImage(schema,0,0); 
        ct.drawImage(arrow,381, 121 - 9 - add_y + 111);

        ct.fillStyle = "white";
        ct.fillRect(598,121,3,111 - add_y);

        if (count == 4) {
            alert("!!!!!!!!!!!!!HALT STOP!!!!!!!!!!!!!")
            ct.drawImage(shrek,0,0,700,500)
        }
}


function print_out(){
    document.getElementById("out_I").innerHTML = Math.round(strom*sncr)/sncr;
    document.getElementById("out_I2").innerHTML = Math.round(I2*sncr)/sncr;
    document.getElementById("out_I3").innerHTML = Math.round(I3*sncr)/sncr;
    document.getElementById("out_u_poti").innerHTML = Math.round(u_poti*sncr)/sncr;
    document.getElementById("out_u_rl").innerHTML = Math.round(u_rl*sncr)/sncr;
    document.getElementById("out_poti_up").innerHTML = Math.round(poti_up*sncr)/sncr;
    document.getElementById("out_poti_down").innerHTML = Math.round(poti_down*sncr)/sncr;
    
}