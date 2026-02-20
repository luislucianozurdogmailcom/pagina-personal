// data/parcialesData.js




// -------------------------------
// ------------- FISICA-----------
// -------------------------------

export const parcialFisica03 = {
    id: "parcial-fisica-03-2024",
    title: "Primer Parcial de Física (03) - Sede UBA/CBC",
    description: "Evaluación interactiva basada en el parcial del 20/05/2024. Recuerda utilizar |g| = 10 m/s², sin(37°) = 0,6 y cos(37°) = 0,8.",
    questions: [
        {
            id: "1a",
            text: "1.a.- Desde el balcón de un edificio, a 8 m de altura, se arroja un hueso a 5 m/s (37° hacia abajo). Un perro corre desde el reposo a 2 m/s² para atraparlo al llegar al suelo. Calcule el valor de la distancia D inicial del perro.",
            options: ["3,2 m", "5 m", "8 m", "10 m"],
            correctAnswer: "5 m"
        },
        {
            id: "1b",
            text: "1.b.- Halle el módulo de la velocidad del hueso en el instante justo en el que el perro lo atrapa.",
            options: ["10 m/s", "12,4 m/s", "13,6 m/s", "15 m/s"],
            correctAnswer: "13,6 m/s"
        },
        {
            id: "2a",
            text: "2.a.- Una partícula parte del reposo y gira aumentando su velocidad angular. A los 4s, su velocidad angular es 4 s⁻¹. Luego frena uniformemente hasta detenerse en 6s. ¿Cuánto tiempo tarda en completar la primera vuelta?",
            options: ["1 segundo", "2 segundos", "3,14 segundos", "4 segundos"],
            correctAnswer: "2 segundos"
        },
        {
            id: "2b",
            text: "2.b.- Halle el número total de vueltas que dio la partícula desde t=0 s hasta que frena completamente.",
            options: ["5 vueltas", "8 vueltas", "10 vueltas", "12 vueltas"],
            correctAnswer: "10 vueltas"
        },
        {
            id: "3a",
            text: "3.a.- Una lancha viaja desde un muelle A a un muelle B (300m río arriba). La lancha se orienta 37° respecto a la costa con velocidad 6 m/s respecto al agua. El viaje dura 25 min. ¿Cuál es el ancho del río?",
            options: ["3,6 km", "4,2 km", "5,4 km", "6,0 km"],
            correctAnswer: "5,4 km"
        },
        {
            id: "3b",
            text: "3.b.- ¿Cuál es el módulo de la velocidad de la corriente respecto a la orilla?",
            options: ["3,2 m/s", "4,0 m/s", "4,6 m/s", "5,2 m/s"],
            correctAnswer: "4,6 m/s"
        },
        {
            id: "4a",
            text: "4.a.- Dos carritos (mA=4kg, mB=6kg) sin rozamiento, ligados por soga y polea en planos inclinados de 37°. Sobre A se aplica una fuerza F (37° hacia arriba respecto a la horizontal). Calcule la intensidad de F para mantener el equilibrio.",
            options: ["36 N", "45 N", "50 N", "60 N"],
            correctAnswer: "45 N"
        },
        {
            id: "4b",
            text: "4.b.- Halle la intensidad de la tensión en la cuerda en el caso de equilibrio anterior.",
            options: ["20 N", "30 N", "36 N", "45 N"],
            correctAnswer: "36 N"
        },
        {
            id: "4c",
            text: "4.c.- Si se suprime la fuerza F, ¿cuál es el módulo de la aceleración del bloque B?",
            options: ["1,2 m/s²", "2,4 m/s²", "3,6 m/s²", "4,8 m/s²"],
            correctAnswer: "3,6 m/s²"
        }
    ]
};

