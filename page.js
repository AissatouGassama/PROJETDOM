let produits = document.querySelectorAll('.ligneProduit');
//console.log(produits);
for (let i= 0 ; i < produits.length; i++){


// Récupération des éléments 
let btnPlus = produits[i].children[1].children[2]
//console.log(btnPlus);
let qty = produits[i].children[1].children[1]
let quantity = parseInt(qty.value)
//console.log(quantity+1);


let prix = produits[i].children[0].children[0].children[2]
//console.log(prix);
let price = parseInt(prix.innerText)
//console.log(price+1);

let sousTotal= produits[i].children[2].children[0]
//console.log(sousTotal);
let priceTotal= parseInt(sousTotal.innerText)
//console.log(priceTotal+1);

var produitSuppr = document.querySelector('.article')
//console.log(produitSuppr);
 
//les fontionnalitées 
btnPlus.addEventListener("click", function(){
quantity ++; 
//console.log(quantity);
qty.value = quantity ;
SommeTotal();
})

let btnMoins = produits[i].children[1].children[0]
//console.log(btnMoins);
btnMoins.addEventListener("click", function() {
   if(quantity>0){
      quantity--;
      SommeTotal();
   }
   //console.log(quantity);
   qty.value=quantity ;
})
 function   SommeTotal(){
    let somTotal = quantity*price
    priceTotal = somTotal + ' frs';
    sousTotal.innerText=priceTotal ;
    //console.log(priceTotal);
}

let btnSupprim = produitSuppr.children[i].children[0].children[0].children[3]
//console.log(btnSupprim);
 
btnSupprim.addEventListener("click",function(){
    produitSuppr.removeChild(produits[i])
} )

let btnLike = produits[i].children[0].children[0].children[4]
//console.log(btnLike);

btnLike.addEventListener("click", function(){
   if(btnLike.style.color== "green"){
      btnLike.style.color= "red";
   }
   else{
      btnLike.style.color= "green";
   }

             
})
var prixTotal= document.querySelector(".total");
 //console.log(prixTotal);
 var totalProduits = (prixTotal.children[1]);
 var totaux=parseInt(totalProduits.innerText);
 //console.log(totaux);
 var priceTotaux= parseInt(produits[i].children[2].children[0].innerText);
 //console.log(priceTotaux);
 var totauxTab= [];
 totauxTab.push(priceTotaux);
 console.log(totauxTab);

 function somme(){
   for(let i=0; i<totauxTab.length; i++){
      totauxTab=totauxTab+totauxTab[i];
      console.log(totauxTab);

   }
   

 }
   
 
 

 }
          
