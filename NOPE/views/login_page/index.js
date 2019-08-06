<!DOCTYPE html>
<html>
<head>
  <title>Welcome to New Orleans Plant Exchange</title>

  <link href="https://fonts.googleapis.com/css?family=Georgia%7CLora&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/stylesheets/style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/792aec6a64.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
</head>
<body>
<h1> Welcome to the New Orleans Plant Exchange </h1>
    <h2> Trading and Selling Locally </h2>
    <h2> Sign Up </h2>
    
    <br><br><br>
      <div class="container" id="logInContainer">>
    <h2>Please Log In</h2>
      <form action="/login" method="post">
    <h3> Email Address </h3><input placeholder="Email Address" type="email" id="emailAddress">
    <br>
    <h3> Password </h3><input placeholder= "Password" type="textHidden" id="password" encrypt= true>
    <input type="button" id="createListing" value="Create Listing" onclick="addElement(),refresh()">
    </form>
  </div> 
      <br><br><br>

    <div><%-partial('partials/footer') %></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 <script src="https://kit.fontawesome.com/792aec6a64.js"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

 <!-- <script type="text/javascript" src= "javascripts/nope.js"></script> -->
</body>
</html>