export const parcialFisica04 = {
    id: "parcial-fisica-04-2024",
    title: "Primer Parcial de Física (03) - 26/09/2024",
    description: "Segundo simulacro interactivo. Recordá utilizar |g| = 10 m/s², sin(37°) = cos(53°) = 0,6 y sin(53°) = cos(37°) = 0,8.",
    questions: [
        {
            id: "1a",
            text: "1.a.- Un globo inflado con helio desciende verticalmente a 10 m/s. Cuando está a 135 m de altura, se dispara desde el piso una piedra hacia arriba. Si la piedra pasa al lado del globo 3 segundos después, ¿calcule la velocidad inicial de la piedra?",
            options: ["20 m/s", "40 m/s", "50 m/s", "60 m/s"],
            correctAnswer: "50 m/s"
        },
        {
            id: "1b",
            text: "1.b.- Determine en qué otro instante ambos móviles están a la par.",
            options: ["6 s", "9 s", "12 s", "15 s"],
            correctAnswer: "9 s"
        },
        {
            id: "2a",
            text: "2.a.- Una rueda de 4 m de radio gira con aceleración angular constante. En t=0 s, su velocidad angular es 6π s⁻¹ y a los 4 s disminuye a π s⁻¹. ¿Cuántas vueltas enteras dio la rueda en ese lapso?",
            options: ["5 vueltas", "7 vueltas", "10 vueltas", "14 vueltas"],
            correctAnswer: "7 vueltas"
        },
        {
            id: "2b",
            text: "2.b.- Calcule el módulo de la aceleración total en un punto del borde de la rueda en el instante t=4 s.",
            options: ["15,7 m/s²", "25,0 m/s²", "39,5 m/s²", "42,5 m/s² aprox"],
            correctAnswer: "42,5 m/s² aprox"
        },
        {
            id: "3a",
            text: "3.a.- Una barca cruza un río de 480 m de ancho. La corriente es 1,2 m/s x̂. Si la velocidad de la barca respecto al agua es -3 m/s x̂ + 4 m/s ŷ, ¿a qué distancia del punto opuesto B descenderán los pasajeros y de qué lado?",
            options: ["144 m a la derecha", "180 m a la izquierda", "216 m a la izquierda", "240 m a la derecha"],
            correctAnswer: "216 m a la izquierda"
        },
        {
            id: "3b",
            text: "3.b.- Si se quisiera viajar directo desde A hacia B con el mismo módulo de velocidad respecto al agua (5 m/s), ¿con qué ángulo respecto a la costa de partida debe orientarse la barca?",
            options: ["53,13° río arriba", "76,11° río arriba", "90° directo", "103,89° río abajo"],
            correctAnswer: "76,11° río arriba"
        },
        {
            id: "4a",
            text: "4.a.- El carrito A (5 kg) y el bloque B (8 kg) están vinculados por una soga ideal y polea fija. Ambos están apoyados sobre un plano inclinado de 37° sin rozamiento y en equilibrio. Halle la fuerza normal que el plano ejerce sobre B.",
            options: ["48 N", "64 N", "80 N", "100 N"],
            correctAnswer: "64 N"
        },
        {
            id: "4b",
            text: "4.b.- En el sistema anterior, ¿cuál es la intensidad de la fuerza de contacto entre ambos cuerpos?",
            options: ["0 N", "9 N", "15 N", "30 N"],
            correctAnswer: "9 N"
        },
        {
            id: "4c",
            text: "4.c.- Si se agrega arena al carrito A, calcule la masa total (carrito + arena) necesaria para que el bloque B adquiera una aceleración hacia arriba por el plano de módulo 2 m/s².",
            options: ["11 kg", "14 kg", "16 kg", "20 kg"],
            correctAnswer: "16 kg"
        }
    ]
};

// Exportamos un array con todos los exámenes disponibles para iterar en el menú
export const allExams = [
    parcialFisica03,
    parcialFisica04,
    // Ejemplo de cómo agregarías el próximo
    {
        id: "parcial-fisica-04-2024",
        title: "Segundo Parcial de Física (Próximamente)",
        description: "Estamos preparando más simulacros para que sigas practicando.",
        disabled: true, // Podés usar esta prop para deshabilitar el click hasta que lo termines
        questions: []
    }
];