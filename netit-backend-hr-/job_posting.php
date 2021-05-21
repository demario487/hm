<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="styles/style.css"> 
<link href='https://fonts.googleapis.com/css?family=Aladin'' rel='stylesheet'>
<style>
body {
 font-family: 'Aladin';font-size: 18px;
  background: -webkit-linear-gradient(to top, #000C40, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #000C40, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  padding: 5px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
#mySidenav a {
  position: absolute;
  right: -80px;
  transition: 0.3s;
  padding: 15px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
}

#mySidenav a:hover {
  right: 0;
}
#about {
  top: 20px;
  background-color: #555;
}
</style>
</head>
<body>
      <div id="mySidenav" class="sidenav">
          <a href="add-new-job.php" id="about">Добави нова обява</a>
  
</div>


    
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="./images/Monster_Jobs_logo_MonsterJobs_logotype.png" alt="Avatar" style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
                <h1>Frontend Engineer</h1> 
                <p>We are looking for a Frontend Engineer to produce our new scalable software solutions. You’ll be part of a freshly created cross-functional team in our new engineering office in Sofia, Bulgaria, that’s responsible for the full software development life cycle, from conception to deployment. </p> 
                <button>Кандидатствай</button>
            </div>
        </div>
    </div>

    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="./images/Monster_Jobs_logo_MonsterJobs_logotype.png" alt="Avatar" style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
                <h1>Frontend Engineer</h1> 
                <p>We are looking for a Frontend Engineer to produce our new scalable software solutions. You’ll be part of a freshly created cross-functional team in our new engineering office in Sofia, Bulgaria, that’s responsible for the full software development life cycle, from conception to deployment. </p> 
                <button>Кандидатствай</button>
            </div>
        </div>
    </div>

    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="./images/Monster_Jobs_logo_MonsterJobs_logotype.png" alt="Avatar" style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
                <h1>Frontend Engineer</h1> 
                <p>We are looking for a Frontend Engineer to produce our new scalable software solutions. You’ll be part of a freshly created cross-functional team in our new engineering office in Sofia, Bulgaria, that’s responsible for the full software development life cycle, from conception to deployment. </p> 
                <button>Кандидатствай</button>
            </div>
        </div>
    </div>
  
    
    <div id="footer-bg">
            Всички права запазени &copy; Кристиян Мангелов 2021 <a href="index.php">Начало</a>
        </div>
</body>
</html>