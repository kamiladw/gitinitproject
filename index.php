
<?php include("layout/header.php")?>
<?php include("layout/nav.php")?>
<?php include("model/database.php")?>
<?php include("model/product.php")?>


<!----traitement et recupération de données---->
<!---<?php
// connexion de la base de données
//$db = db_connect(); 
 //préparation de la requete SQL 
//$requete = $db->prepare("select * from product");
//execution  de la requete SQL 
//$requete->execute(); 
 // convertir les données recuperées en tableau PHP
// $products = $requete-> fetchAll();
 //var_dump($products);
?> --->


<?php
// connexion de la base de données
$db = db_connect(); 
$products = product_get_all($db);
$product = product_get_one($db,1);
var_dump($product);

product_delete($db,2);
?>



<div class="content">

<?php foreach ($products as $product) {
 var_dump($product);   ?>

<div class="article" id="testdiv1">
    <h2><?php echo $product['product_name'] ?></h2>
    <img src="public/img/art1" alt="">
    <p><?php echo $product['product_detail'] ?></p>
    <button>+</button>
    <a href="art_info.php">Detail</a>
</div>

<?php }?>

</div>
 
<!----<div class="article">
            <h2> Article1</h2>
            <img src="public/img/art1" alt="">
            <p>Details Article</p>
            <button>+</button>
            <a href="art_info.html">Detail</a>
        </div>

        <div  class="article" id="testdiv1">
            <h2> Article2</h2>
            <img src="public/img/art1" alt="">
            <p id="testP1">Details Article </p>
            <button>+</button>
            <a href="art_info.html">Detail</a>
        </div>
        <div class="article">
            <h2> Article3</h2>
            <img src="public/img/art1" alt="">
            <p>Details Article</p>
            <button>+</button>
            <a href="art_info.html">Detail</a>
        </div>
        <div class="article">
            <h2> Article4</h2>
            <img src="public/img/art1" alt="">
            <p>Details Article</p>
            <button>+</button>
            <a href="art_info.html">Detail</a>
        </div>

    </div> ------>
    <?php include("layout/footer.php")?>
