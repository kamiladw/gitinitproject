<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <link rel="stylesheet" href="public/css/style.css"/>

    </head>
    <body>
        <nav>
            <ul>
    
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Details</a></li>
                <li><a href="index.php">Contact</a></li>
            
            
            </ul>
            </nav>

        <form action="contact_traitement.php" method="get">
            <label for="">Nom</label>
            <input type="text" name="nom">

            <label for="">Prénom</label>
            <input type="text" name="Prénom">

            <label for="">Téléphone</label>
            <input type="tel" name="tel">

            <label for="">Email</label>
            <input type="email" name="Email">

            <input type="submit">


        </form>
        
    </body>
</html>