<!DOCTYPE html>
<html>
<head>
  <title>Add Plants</title>

  <link href="https://fonts.googleapis.com/css?family=Georgia%7CLora&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/stylesheets/style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/792aec6a64.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
</head>
<body>
<h1> Welcome to the New Orleans Plant Exchange </h1>
    <h2> Trading and Selling Locally </h2>
    <nav id=navBar>
      <a href="/Users/miriamwest/Desktop/CODING/NOPE/NOPE/all_plants" style="color:#22863d;"><span>All Plants</span></a>
      <a href="/Users/miriamwest/Desktop/CODING/NOPE/NOPE/my_plant_listings" style="color:#ffe870;"><span>My Plant Listings</span></a>
    </nav>
    <br><br><br>
    <div class="container" id="containerAll">
      <br>
    <h3>Add Plant</h3><input placeholder="Upload File" type="img" id="plantImg">
    <input type="button" id="uploadFile" value="Upload" onclick="addElement()">
    <br>
    <h3 class= "fa fa-leaf" id="leaf"></h3><input placeholder= "Description" type="text" id="new-plant">
    <input type="button" id="createListing" value="Create Listing" onclick="setTitle(),refresh()">

 
    </div>
     <br><br><br>

    <div><%-partial('partials/footer') %></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 <script src="https://kit.fontawesome.com/792aec6a64.js"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

 <!-- <script type="text/javascript" src= "javascripts/nope.js"></script> -->
</body>
</html>