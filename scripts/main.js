/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
    const info1 = document.querySelector('.algoInfo')
    info1.innerText = "Select a sorting algorithm to get brief information."
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":{
            Bubble()
            const info = document.querySelector('.algoInfo')
            info.innerHTML = "Best case:<br> &#937(N) <br> Average Case: <br> &#920(N^2) <br> Worst Case: <br>O(N^2)<br><br> Space Complexity: <br>O(1)<br><br> Category:<br> Inplace"
        }
                        break;
        case "Selection":{
            Selection_sort()
            const info = document.querySelector('.algoInfo')
            info.innerHTML = "Best case:<br> &#937(N^2) <br> Average Case: <br> &#920(N^2) <br> Worst Case: <br>O(N^2)<br><br> Space Complexity: <br>O(1)<br><br> Category: <br>Inplace"
        }
                        break;
        case "Insertion":{
            Insertion();
            const info = document.querySelector('.algoInfo')
            info.innerHTML = "Best case:<br> &#937(N) <br> Average Case: <br>&#920(N^2) <br> Worst Case: <br>O(N^2) <br><br> Space Complexity: <br>O(1) <br><br> Category: <br>Inplace"
        }
                        break;
        case "Merge":{
            Merge();
            const info = document.querySelector('.algoInfo')
            info.innerHTML = "Best case:<br> &#937(N log N) <br> Average Case: <br>&#920(N log N)<br> Worst Case: <br>O(N log N)<br><br> Space Complexity: <br>O(N) <br><br> Category: <br>External"
        }
                        break;
        case "Quick":{
            Quick();
            const info = document.querySelector('.algoInfo')
            info.innerHTML = "Best case:<br> &#937(N log N) <br> Average Case: <br>&#920(N log N)<br> Worst Case: <br>O(N^2)<br><br> Space Complexity: <br>O(N) <br><br> Category: <br>Inplace"
        }
                        break;
        case "Heap":{
            Heap();
            const info = document.querySelector('.algoInfo')
            info.innerHTML = "Best case:<br> &#937(N log N) <br> Average Case: <br>&#920(N log N) <br> Worst Case: <br>O(N log N)<br> <br>Space Complexity: <br>O(N)<br> <br>Category: <br>Inplace"
        }
                        break;
    }
}

