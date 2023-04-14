<?php 
function product_get_all($db){
 // préparation de la requete SQL
  $requete = $db->prepare("select * from product");
  //execution de la requete SQL
   $requete->execute(); 
  // convertir les données recuperées en tableau PHP
  $products = $requete->fetchAll();
   return $products;
}


function product_get_one($db,$product_id){

 $SQL = "select * from product where product_id = :product_id";

 $requete = $db->prepare($SQL);

 $requete->bindValue(":product_id",$product_id);

 $requete->execute(); 

 $product = $requete->fetch(PDO::FETCH_ASSOC);

 return $product;
}

function product_delete($db,$product_id){

   $SQL = "delete from product where product_id = :product_id";
  
   $requete = $db->prepare($SQL);
  
   $requete->bindValue(":product_id",$product_id);
  
   $requete->execute(); 
  
  }


