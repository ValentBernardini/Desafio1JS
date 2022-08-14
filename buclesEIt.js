//Desafio 1

let comida = "";
let nombre = prompt("tu nombre es:")


forComida:
    while (comida != "salir") {
        comida = prompt("que vas q comer?");
            if (comida == "verduras") {
                alert(nombre + " va a comer " + comida);
            } else if (comida == "carne") {
                alert(nombre + " va a comer " + comida);
            } else {
                alert("solo hay carne y verduras")
            }
        } 
    

   








        //Ejericio de la clase
//  for (let i = 0; i < 3; i = i + 1) {
//      let numero = parseInt(prompt("Ingrese un numero"));
//      console.log("Numero ingresado:", numero);
//      console.log("y esl sig es", numero + 1);
//  }

//practica
//  array1 = ["maria", "josefa", "roberta"];
//  array2 = ["pedro", "marcelo", array1, "josefina"];

//  forRancio:
//      for (array in array2) {
//          if (array == 2) {
//              for (let array of array1) {
//                  console.log(array + "<br>");
//                  break;
//              }
//          } else {
//              console.log(array2[array] + "<br>");
//          }
//      }
