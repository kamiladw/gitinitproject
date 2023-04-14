<?php include("layout/header.php")?>

<?php include("layout/nav.php")?>

<div class="content"> 
<form method="post" action="connexion_traitement.php">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="se connecter">

</form>
</div>

<!----<div class="content"> 
<form method="get" action="connexion_traitement.php">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="se connecter">

</form>
</div>----->

<?php include("layout/footer.php")?>    