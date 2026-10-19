// a.
function saludar() {
    console.log("¡Hola, bienvenido!");
}

saludar()
// b. 
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
}

saludarPersona("Sofi")


// c.
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(esMayorDeEdad(20))
let verificacionEdad = esMayorDeEdad(20); 


// 2a. 
const esMayorDeEdadFlecha = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};
console.log(esMayorDeEdadFlecha(16))


// 2b.
const compararNumeros = (num1, num2) => {
    if (num1 < num2) {
        console.log(`El número ${num1} es menor que ${num2}`);
    } else if (num1 === num2) {
        console.log(`El número ${num1} es igual que ${num2}`);
    } else {
        console.log(`El número ${num1} es mayor que ${num2}`);
    }
};


for (let i = 1; i <= 5; i++) {
    compararNumeros(i, 3);
}



//3. Funciones suma y resta
const suma = (num1, num2) => {
    console.log(`El resultado de la suma es ${num1 + num2}`);
};

const resta = (num1, num2) => {
    console.log(`El resultado de la resta es ${num1 - num2}`);
};

//3 a y b. 
const operacion = (num1, num2, callback) => {
    
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        callback(num1, num2);//Verifica que sean de tipo numerico
    } else {
        console.log("Debe ingresar solo números.");
    }
};

// Ejemplos
operacion(10, 5, suma);
operacion(10, 5, resta);
operacion(10, "5", suma);
