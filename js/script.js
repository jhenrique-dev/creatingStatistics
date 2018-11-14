let randomNumber = document.querySelector('.content-number');
let random = randomNumber.dataset.count;
let count = 0;

function statistic() {
   count++; 

   if( count <= random){
     
    randomNumber.innerHTML = count;         
   }
    
};

setInterval(statistic, 100);