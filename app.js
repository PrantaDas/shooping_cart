function quantityManage(product,isAdd,price){
    const productCount= document.getElementById(product+'-count');
    let productnumber=productCount.value;
    if(isAdd==true){

        productnumber=parseInt(productnumber)+1;
        
    }
    else if(productnumber>0){

        productnumber=parseInt(productnumber)-1;
        
    }
    productCount.value=productnumber;
    const ProducttotalPrice= document.getElementById(product+'-price');
    ProducttotalPrice.innerText=price*productnumber;

    calculateSubTotal();

}

function getInputValue(product){
    const productInput=document.getElementById(product+'-count');
    const productInNumber=parseInt(productInput.value);
    return productInNumber;
}
function calculateSubTotal(){
    const phoneTotal=getInputValue('mobile')*1219;
    const caseTotal=getInputValue('case')*59;
    const subTotal=phoneTotal+caseTotal;
    console.log(subTotal);
    const tax=subTotal/10;
    const grandTotal=subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-total').innerText=tax;
    document.getElementById('grand-total').innerText=grandTotal;
}

document.getElementById('case-plus').addEventListener('click',function(){

    quantityManage('case',true,59);
    
})

document.getElementById('case-minus').addEventListener('click',function(){
  
    quantityManage('case',false,59);

})

document.getElementById('mobile-plus').addEventListener('click',function(){
    quantityManage('mobile',true,1219);
})


document.getElementById('mobile-minus').addEventListener('click',function(){
    quantityManage('mobile',false,1219);
})



