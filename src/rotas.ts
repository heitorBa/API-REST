import { Router } from 'express'
import { atualizar, atualizarEmail, casdastar, detalhar, excluir, listar } from './controladores/instrutores'
import { cadastrarAulas, excluirAulas } from './controladores/aulas'

const rotas = Router()

//listar instrutores
rotas.get('/instrutores', listar)

// detalhar as informações
rotas.get('/instrutores/:id', detalhar)

//casdastar instrutor
rotas.post('/instrutores', casdastar)

//editar um instrutor
rotas.put('/instrutores/:id', atualizar)
rotas.patch('/instrutores/:id/alterarEmail', atualizarEmail)

//excluir instrutor
rotas.delete('/instrutores/:id', excluir)

//casdastrar uma aula
rotas.post('/instrutores/:id/aulas', cadastrarAulas)

// excluir uma aula para um instrutor
rotas.delete('/instrutores/:id/aulas/:idAula', excluirAulas)

export default rotas