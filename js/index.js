document.querySelectorAll('.digits button')
   .forEach(button => button.addEventListerer('click', addDigits))
   function addDigits(ev){
   display.value  += ev.target.innerText;
   }