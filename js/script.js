function checkScroll(){
    let navbar = document.querySelector('.navbar');
 
    let scrollValue = window.scrollY;
 
      if(scrollValue < 400){
        navbar.classList.remove('navColor');
        document.getElementById('home').style.color = "#0C5D34";
        document.getElementById('home2').style.color = "#0C5D34";
        document.getElementById('home3').style.color = "#0C5D34";
        document.getElementById('reg').style.border = "2px solid transparent";
        document.getElementById('log').style.color = "#0C5D34";
        document.querySelector('.hovSign').style.color = "#0C5D34";
        document.getElementById('at').style.color = "#24262c";
        document.getElementById('at').style.borderBottom = "2px solid #24262c";
        document.getElementById('logo').src = "./Images/Jobvista_green_2-removebg-preview.png";
      }else{
        navbar.classList.add('navColor');
        document.getElementById('home').style.color = "white";
        document.getElementById('home2').style.color = "white";
        document.getElementById('home3').style.color = "white";
        document.getElementById('at').style.color = "white";
        document.getElementById('at').style.borderBottom = "2px solid white";
        document.querySelector('.navbar-toggler').style.backgroundColor = "transparent";
        document.querySelector('.navbar-toggler-icon').style.color = "white";
        document.querySelector('.navbar-toggler').style.color = "white";
        document.querySelector('.navbar-toggler').style.border = "2px solid white";
        document.getElementById('log').style.color = "white";
        document.querySelector('.hovSign').style.color = "#0C5D34";
        document.getElementById('logo').src = "./Images/Jobvista_white-removebg-preview.png";
      }
 
    console.log(scrollValue);
 }window.addEventListener('scroll', checkScroll);
 


// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting){
//       entry.target.classList.add('fadeoff')
//     }
//     else{
//       entry.target.classList.remove('fadeoff')
//     }
//   })
// })
// const hiddenElements = document.querySelectorAll('.fadeon');
// hiddenElements.forEach((el) => observer.observe(el));


let loader = document.getElementById('preloader');

function viewPage(){
    loader.style.display = 'none';
}

window.addEventListener('load', () =>{
   setTimeout(viewPage, '3400');
})


  

function myvalid2(){
  let errorI = document.getElementById("e1");
  let errorII = document.getElementById("e2");
  let errorIII = document.getElementById("e3");
  let errorIV = document.getElementById("e4");
  let errorV = document.getElementById("e5");

  let nme = document.getElementById("name");
  let name = nme.value;
  let eml = document.getElementById("email");
  let Email = eml.value;
  let add = document.getElementById("address");
  let address = add.value;
  let pNum = document.getElementById("phoneNo");
  let phoneNo = pNum.value;
  let prjt = document.getElementById("project");
  let project = prjt.value;

  let text = /^[A-Za-z\s]+$/;
  let num = /^[0-9]+$/;
  let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




  if(name.trim() == ''){
      errorI.style.display = "inline";
      errorI.innerHTML = "Please fill in name";
      return false;
  }else if(!text.test(name)){
      errorI.style.display = "inline";
      errorI.innerHTML = "Please fill in name correctly";
      return false;
  }else if(Email.trim() == ''){
      errorII.style.display = "inline";
      errorII.innerHTML = "Please fill in Email";
      errorI.style.display = "none";
      return false;
  }else if(!email.test(Email)){
      errorII.style.display = "inline";
      errorII.innerHTML = "Please fill in Email correctly";
      return false;
  }else if(phoneNo.trim() == ''){
      errorIII.style.display = "inline";
      errorIII.innerHTML = "Please fill in Phone Number";
      errorII.style.display = "none";
      return false;
  }else if(!num.test(phoneNo)){
      errorIII.style.display = "inline";
      errorIII.innerHTML = "Please fill in Phone Number correctly";
      return false;
  }else if(phoneNo.trim() == "" || phoneNo.length < 11 || phoneNo.length > 11){
      errorIII.style.display = "inline";
      errorIII.innerHTML = 'Must be 11 digits';
      return false; 
  }else if(address.trim() == ''){
      errorIV.style.display = "inline";
      errorIV.innerHTML = "Please fill in address";
      errorIII.style.display = "none";
      return false;
  }else if(project.trim() == ''){
      errorV.style.display = "inline";
      errorV.innerHTML = "Please describe Project";
      errorIV.style.display = "none";
      return false;
  }
  else{
      errorV.style.display = "none";
      localStorage.setItem('name', name);
      return true;
  }
}


function tak(){
  let tacty = document.getElementById('tac');
  let tacter = tacty.value;
  let tactyerr = document.querySelector('.taerr');

  tacty.addEventListener('input', () =>{
    tactyerr.style.color = 'white';
  })

  if(tacter.trim() == ""){
    tactyerr.innerHTML = 'Enter a valid email address';
    tactyerr.style.color = 'red';
    return false;
  }
  else{
    alert('Subscription successful');
    return true;
  }
}



function subm() {
  'use strict';
  window.addEventListener('load', function() {
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
};