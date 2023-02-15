let imgBtmRight = document.getElementById('imgBtmRight');
let imgBack = document.getElementById('imgBack');


window.addEventListener('scroll',function(){


    var widthBack=imgBtmRight.style.width;
    if(window.scrollY >50){

        imgBtmRight.style.width= "45%";
        imgBtmRight.style.transition= "1s";
   

    }
    else{
       
        imgBtmRight.style.width = "50%";
        imgBtmRight.style.transition= "1s";

    }
})
//
let valueDisplays = document.querySelectorAll(".num")
let interval = 2000;
valueDisplays.forEach((valueDisplay,i) => {
let startvalue = 0;
let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval( function (){
        startvalue +=1;
        if(i==0){

            valueDisplay.innerHTML = startvalue+"<i class='fa-solid fa-percent ms-2'></i>";
        }else{
            
            valueDisplay.textContent = startvalue;
        }
    if (startvalue== endValue){
        clearInterval(counter);
    }
},duration);
});
//ahmad-sec
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  // display nav bar//
let btn = document.querySelectorAll(".link-drop");
let div = document.querySelectorAll('.drop');
btn.forEach((ele,i) => {

  ele.addEventListener("click", () => {
    
    div.forEach((element, j )=> {
      if(j!=i){
        element.classList.add('d-none')
      }
    });
    div[i].classList.toggle('d-none')
    // if (div[i].classList.contains('d-none')) {
    //   div[i].classList.replace('d-none','d-block')
    // } else {
    //   div[i].classList.replace('d-block','d-none')
    // }
  });
});
//form////////////////////////////////////////////////////
let nameError1 = document.getElementById('email-error1')
let nameError2 = document.getElementById('email-error2')
let numberError1 = document.getElementById('number-error1')
let numberError2 = document.getElementById('number-error2')
let fnameError1 = document.getElementById('fname-error1')
let fnameError2 = document.getElementById('fname-error2')
let lnameError1 = document.getElementById('lname-error1')
let lnameError2 = document.getElementById('lname-error2')
let descError = document.getElementById('msg-error')
let sendele= document.getElementById('sendform')
let textarea = document.getElementById('exampleFormControlTextarea1')
let inpufeild = document.querySelectorAll('.form-control')
let selectionInquiry = document.getElementById('selectionInq')
let selectionCity = document.getElementById('selectionCity')
//add invalid to inputs//
let inputval= document.getElementsByTagName('input')
let label = document.querySelectorAll('.inpuVal')
let inputs= Array.from(inputval)
let lables= Array.from(label)

inputs.forEach((input,i) => {
input.addEventListener('click',() => {
  if(input.classList.contains('is-valid')){
    input.classList.add('')
  }else{
    input.classList.add('is-invalid')
  }
});
});
textarea.addEventListener('click',() => {
  if(textarea.classList.contains('is-valid')){
    textarea.classList.add('')
  }else{
    textarea.classList.add('is-invalid')
  }
});
//email-validation
email = document.getElementById('inputEmail4')
let emailPattern = /^[^\s@]+@(gmail|yahoo|hotmail|outlook)\.com$/;
email.onkeyup = function(){
if(email.value.length==0){
  nameError1.classList.toggle('d-none')
  nameError2.classList.add('d-none')
  email.style=`
        background-color:rgba(240, 43, 43, 0.1);
        
        `
        
}
  else{

    if(emailPattern.test(email.value)){
      email.style=`
      background-color:rgba(43, 253, 102, 0.1);
      `
      nameError1.classList.add('d-none')
      nameError2.classList.add('d-none')
     
      email.classList.remove('is-invalid')
      email.classList.add('is-valid')
      // sendele.classList.remove('disabled')
    }else{ 
      // sendele.classList.add('disabled')
      email.classList.remove('is-valid')
      email.classList.add('is-invalid')
        nameError2.classList.remove('d-none')
        nameError1.classList.add('d-none')
        email.style=`
        background-color:rgba(240, 43, 43, 0.1);
        
        `
        
        
      
    }
  }
}



