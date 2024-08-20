import {Request, Response} from 'express'
import bancodedados from '../bancodedados'


export function listar(request:Request, response:Response){

    return response.status(200).json(bancodedados.instrutores)

}

export function detalhar(request:Request, response:Response){
    const { id } = request.params

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    
    if (!instrutor) {
        return response.status(404).json({ mesagem:'Instrutor(a) Não Localizado(a)'})
    }
    return response.status(200).json(instrutor)

}

export function casdastar(request: Request, response:Response) {
    const { nome, email } = request.body

    const novoInstrutor = {
        id: bancodedados.proximoIdentificador++,
        nome,
        email
    }

    bancodedados.instrutores.push(novoInstrutor)

    return response.status(201).json(novoInstrutor)
}

export function atualizar(request: Request, response:Response) {
    const { id } = request.params
    const { nome, email } = request.body

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    
    if (!instrutor) {
        return response.status(404).json({ mesagem:'Instrutor(a) Não Localizado(a)'})
    }
    
    instrutor.nome = nome
    instrutor.email = email  
    
    return response.status(204).send()
}

export function atualizarEmail(request: Request, response:Response) {
    const { id } = request.params
    const { email } = request.body

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    
    if (!instrutor) {
        return response.status(404).json({ mesagem:'Instrutor(a) Não Localizado(a)'})
    }
    
    instrutor.email = email  
    
    return response.status(204).send()
}

export function excluir(request: Request, response:Response) {
    const { id } = request.params

    const instrutorIndice = bancodedados.instrutores.findIndex((item) => {
        return item.id === Number(id)
    })
    
    if (instrutorIndice === -1) {
        return response.status(404).json({ mesagem:'Instrutor(a) Não Localizado(a)'})
    }
    
    bancodedados.instrutores.splice(instrutorIndice, 1)
    
    return response.status(204).send()
}