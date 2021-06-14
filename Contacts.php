<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="styles/style.css">  
<link href='https://fonts.googleapis.com/css?family=Aladin'' rel='stylesheet'>
<style>
body {
  font-family: 'Aladin';font-size: 22px;
  
  background: linear-gradient(
115deg
,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
}

* {
  box-sizing: border-box;
}

/* Style inputs */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* Style the container/contact section */
.container {
   
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
}

/* Create two columns that float next to eachother */
.column {
  
  float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
</head>
<body>




<div class="container">
  <div style="text-align:center">
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
      <img src="https://thumbs.dreamstime.com/b/contact-us-customer-support-hotline-people-connect-call-custo-130157516.jpg" style="width:100%">
    </div>
    <div class="column">
       <section>
      <div class="contact">
        
      <ul>
        <li>
          <i class="fa fa-envelope">Email :</i>
          <br> 
          <br> 
          <a href="#">mangelov1311@gmail.com</a>
        </li>
        <br> 
        <br> 
        <li>
          <i class="fa fa-phone">Phone number :</i> 
          <br> 
          <br> 
          <a href="#">+359879298272</a>
        </li>
        <li>
          <i class="fa fa-building-o"></i>
          <p>Monster Recruitment Agency<br>
              <br>
            123 Main St. <br>
            Somewhere, BULGARIA 12345
          </p>
        </li>
      </ul>
      </div>
      
    </section>
    </div>
  </div>
</div>
    <a href="index.php" >Начало</a>
</body>
</html>
