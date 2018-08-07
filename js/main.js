/*************Introduction débutants**************/

/* Exercice 1
console.log("Hello world");

var hello = "Hello world";
console.log(hello);*/

/*Exercice 2
console.log(3*3);
console.log(12/0);
console.log(4+9+78);
console.log(12-7);
console.log(5e4);*/

/*Exercice 3
var nom = prompt("quelle est ton nom ?");
alert("bonjour" + " " + nom);*/

/*Exercice 4
var nom="Decoux";
var prenom="Paul";
console.log("Bonjour" + " " + prenom + " " + nom);*/

/*Exercice 5
var a ="123";
console.log(Number(a));*/

/*Exercice 6
var string ="Je suis Paul";
console.log(string.toLowerCase());
console.log(string.toUpperCase());*/

/******************Introduction avancés****************/

/*Exercice 1
var chaineVide="";
var chaine="je suis Paul";

var chaineNumber2 = chaine.length;
var chaineNumber1 = chaineVide.length;

if (chaineNumber1===0) {
  console.log("true");
}
else {
  console.log("false");
}

if (chaineNumber2===0) {
  console.log("true");
}
else {
  console.log("false");
}*/

/*Exercice 2
var annéeActuelle = prompt("En quelle année sommes-nous?");
var annéeNaissance = prompt("En quelle année est-tu né?");
var calculeAge = annéeActuelle - annéeNaissance;
var monAge = calculeAge;
alert(monAge);

ageJustine = 21;
var cumul = monAge + ageJustine;
alert(cumul);*/

/*Exercice 3
var chaussures = 70;
var jean = 59;
var tShirt= 20;
var reduction = (chaussures + jean + tShirt)/100*20;
var total = chaussures + jean + tShirt - reduction;
alert(total);*/

/*Exercice 4
var premierNombre =  parseInt(prompt("entrez un nombre"));
var deuxiemeNombre =  parseInt(prompt("entrez une second nombre"));
alert(premierNombre + deuxiemeNombre);*/

//Exercice 5
// var prenom = prompt("indiquez votre prenom");
// var nom = prompt("indiquez votre nom");
// var premierCaracP = prenom.charAt(0).toUpperCase();
// var dernierCaracP = prenom.charAt(3).toUpperCase();  // prenom.length - 1
// alert(premierCaracP+dernierCaracP);
// var premierCaracN = nom.charAt(0).toUpperCase();
// var dernierCaracN = nom.charAt(5).toUpperCase();
// alert(premierCaracN+dernierCaracN);
// alert(premierCaracP+dernierCaracP+premierCaracN+dernierCaracN);
// var ageVisiteur = prompt("indiquez votre age");
// var ageDivisé = ageVisiteur/33;
// alert(Math.round(ageDivisé));

/*****************Intermediaire part 1******************/

/*Exercice 1
var chiffre1 = 2;
var chiffre2 = 5;
var chiffre3 = 7;
var chiffre4 = 10;
alert(Math.max(chiffre1, chiffre2 ,chiffre3, chiffre4));*/

/*Exercice 2
var ageVisiteur = prompt("indiquez votre age");
if (Math.sign(ageVisiteur)===-1) {
  alert(prompt("indiquez votre age SVP"));
}
if (ageVisiteur>21) {
  alert("accé autorisé");
}
if (ageVisiteur%2===0) {
  alert("Votre age est pair");
}
if (Math.sqrt(ageVisiteur)===ageVisiteur) {
  alert("votre age est une racine carré");
}*/

/*Exercice 3
var chiffre = 5;
var chiffreUser = prompt("essayes de deviner le nombre choisis");

while (chiffreUser!=chiffre) {
  if (chiffreUser < chiffre) {
    alert("votre chiffre est trop petit")
    var chiffreUser = prompt("essayes de deviner le nombre choisis");
  }
  if (chiffreUser > chiffre) {
    alert("votre chiffre est trop grand")
    var chiffreUser = prompt("essayes de deviner le nombre choisis");
  }
  if (chiffreUser == chiffre) {
    alert("Gagnez !!!")
  }
}*/

/*Exercice 4
for (var i = 1; i < 101; i++) {
  console.log(i);
}*/

/*Exercice 5
for (var i = 1; i < 101; i++) {
  if (i%2===0) {
    console.log(i);
  }
}*/

/*Exercice 6
var longueur = 15;
var largeur = 10;
var profondeur = 2;
var debit = 0.5;
function remplissagePiscine(longueur, largeur, profondeur, debit) {
  var temps = (longueur * largeur * profondeur)/debit;
  console.log("votre piscine sera remplit dans "+temps+" min !!");
}
remplissagePiscine(longueur, largeur, profondeur, debit);*/

/*Exercice 7
var rayon = prompt("veuillez entrer le rayon d'un cercle");
var pi = 3.14;
 function aireCercle(rayon, pi){
   var aire = pi * (rayon * rayon);
   console.log(aire);
 }
aireCercle(rayon, pi);

function perimetreCercle(rayon, pi){
  var perimetre = 2 * pi * rayon;
  console.log(perimetre);
}

perimetreCercle(rayon, pi);*/

/*exercice 8

for (var i = 1; i < 6; i++) {
  console.log("*".repeat(i));
}*/


