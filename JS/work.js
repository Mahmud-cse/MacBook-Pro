// value
function setAll(id,value){
    const productMoney=document.getElementById(id+'-money-all');
    productMoney.innerText=value;

    setTotal();
}

// total
function setTotal(){
    let firstValue=parseInt(document.getElementById('memory-money-all').innerText);
    let secondValue=parseInt(document.getElementById('storage-money-all').innerText);
    let thirdValue=parseInt(document.getElementById('delivery-money-all').innerText);

    let total=firstValue+secondValue+thirdValue+1299;
    document.getElementById('money-add-all').innerText=total;
}

// memory
document.getElementById('memory-first').addEventListener('click',function(){
    setAll('memory',0);
})

document.getElementById('memory-second').addEventListener('click',function(){
   setAll('memory',180);
})


// ssd
document.getElementById('ssd-first').addEventListener('click',function(){
    setAll('storage',0);
})
document.getElementById('ssd-second').addEventListener('click',function(){
    setAll('storage',100);
})
document.getElementById('ssd-third').addEventListener('click',function(){
    setAll('storage',180);
})


// delivery
document.getElementById('first-delivery').addEventListener('click',function(){
    setAll('delivery',0);
})
document.getElementById('second-delivery').addEventListener('click',function(){
    setAll('delivery',20);
})



