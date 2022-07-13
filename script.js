const container=document.querySelector('.container');
const count=document.getElementById('count');
const amount=document.getElementById('amount');
const select=document.getElementById('movie');
const seats=document.querySelectorAll('.seat:not(.reserved)')


getFromLocalStorage();
calculatetotal();

container.addEventListener('click',function(e){
if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved'))
e.target.classList.toggle('selected');
calculatetotal();
});



select.addEventListener('change',function(e){
    calculatetotal();

});


function calculatetotal(){
   const selectedseats=container.querySelectorAll('.seat.selected');
   let selectedseatcount=selectedseats.length;
   const selectedseatsarr=[];
   const seatsarr=[];
   selectedseats.forEach(function(seat){
   selectedseatsarr.push(seat);

});
    seats.forEach(function(seat){
    seatsarr.push(seat);
    
    });

    let selectedseatindexs=selectedseatsarr.map(function(seat){
    return seatsarr.indexOf(seat);

    });
    
    count.innerText=selectedseatcount;
    amount.innerText=selectedseatcount*select.value;

    savetolocalstorage(selectedseatindexs);
    
}
function getFromLocalStorage() {
    const selectedseats = JSON.parse(localStorage.getItem('selectedseats'));

    if (selectedseats !=null && selectedseats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selectedseats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }



    const selectedmovieindex = localStorage.getItem('selectedmovieindex');

    if (selectedmovieindex != null) {
        select.selectedIndex = selectedmovieindex;
    }
}

function savetolocalstorage(indexs){
localStorage.setItem('selectedseats',JSON.stringify(indexs));
localStorage.setItem('selectmovieindex',select.selectedIndex);
}