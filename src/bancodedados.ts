type TInstrutores = {
    id: number
    nome: string
    email: string
}

type Tidentificador = number

type TAulas= {
    id: number
    nome: string
}

type Tinstrutores = {

    id: number
    nome: string
    email:string
    aulas?: TAulas[]
}

type TBancodedados = {

    proximoIdentificador:Tidentificador
    proximoIdentificadorAula: Tidentificador
    instrutores: Tinstrutores[]

}



export const bancodedados: TBancodedados = {
        proximoIdentificadorAula:2,
        proximoIdentificador: 3,
        instrutores: [
            {
                id: 1,
                nome: 'Heitor',
                email: 'heitor@email.com',
                aulas:[{ id: 1, nome:'Aula de API REST'}]
            },
            {
                id: 2,
                nome: 'Eliana',
                email: 'eliana@email.com',
                aulas:[]
            }
        ]
}


export default bancodedados