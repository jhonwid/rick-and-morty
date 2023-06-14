//? Funcion que me retorna un numero aleatorio entre el 1 y 126
export const getRandomDimension = () => {

    //? 0 => 0.9999999999999 === 0 => 125.99999999 === 0 => 125 === 1 => 126
    return Math.floor(Math.random() * 126) + 1
}