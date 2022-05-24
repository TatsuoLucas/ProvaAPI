import { Router } from 'express'
import { Primaria, Cinema } from './services.js'

const server = Router();


server.get('/primaria/:cor' , (req, resp) => {
    try{
        const a = req.params.cor;

        const x = Primaria(a);

        resp.send({
            primaria: x
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/cinema' , (req, resp) => {
    try{

        const {a,b,c} = req.body

        const y = Cinema(a,b,c)

    resp.send({
        cinema: y
    })
}
    catch(err) {
        resp.send({
            erro: err.message
        })
    }

})

export default server;
