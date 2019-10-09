// lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

let f = document.getElementsByTagName('footer')[0]
let footerOnClick = function (){
	console.log ("click")
}

f.addEventListener("click", footerOnClick);



// lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic. 

let f1 = document.getElementsByTagName('footer')[0]
let counter = 0 

let footerOnClickCount = function (){
	console.log ("click" + ++counter)
}

f1.addEventListener("click", footerOnClickCount);




// hamburger menu, l'élément HTML portant l'Id navbarHeader perde sa classe collapse

    let button = document.querySelectorAll(".navbar-toggler")[0]
	let header = document.getElementById("navbarHeader")

    let clickOnHamburger = function(){
    header.classList.contains('collapse') ? header.classList.remove("collapse") : header.classList.add("collapse");
    }
    button.addEventListener("click", clickOnHamburger);




// si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page).

   let firstcard = document.querySelectorAll('.row .col-md-4')[0]
   let buttonone = document.getElementsByClassName("btn-group")[0].lastElementChild

   let clickOnButtonEdit = function () {
   	firstcard.style.color = "red";
   }

   buttonone.addEventListener("click", clickOnButtonEdit);



// si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! 

   let secondcard = document.querySelectorAll('.row .col-md-4')[1]
   let buttontwo = document.getElementsByClassName("btn-group")[1].lastElementChild

   let clickOnButtonEditGreen = function () {
    secondcard.style.color == "green" ? secondcard.style.color = "black" : secondcard.style.color = "green";
    }

    buttontwo.addEventListener("click", clickOnButtonEditGreen);



// Cherche sur Google comment désactiver le tag <link> avec JavaScript.

  let navigation_bar = document.getElementsByClassName("navbar")[0]
  let header1 = document.getElementsByTagName("header")[0]

   let doubleclickOnNavbar = function () {
    document.styleSheets[0].disabled == true ? document.styleSheets[0].disabled = false : document.styleSheets[0].disabled = true;
  }

  header1.addEventListener("dblclick", doubleclickOnNavbar);