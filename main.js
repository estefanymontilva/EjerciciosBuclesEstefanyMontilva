//...............1........................
let numeroAmultiplicar = 5
for (let i = 0; i <= 10; i++) {
    console.log(numeroAmultiplicar*i);
    
    
}


//................2..........................

let suma = 0
while (true) {
    let numero = parseInt(prompt("ingresa un numero (Debes ingresar 0 para terminar)"))

    if (numero===0) {
        break
    }
     suma+=numero
}

console.log("la suma total es : ", suma );

//....................3.................

function juegoAdivinarNumero() {
    
    let numeroSecreto = 25
    let intentos = 0;
    let numeroIngresado;

    do {
        numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 100:"));

        if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
            alert("Por favor ingresa un número válido entre 1 y 100.");
            continue; 
        }

        intentos++;

        if (numeroIngresado < numeroSecreto) {
            alert("El número ingresado es menor al número secreto. Intenta con un número mayor.");
        } else if (numeroIngresado > numeroSecreto) {
            alert("El número ingresado es mayor al número secreto. Intenta con un número menor.");
        }
    } while (numeroIngresado !== numeroSecreto);

    alert("Felicidades! Has adivinado el número secreto", numeroSecreto, "en", intentos, "intentos.");
}

juegoAdivinarNumero();



//.................5..................

function mostrarDivisores(numero) {
    console.log(`Los divisores de ${numero} son:`);

    
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
}


//.................6...............................

let objetos = ["pelota","computador", "silla", "mesa","llave","lapiz","audifono","reloj","flores","agua"]

for (let index = 0; index < objetos.length; index++) {
    console.log("Elemento", index + 1,":", objetos[index]);
    
}



//.....................7..................................

let numerosDoble = [1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < numerosDoble.length; index++) {
   console.log( (index + 1) * 2);
    
}

//.................8......................................

let familia = [
    { nombre: 'Esteban', edad: 45, parentesco: 'el padre', hobbie: 'pintar' },
    { nombre: 'Ana', edad: 36, parentesco: 'la madre', hobbie: 'tenis' },
    { nombre: 'Estefano', edad: 18, parentesco: 'el hijo', hobbie: 'leer' },
    { nombre: 'Adriana', edad: 16, parentesco: 'la hija', hobbie: 'correr' },
    { nombre: 'Jose', edad: 63, parentesco: 'el abuelo', hobbie: 'navegar' }
]

for (let persona of familia) {
    let mensaje = ("Hola, soy "+ persona.nombre+ ". Tengo "+ persona.edad+ " años, soy "+ persona.parentesco+ " y mi hobbie es: "+ persona.hobbie);
    console.log(mensaje);
}

//...........................9......................

let numerosImpares = [1,2,3,4,5,6,7,8,9,10]

for (let numero of numerosImpares) {
    if (numero % 2 !== 0) {
        console.log(numero);
    }
}

//................................10.............................


let numeroPar = 0;
let numeroImpar = 0;

function suma() {
    let numero;
    
    do {
        numero = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"));
        
        if (numero !== 0) {
            if (numero % 2 === 0) {
                numeroPar += numero;
            } else {
                numeroImpar += numero;
            }
        }
    } while (numero !== 0);
}

suma();

console.log("suma par:",numeroPar)
console.log("suma impar:",numeroImpar)

//................................11...............................

let numeroGrande = [1,2,3,4,5,6,7,8,9,10]

let maximo = Math.max(...numeroGrande);

console.log("el numero maximo de este array es:",maximo);

//...................................12.............................

let numeroMinimo = [1,2,3,4,5,6,7,8,9,10]

let minimo = Math.min(...numeroMinimo);

console.log("el numero minimo de este array es:",minimo);

//.........................................13..................................

function piedraPapelTijeras() {
    let jugador1 = prompt("Ingrese el nombre del Jugador 1:");
    let jugador2 = prompt("Ingrese el nombre del Jugador 2:");

    while (true) {
        let jugada1 = prompt(jugador1, "elige piedra, papel o tijeras:").toLowerCase();
        let jugada2 = prompt(jugador2, "elige piedra, papel o tijeras:").toLowerCase();

        if (jugada1 === jugada2) {
            console.log("Empate! Se vuelve a jugar.");
            continue; 
        } else if (
            (jugada1 === "piedra" && jugada2 === "tijeras") ||
            (jugada1 === "papel" && jugada2 === "piedra") ||
            (jugada1 === "tijeras" && jugada2 === "papel")
        ) {
            console.log(jugador1, "gana!", jugada1, "vence a", jugada2);
        } else {
            console.log(jugador2, "gana!", jugada2 ,"vence a ",jugada1);
        }

            let jugarOtraPartida = confirm("¿Desean jugar otra partida?");
        if (jugarOtraPartida) {
            break; 
        }
    }
}

piedraPapelTijeras()



//....................14.............................

for (let index = 1; index <= 5; index++) {
    let linea = '';
    
    for (let j = 1; j <= index; j++) {
        linea += '*';
    }
    
    console.log(linea);
}

//.................15...................

for (let index = 5; index >= 1; index--) {
    let linea = ''; 
   
    for (let j = 1; j <= index; j++) {
        linea += '*';
    }
    
    console.log(linea);
}

//.......................16..................
let numerosDesordenados = [72,15,85,43,62,95,82,35,44,97];

for (let index = 0; index < numerosDesordenados.length - 1; index++) {
    for (let j = 0; j < numerosDesordenados.length - 1 - index; j++) {
        
        if (numerosDesordenados[j] > numerosDesordenados[j + 1]) {
            
            let temp = numerosDesordenados[j];
            numerosDesordenados[j] = numerosDesordenados[j + 1];
            numerosDesordenados[j + 1] = temp;
        }
    }
}

console.log("Array ordenado:", numerosDesordenados);