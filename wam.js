let count = 1;
let div = document.querySelectorAll('.div1');
let h1 = document.getElementById('h1');
let button = document.getElementById('btn');
let btndiv = document.getElementById('button');
let border = document.getElementById('border');
setInterval(() => {

    let random = Math.floor(Math.random() * 9)


    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let fil = num.filter((e) => e != random)


    for (i = 0; i < num.length; i++) {
        div[i].style = "color:white";




    }
    div[random].style = "  background-size:cover;animation-name: example;animation-duration: 1s;animation-iteration-count:infinite;  color:red;background-color:black; background: url('/real mouse.png');border-radius:10rem; background-size:13rem;background-repeat:no-repeat ";



}, 1050);













div[0].addEventListener('click',
function c(){

  if(div[0].style.color === 'red' ){

    h1.innerHTML="Your Score: " +count++;
  }else{
   border.innerHTML=h1.textContent;
h1.innerHTML="";
btndiv.style.display="block";
border.id="newdiv";
}}     )  
div[1].addEventListener('click',
function c(){

    if(div[1].style.color === 'red' ){

        h1.innerHTML="Your Score: " +count++;
  }else{
    border.innerHTML=h1.textContent;
    h1.innerHTML="";
    btndiv.style.display="block";
    border.id="newdiv";
}}     )  
div[2].addEventListener('click',
function c(){

    if(div[2].style.color === 'red' ){

        h1.innerHTML="Your Score: " +count++;
    }else{
        border.innerHTML=h1.textContent;
        h1.innerHTML="";
        btndiv.style.display="block";
        border.id="newdiv";
    }}     )  
    div[3].addEventListener('click',
function c(){

    if(div[3].style.color === 'red' ){

        h1.innerHTML="Your Score: " +count++;
    }else{
        border.innerHTML=h1.textContent;
        h1.innerHTML="";
        btndiv.style.display="block";
        border.id="newdiv";
    }}     )  
    div[4].addEventListener('click',
    function c(){

        if(div[4].style.color === 'red' ){

            h1.innerHTML="Your Score: " +count++;
        }else{
            let border = document.getElementById('border');
            border.innerHTML=h1.textContent;
            h1.innerHTML="";
            btndiv.style.display="block";
            border.id="newdiv";
        }}     )  
        div[5].addEventListener('click',
        function c(){

            if(div[5].style.color === 'red' ){

                h1.innerHTML="Your Score: " +count++;
            }else{
                let border = document.getElementById('border');
                border.innerHTML=h1.textContent;
                h1.innerHTML="";
                btndiv.style.display="block";
                border.id="newdiv";
}}     )  
div[6].addEventListener('click',
function c(){

    if(div[6].style.color === 'red' ){

        h1.innerHTML="Your Score: " +count++;
    }else{
        border.innerHTML=h1.textContent;
        h1.innerHTML="";
        btndiv.style.display="block";
        border.id="newdiv";
}}     )
div[7].addEventListener('click',
function c(){

  if(div[7].style.color === 'red' ){

      h1.innerHTML="Your Score: " +count++;
    }else{
        border.innerHTML=h1.textContent;
        h1.innerHTML="";
   btndiv.style.display="block";
   border.id="newdiv";
}}     )  
div[8].addEventListener('click',
function c(){

  if(div[8].style.color === 'red' ){

    h1.innerHTML=h1.textContent;
  }else{
      border.innerHTML=h1.textContent;
   h1.innerHTML="";
   btndiv.style.display="block";
   border.id="newdiv";
}}     )  










function reload() { location.reload() }