/*Exercice 9
for (var i = 1; i < 101; i++) {
  if (i%3===0 && i%5===0) {
    console.log("FIZZBUZZ");
  }
  else if (i%3===0) {
    console.log("FIZZ");
  }
  else if (i%5===0) {
    console.log("BUZZ");
  }
  else {
    console.log(i);
  }
}*/

/***************Intermediaire part 2***********************/

/*Exercice 1

var str = "";
for (var i = 1; i < 8; i++) {

  for (var j = 1; j < 16; j++) {
    if ((i+j)%2===0) {
      str +="#";

    }
    else {
      str +=" ";
    }
  }
  str += "\n";
 }
console.log(str);*/


/*Exercice 2
var one = 1;
var zero = 0;
var str = "";
for (var i = 0 ; i < 4 ; i++) {
  for (var j = 0; j < 4; j++) {
    if (i==j) {
      str += one+"\n";
    }
    else {
      str += zero+"\n";
    }
  }

  str += "-------"+"\n";

}
console.log(str);*/

/*Exercice 3
var number = 0;
var round =0;
function numberPair(number, round){

  var number = parseInt(prompt("Prix"));
  var round = Math.round(number);
  if (round%2===0) {
    console.log("TRUE");
  }
  else {
    console.log("FALSE");
  }
}
numberPair(number, round);*/

/*Exercice 4
var number = 0;
function factorielle(number){
  var number = Number(prompt("veuillez entrez un chiffre"));
  if (Number.isInteger(number)) {
    console.log("ok");
  }
  else {
    console.log('erreur');
  }
  var i = 0;
  var j =1;
  while (i<number) {
    i++
    console.log();
  }
}
factorielle(number);**************************************************************/

/*Exercice 5
var str = "";
function facture(str){
  var str = prompt("veuillez saisir le montant de votre facture en toutes lettres");
  if (isNaN(str)) {
    var replace= (str).replace(/-/g, "_");
    alert(replace);
  }
  else {
    console.log("erreur");
  }

}
facture(str);*/

/*Exercice 6
var list = ['pomme', 'poire' ,'tomate', 'biscuits' ,'nutella'];
console.log("je dois achter "+ list[0]);
console.log("je dois achter "+ list[4]);
console.log("je dois achter "+ list[2]);*/

/*Exercice 7
var paulTab = ['Decoux','Paul','27 ans','08/09/1990'];
function tab(paulTab){
  for (var i = 0; i <= 3; i++) {
    console.log(paulTab[i]);
  }
}
tab(paulTab);

var threeDimArray = new Array (['Decoux','Paul','27 ans','08/09/1990'],
                            ['dupont','Pierre','29 ans','07/12/1990'],
                            ['Tintin','Jacques','20 ans','07/12/1997']);

function threeDim(threeDimArray){
  for (var i = 0; i <= threeDimArray.length; i++) {
    for (var j = 0; j <= threeDimArray.length; j++) {
      console.log(threeDimArray[i][j]);
    }
  }

}
 threeDim(threeDimArray);*/
 /*exercice 8
 var chiffreTab = new Array(1,2,3,4,5,6,7,8,9);
 console.log(chiffreTab);*/
 /*Exercice 9
 var tachesTab = new Array();
 while (taches!='fin') {
   var taches = prompt('que devez-vous acheter ?')
   tachesTab.push(taches);
}
console.log(tachesTab);*/

 /*Exercice 10 */
 /*Creation d'un tableau*/
var element = ['pierre', 'feuille', 'ciseaux'];
var pointUser=0;
var pointDesktop=0;
function game(element){
  /*on demande a l'utilisateur de faire son choix*/

  /*on determine le choix au hazard de l'ordinateur*/




  /*tant que pointUser n'egale pas 3 n'egale pas 3 point ou pointDesktop n'egale pas 3point on continu*/
  while (pointUser < 3 && pointDesktop < 3) {
    var user = prompt("Choisissez entre pierre, feuille ou ciseaux");
    var hazard = element[Math.floor(element.length * Math.random())];
    /*Si l'utilisateur saisie autre chose que pierre, feuille ou ciseaux on affiche une erreur*/
    while (user!= 'feuille' && user!= 'pierre' && user!= 'ciseaux') {
      alert('Erreur de saisie');
      user = prompt("Choisissez entre pierre, feuille ou ciseaux");
    }
    /* sinon s'il entre la meme chose que l'ordianteur on affiche Egalité*/
    if (user===hazard) {
      alert('Egalité');
      console.log('Vous êtes arrivé a '+pointUser+' points');
      console.log('L\'ordinateur est a '+pointDesktop+' points');
    }

    else if (user==='pierre' && hazard==='ciseaux' || user==='feuille' && hazard==='pierre' || user==='ciseaux' && hazard==='feuille') {
          alert('Gagné !!');
          pointUser++;
          console.log('Vous êtes arrivé a '+pointUser+' points');
          console.log('L\'ordinateur est a '+pointDesktop+' points');
    }
    else {
      alert('perdu');
      pointDesktop++;
      console.log('Vous êtes arrivé a '+pointUser+' points');
      console.log('L\'ordinateur est a '+pointDesktop+' points');
    }
  }
  if (pointUser===3) {
    console.log('Vous avez gagné');
  }
  else {
    console.log('vous avez perdu');
  }
}
game(element);
