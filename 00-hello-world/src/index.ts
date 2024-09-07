let mensaje: string = "Hola Mundo"
mensaje = "chanchito feliz"
console.log(mensaje)
mensaje = "chao mundo"

let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true

function chanchitoFeliz(config: any) {
    return config
}

let animales = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []
// nums.map(x => x.) // el autocompletado sugiere metodos del tipo de dato
let tupla: [number, string[]] = [1, ['chanchito feliz', 'chanchito felipe']]
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

enum Talla {
    Chica = "S", Mediana = "M", Grande = "L", ExtraGrande = "XL"
}

const enum LoadingState { Idle, Loading, Success, Error }
const state = LoadingState.Success

type Direccion = {
    numero: number
    calle: string
    pais: string
}

type Persona = { 
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona = { 
    id: 1, 
    nombre: 'Hola Mundo', 
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chanchitolandia'
    }
}

const arr: Persona[] = [] 
