//1.A

// Arreglo
let numeros = [];

for (let i = 0; i < 5; i++) {

    // El parseInt() asegura que el texto ingresado se guarde como un número real
    let numeroIngresado = prompt("Ingresa el número " + (i + 1) + " de 5:");
    
    // Incluir el número en el arreglo
    numeros.push(parseInt(numeroIngresado));
}

console.log("El arreglo de números ingresados es:", numeros);

//1.B

let numeros2 = [];

for (let i = 0; i < 5; i++) {
    let numeroIngresado = prompt("Ingresa el número " + (i + 1) + " de 5:");
    let numeroConvertido = parseInt(numeroIngresado);
    
    // Verifica si el número es impar
    if (numeroConvertido % 2 !== 0) {
        // Si es impar se agrega al arreglo
        numeros2.push(numeroConvertido);
    }
}

console.log("El arreglo de números impares ingresados es:", numeros2);


//1.C

//Arreglo
let frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, index, arreglo) => {
    // Convierte en mayusculas
    arreglo[index] = fruta.toUpperCase();
});

console.log("El arreglo de frutas es:", frutas);


//1.D

let frutas2 = ["pera", "manzana", "banana", "durazno"];

// Map() para crear un nuevo arreglo:recorre cada elemento, aplica toUpperCase() y retorna el valor para el nuevo arreglo
let frutasMayusculas = frutas2.map(fruta => fruta.toUpperCase());

console.log("Nuevo arreglo (mayúsculas):", frutasMayusculas);
console.log("Arreglo original (intacto):", frutas2);


//1.E

let frutas3 = ["pera", "manzana", "banana", "durazno"];

// filter() para crear un nuevo arreglo
let frutasFiltradas = frutas3.filter(fruta => {
    
    if (fruta.includes("na")) {
        return true;  // Si la contiene, se incluye en el nuevo arreglo
    } else {
        return false;
    }
});

//console.log("Arreglo filtrado (solo con 'na'):", frutasFiltradas);
//console.log("Arreglo original (intacto):", frutas3);



//2.A

// Objeto
let producto = {
    nombre: "Remera Oversize",
    precio: 18500,
    stock: 45,
    talles: ["s", "m", "l"] // Talles contiene un arreglo
};

console.log("Datos del producto:", producto);


//2.B

let productos = [
    {
        nombre: "Remera Básica",
        precio: 15000,
        stock: 12,
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Pantalón Cargo",
        precio: 35000,
        stock: 3,      
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Campera de Jean",
        precio: 45000,
        stock: 1,   
        talles: ["s", "m", "l"]
    },
    {
        nombre: "Buzo con Capucha",
        precio: 28000,
        stock: 10,
        talles: ["s", "m", "l"]
    }
];

console.log("Productos con bajo stock (menor a 5):");

productos.forEach(producto => {
  
    if (producto.stock < 5) {
        console.log(producto); 
    }
});



//2.C

let productosConDescuento = productos.map(producto => {
    
    return {
        ...producto, 
        precio: producto.precio * 0.9 
    };
    
});

console.log("Productos con 10% de descuento:", productosConDescuento);


//2.D

let productosConBuenStock = productos.filter(producto => {
    
    // Retorna true solo si el stock es mayor a 10
    return producto.stock > 10;
    
});

console.log("Productos con stock mayor a 10:", productosConBuenStock);