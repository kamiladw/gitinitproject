<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/structure.css">
    <title>Document</title>
</head>
<body>
    <header>
        <img src="public/img/art1" alt="">
        <h1>Titre du site</h1> 
        <button id="btnNav">Menu</button>
        <button id="btnGrid">Grille</button>
        <button id="btnBlock">Block</button>

    </header>

    <nav id="Nav"> 
        <ul>
  
          <li><a href="index.php">Accueil</a></li>
          <li><a href="article.php">Articles</a></li>
          <li><a href="contact.php">contact</a></li>
          <li><a href="register.php">Register</a></li>
      </ul>
        </nav>

    <div class="content"> 
    <div>
        <form action="structure.html">
        <div class="form_input">
            <label for="nom"> Votre nom</label>
            <input type="text" name="nom" id="nom"/>
            <span class="error_msg">erreur</span>
        </div>
        <div class="form_input">
            <label for="Prenom"> Votre Prenom</label>
            <input type="text" name="Prenom" id="Prenom"/>
            <span class="error_msg">erreur</span>

        </div>
        <div class="form_input">
            <label for="age"> Votre age</label>
            <input type="number" id="age" name="age"/>
            <span class="error_msg">erreur</span>

        </div>
        <div class="form_input">
            <label for="civilité"> Votre civilité</label>
            <input type="radio" id="civilité" name="civilité"/> Homme
            <input type="radio" id="civilité" name="civilité"/> Femme
            <span class="error_msg">erreur</span>


        </div>
        <div class="form_input">
            <label for="E-mail"> Votre E-mail</label>
            <input type="E-mail" id="E-mail" name="E-mail"/>
            <span class="error_msg">erreur</span>

        </div>
        <div class="form_input">
            <label for="Téléphone"> Votre Téléphone</label>
            <input type="number" id="Téléphone" name="Téléphone"/>
            <span class="error_msg">erreur</span>

        </div>
        <div class="form_input">
            <label for="userName"> Identifiant</label>
            <input type="text" id="userName" name="userName"/>
            <span class="error_msg">erreur</span>

        </div>
        <div class="form_input">
            <label for="PassWord"> Votre PassWord</label>
            <input type="text" id="PassWord" name="PassWord"/>
            <span class="error_msg">erreur</span>

        </div>
        
            <input type="submit"  value="S'inscrire"/>
        </div>
        </form>
    </div>

    </div>

    <footer>  <p> developper par AEC 19</p></footer>

</body>

<!------<script src="public/js/structure.js"></script>---->

<!--------<script src="public/js/function.js"></script>----------->

<!------<script src="public/js/objet.js"></script>------->

<script src="public/js/dom.js"></script>
<script src="public/js/form_validation.js"></script>

</html>
