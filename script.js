const container=document.querySelector('.container');
const count=document.getElementById('count');
const amount=document.getElementById('amount');
const select=document.getElementById('movie');



container.addEventListener('click',function(e){
if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved'))
e.target.classList.toggle('selected');
calculatetotal();
});



select.addEventListener('change',function(e){
    calculatetotal();

});


function calculatetotal(){
    let selectedseatcount=container.querySelectorAll('.seat.selected').length;
    console.log(selectedseatcount);
    let price=select.value;
    count.innerText=selectedseatcount;
    amount.innerText=selectedseatcount*price;
    
}