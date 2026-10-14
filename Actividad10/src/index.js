//1) Escriba un programa que verifique si la variable edad, 
// definida con un número entero, es mayor o igual a 18. 
// Si lo es, imprime "Es mayor de edad", de lo contrario, 
// imprime "Es menor de edad"

const edad = 25

if(edad >= 18){
    console.log('Es mayor de edad')
}
else{
    console.log('Es menor de edad')
}

//2) Escriba un programa que verifique si la variable numero es par o impar. Si es par, 
// imprime "El número es par", de lo contrario, imprime "El número es impar"

const numero=2

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}


//3) Escriba un programa que compruebe la variable nota y escriba por 
//consola si es "Aprobado", "Reprobado", o "Excelente"

const nota=8

if (nota >7){
    console.log("Excelente")
}
else if( nota<4){
    console.log("Reprobado")
}
else{
    console.log("Aprobado")
}

//4) Escriba un programa que imprima los números del 1 al 10 usando un 
// bucle for 

for(i=1; i<11; i++){
    console.log(i)
}


//5)Escriba un programa que imprima los números del 10 al 1 en orden 
//descendente usando un bucle for

for(i=10; i>0; i--){
    console.log(i)
}


//6)Escriba un programa que utilice un bucle for (20 iteraciones 
//comenzando con let i = 0) y combinarlo  con condicionales para saber si la 
//variable declarada en el bucle es par o impar. Si es par, imprime "El 
//número es par", de lo contrario imprime "El número es impar" 
//(utilizar operación de módulo) 

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("Numero par"); 
    } else {
        console.log("Numero impar");
    }
}


//7)Modifique el programa del punto anterior, y concatena con template literals el 
//número a lo que se imprime por consola, por ejemplo: "El número 3 es 
//impar" 
 
 for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número " + i + " es par"); 
    } else {
        console.log("El número " + i + " es impar");
    }
}
