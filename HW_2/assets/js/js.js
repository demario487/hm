var test12 = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falco", height: 2658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];
  function capitalize(word) {
      var firstChar = word.charCodeAt(0);
      if (firstChar >= 97 && firstChar <= 122) {
          return String.fromCharCode(firstChar - 32) + word.substr(1);
      }
      return word;
  }
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  function editRow(data){
      var foundIndex = test12.findIndex(el => el.name==data.name && el.hight==data.hight);
      var elname=document.getElementById(data.name+foundIndex).value
      var elHight=document.getElementById(data.height.toString()+foundIndex).value
      var elPlace=document.getElementById(data.place+foundIndex).value
      console.log({name:elname,height:elHight,place:elPlace})
      console.log(foundIndex)
      //var foundIndex = test12.findIndex(el => el.name==data.name && el.hight==data.hight);
      test12[foundIndex] ={name:elname,height:elHight,place:elPlace}
      
      mountains = JSON.parse(JSON.stringify(test12));
      let table = document.getElementById("table")
      var tableHeaderRowCount = 1;
      var rowCount = table.rows.length;
        for (var i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }
      generateTableContent(table, mountains);
  
  }
  function deleteRow(data){
  
  test12 = test12.filter(function(el) { return el.name != data.name}); 
  mountains = JSON.parse(JSON.stringify(test12));
  let table = document.getElementById("table")
  var tableHeaderRowCount = 1;
  var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
  generateTableContent(table, mountains);
  }
  function generateTableContent(table, data) {
  let c=0;
  let rowN=0
    for (let element of data) {
        c=0
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        var btn = document.createElement("input");
          btn.value=element[key];
        btn.id=element[key].toString()+rowN;
        cell.appendChild(btn);
        c=c+1;
        if(c==3){
           let cell = row.insertCell();
          var button = document.createElement("button");
         button.innerHTML = "Save";
         button.addEventListener ("click", function() {
                  editRow(element)
          });
            cell.appendChild(button);
          let cell1 = row.insertCell();
          var button1 = document.createElement("button");
         button1.innerHTML = "Delete";
         button1.addEventListener ("click", function() {
                  deleteRow(element)
          });
            cell1.appendChild(button1);
      }
  
      }
      rowN=rowN+1
    }
  }
  mountains=[]
  counter=0
  
  function generateTable(){
  mountains = JSON.parse(JSON.stringify(test12));
  let table = document.getElementById("table")
  let data = Object.keys(mountains[0]);
  data.push("edit")
  data.push("delete")
  if(counter!=0){
  var tableHeaderRowCount = 1;
  var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
  generateTableContent(table, mountains);
  }else{
  generateTableHead(table, data);
  generateTableContent(table, mountains);
  }
  counter=counter+1;
  }
  function search(){
  mountains = JSON.parse(JSON.stringify(test12));
  var value=document.getElementById("myInput").value
  var e = document.getElementById("cars");
  var strUser = e.value;
  console.log(strUser)
  mountains =  mountains.filter(function(item) {
      if(value!=""){
      return capitalize(item.name).includes(capitalize(strUser)) && capitalize(item.height.toString()).includes(capitalize(value)) 
      }else{
      return capitalize(hero.name).includes(capitalize(strUser))
      }
      
  });
  let table = document.getElementById("table")
  var tableHeaderRowCount = 1;
  var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
  generateTableContent(table, mountains);
  }
  