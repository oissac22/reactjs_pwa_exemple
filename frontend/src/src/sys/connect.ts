import axios from 'axios'

const URL_STATES = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'


const app = axios.create()


export type TStates = {
    id: number,
    sigla: string,
    nome: string,
    regiao: {
        id: number,
        sigla: string,
        nome: string
    }
}


export function states(){
    return app.get<TStates[]>(URL_STATES)
}