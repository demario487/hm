// DECLARE VARIABLES WE NEED FOR DIFINIG THEIR VALUES
let input, filter, ul, li, a, textValue;

//  DEFINE INPUT
input = document.getElementById("globalSearch");

// DEFINE ul
ul = document.getElementById("addressBook");

// DEFINE  EACH ELEMENT OF THE LIST
li = ul.getElementsByTagName("li");

function globalSearchFunction() {
    // ИЗРАВНЯВАМЕ РЕЗУЛТАТА ОТ ВЪВДЕНАТА СТОЙНОСТ В ПОЛЕТО КАТО НАПРАШИМ ВСИЧКИ ВЪВЕДЕНИ СТОЙНОСТИ С АЛКИ БУКВИ
    filter = input.value.toLowerCase();

    console.log("filter", filter);

    // ОБХОЖДАМЕ ЦЕЛИЯ МАСИВ ОТ ЕЛЕМЕНТИ В ЛИСТА
    for (i=0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        // ДЕФИНИРАМЕ СТОЙНОСТТА НА КОМПОНЕНТА, КОЙТО ИМАМЕ ПО ДЕФОУЛТ
        textValue = a.innerText || a.textContent;

        // ПРАВИМ ПРОВЕРКА ЗА СЪВПАДЕНИЕ МЕЖДУ СТОЙНОСТТА, КОЯТО СМЕ ВЪВЕЛИ В ПОЛЕТО И СТОЙНОСТТА, КОЯТО ИМАМЕ ПО ДЕФОУЛТ
        if(textValue.toLowerCase().indexOf(filter) > -1) {
            // АКО ИМА СЪВПАДЕНИЕ, ОСТАВИ ЛИСТА ОТ ЕЛЕМЕНТА ВИДИМ
            li[i].style.display = "";
        } else {
            // АКО НЯМА СЪВПАДЕНИЕ, ОСТАВИ ЛИСТА ОТ ЕЛЕМЕНТА НЕВИДИМ
            li[i].style.display = "none";
        }
    }

}


// DECLARE ALL RELATED DATA WITH EDIT MODE SCOPE
let personDetails;

// define PERSON DETAILS CONTAINER
personDetails = document.getElementById("person-datails");

// GET ALL 'A' TAGS IN THE LI ARRAY -> SO WE HAVE ACCESS TO THE ANY 'A' TAG ITSELF
for(j=0; j < li.length; j++) {
    li[j].addEventListener("click", function(event) {
        let a = this.getElementsByTagName("a")[0];
        textValue = a.textContent;
        console.log("new textValue", textValue);

        personDetails.style.display = "block";
        
        document.getElementById("personName").innerHTML = textValue;
    })
}



// let autor = [
//     {
//         name: "Yomni Park",
//         books = [" Book1", "Book2"]
//     },
//     {
//         name : "Dimitar Dimov",
//         books: [" Book1", "Book2"]
//     }
// ] 