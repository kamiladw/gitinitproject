
<?php include("layout/header.php")?>
<?php include("layout/nav.php")?>
<?php include("model/database.php")?>
<?php include("model/product.php")?>

<?php
// traitement et récupération des données
$db = db_connect(); // connexion à la base de données
$products = product_get_all($db);

?>

<div class="content">
    <table border="1">
        <tr>
            <th>produits</th>
            <th>prix</th>
            <th></th>
</tr>

<?php foreach ($products as $product) { ?>
<tr>
    <td> <?php echo $product['product_name'] ?></td>
    <td> <?php echo $product['product_price'] ?></td>
    <td> <a href="product_delete.php?id=<?php echo $product['product_id'] ?>" >supprimer</a></td>

</tr>
<?php }?>
</table>
</div>
 

    <?php include("layout/footer.php")?>
