let tipbtns=document.querySelectorAll('.tip');
let inputBill=document.getElementById('bill');
let people=document.getElementById('people');
let totaltip;
let totalPrice;

Array.from(tipbtns).forEach((tip)=>{
    tip.addEventListener('click', (e)=>{
        if (inputBill.value!=="" && people.value!==""){
            totaltip=(((parseFloat(inputBill.value)*e.target.value))/people.value).toFixed(2);
            totalPrice=(((parseFloat(inputBill.value))/people.value)+parseFloat(totaltip)).toFixed(2);
            document.getElementById('perPerson').innerHTML=`$ ${totaltip}`;
            document.getElementById('totalPerson').innerHTML=`$ ${totalPrice}`;
            document.getElementById('custom-tip').value="";
        }
        else {
            alert("Enter bill amount and number of people")
        }
    })
})
function customTip(e){
    let customInput=e.target.value/100;
    if(inputBill.value!=="" && people.value!==""){
        totaltip=(((parseFloat(inputBill.value)*customInput))/people.value).toFixed(2);
        totalPrice=(((parseFloat(inputBill.value))/people.value)+parseFloat(totaltip)).toFixed(2);
        document.getElementById('perPerson').innerHTML=`$ ${totaltip}`;
        document.getElementById('totalPerson').innerHTML=`$ ${totalPrice}`;
    }
    else{
        alert("Enter bill amount and number of people")
    }
}
function reset(){
    document.getElementById('perPerson').innerHTML=`$ 0.00`;
    document.getElementById('totalPerson').innerHTML=`$ 0.00`;
    inputBill.value="";
    people.value="";
    document.getElementById('custom-tip').value="";
}