//number-validation
let  phonePattern = /^05\d{8}$/;
let number = document.getElementById('number')
number.onkeyup = function(){
  if(number.value.length=0){
    numberError1.classList.toggle('d-none')
    numberError2.classList.add('d-none')
    number.style=`
        background-color:rgba(240, 43, 43, 0.1);
        
        `
        
  }else{

    if(phonePattern.test(number.value)){
      number.style=`
      background-color:rgba(43, 253, 102, 0.1);
      
      `
      numberError1.classList.add('d-none')
      numberError2.classList.add('d-none')
      number.classList.remove('is-invalid')
      number.classList.add('is-valid')
      // sendele.classList.remove('disabled')
    }else{
      // sendele.classList.add('disabled')
      number.classList.remove('is-valid')
      number.classList.add('is-invalid')
      numberError2.classList.remove('d-none')
      numberError1.classList.add('d-none')
      number.style=`
      background-color:rgba(240, 43, 43, 0.1);
      
      `
     
      
    }
  }
}
//name-validation
let  namePattern =/^[A-Z][a-zA-Z ]{2,15}$/;
let fname = document.getElementById('first')
fname.onkeyup = function(){
  if(fname.value.length==0){
    fnameError1.classList.toggle('d-none')
    fnameError2.classList.add('d-none')
    fname.style=`
        background-color:rgba(240, 43, 43, 0.1);
        
        `
        
  }else{

    if( namePattern.test(fname.value)){
      fname.style=`
      background-color:rgba(43, 253, 102, 0.1);
      
      `
      fnameError1.classList.add('d-none')
      fnameError2.classList.add('d-none')
      fname.classList.remove('is-invalid')
      fname.classList.add('is-valid')
      // sendele.classList.remove('disabled')
    }else{
      // sendele.classList.add('disabled')
      fname.classList.remove('is-valid')
      fname.classList.add('is-invalid')
      fnameError2.classList.remove('d-none')
      fnameError1.classList.add('d-none')
      fname.style=`
      background-color:rgba(240, 43, 43, 0.1);
      
      `
      
    }
  }
}
//2NDName
let lname = document.getElementById('lastN')
lname.onkeyup = function(){
  if(lname.value.length==0){
    lnameError1.classList.toggle('d-none')
    lnameError2.classList.add('d-none')
    lname.style=`
        background-color:rgba(240, 43, 43, 0.1);
        
        `
        
  }else{

    if( namePattern.test(lname.value)){
      lname.style=`
      background-color:rgba(43, 253, 102, 0.1);
      
      `
      lnameError1.classList.add('d-none')
      lnameError2.classList.add('d-none')
      lname.classList.remove('is-invalid')
      lname.classList.add('is-valid')
      // sendele.classList.remove('disabled')
    }else{
      lname.classList.remove('is-valid')
      lname.classList.add('is-invalid')
      lnameError2.classList.remove('d-none')
      lnameError1.classList.add('d-none')
      // sendele.classList.add('disabled')
      lname.style=`
      background-color:rgba(240, 43, 43, 0.1);
      
      `
      
    }
  }
}

//text-area
textarea.onkeyup = function(){
    if (textarea.value.length !=0){
      descError.classList.add('d-none')
      textarea.classList.remove('is-invalid')
      textarea.classList.add('is-valid')
      // sendele.classList.remove('disabled')
  }else{
    textarea.classList.remove('is-valid')
      textarea.classList.add('is-invalid')
    descError.classList.remove('d-none')
    // sendele.classList.add('disabled')
  }
  
}
checkValid = function(){
  if (emailPattern.test(email.value)) 
  
  {
    console.log('hi')
    // sendele.classList.remove('disabled')
  }
}


console.log(selectionCity.value )
//CLEAR
clearinputs = function (){
  inpufeild.forEach((felid,k) =>{
    felid.value=''
  })

}

// alerts
sendele.addEventListener("click",(e)=>{
  e.preventDefault();
  Swal.fire({
    title: 'Do you want to send the request?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'send',
    denyButtonText: `Don't send`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    
    if (result.isConfirmed) {
        if(email.classList.contains('is-valid') && number.classList.contains('is-valid') &&
         fname.classList.contains('is-valid') && lname.classList.contains('is-valid') && textarea.classList.contains('is-valid')
         && selectionCity.value != 0 && selectionInquiry.value != 0 ){
        Swal.fire('Saved!', '', 'success')
        clearinputs();
        setTimeout(function(){
          window.location.reload();
       }, 2000);
      }else{
        Swal.fire('invalid data', '', 'info')
      }
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  
})