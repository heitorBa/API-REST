import { Request, Response } from 'express'
import bancodedados from '../bancodedados'

export function cadastrarAulas(request: Request, response:Response) {
    const { id } = request.params
    const { nome } = request.body

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    
    if (!instrutor) {
        return response.status(404).json({ mesagem:'Instrutor(a) Não Localizado(a)'})
    }

    const novaAula = {
        id: bancodedados.proximoIdentificadorAula++,
        nome
    }
    
   if (instrutor.aulas) {
    instrutor.aulas.push(novaAula)
    return response.status(201).json(novaAula)
   }

   instrutor.aulas = [novaAula]
   return response.status(201).json(novaAula)

}

export function excluirAulas(request: Request, response:Response){
    const { id, idAula } = request.params

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    
    if (!instrutor) {
        return response.status(404).json({ mesagem:'Instrutor(a) Não Localizado(a)'})
    }

    if (!instrutor.aulas) {
        return response.status(404).json({ mesagem:'IAula não localixada'})
    }

    const aulaIndex = instrutor.aulas?.findIndex((item) => {
        return item.id === Number(idAula)
    })

    if (aulaIndex === -1) {
        return response.status(404).json({ mesagem:'Instrutor(a) Não Localizado(a)'})
    }  

    instrutor.aulas?.splice(aulaIndex, 1)

    return response.status(204).send()

    }