<?php
// POST & GET
//$user = $_POST["username"];
//$password = $_POST["password"];


//$user = $_GET["username"];
//$password =$_GET ["password"];


//echo "bienvenu ".$user;
// simulation d'un compte d'utilisateur
$usertest=[
"username"=> "usertest",
"password"=> "passtest"
];
// recupération des données saisies
$user= $_POST["username"];
$password= $_POST["password"];

//vérification du compte utilisateur

/*if($user==$usertest['username']&& $password == $usertest['password'])
{
    echo"connecter";
}
else{
    echo "non connecter";
}*/

/*if($user==$usertest['username']&& $password == $usertest['password'])
{
    echo"connecter";
}
else{
    header("location:connexion.php");
} */

if($user==$usertest['username']&& $password == $usertest['password'])
{
 // création d'une session utilisateur
 session_start();
 $_SESSION['username']=$user;

header('location:profil.php');
}
else{
    header('location:connexion.php');
}

?>


//les étapes pour créer une session utilisateur
/*session_start();
var_dump($_SESSION);
$_SESSION['username']= $user; */




