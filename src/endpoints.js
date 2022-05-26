import { Router } from 'express'
import {  Dobro, Somar, Tabuada, Temperatura,  Media, Primaria, Ingresso, Caracteres, MaiorNumero} from './services.js'

const server = Router();

server.get('/dobro/:numero', (req, resp) => {
    try{
    const numero = Number(req.params.numero);
    const x = Dobro(numero);
    
    resp.send({
        dobro: x
    })
    }catch(err){
        resp.send({
        err:err.message
        })
    }
})


server.get('/somar', (req, resp) => {
    try{
    const a = Number(req.query.a);
    const b = Number(req.query.b)

    const x = Somar(a, b)
    resp.send({
        soma: x
    })
    }catch(err){
        resp.send({
            err:err.message
        })
    }
}) 


server.get('/tabuada', (req, resp) => {
    try {
    const a = Number(req.query.n);

    const x = Tabuada(a); 

    resp.send({
        tabuada: x
    })
    }
    catch (err) {
        resp.send({
            err:err.message
        })
    }
})

server.get('/temperatura', (req, resp) =>{
    try{
    const t = Number(req.query.t);

    const x = Temperatura(t);
    resp.send({
        febre:x
    })
    }catch(err){
        resp.send({
            err:err.message
        })
    }
})

server.post('/media', (req,resp) =>{
    try{
    const {notas: {n1, n2, n3}} = req.body;

    const x = Media(n1,n2,n3);
    resp.send({
        media: x
    })
    }catch(err){
        resp.send({
            err:err.message
        })
    }   
})

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

server.post('/ingresso' , (req, resp) => {
    try{

        const {a,b,c} = req.body

        const y = Ingresso(a,b,c)

    resp.send({
    ingresso: y
    })
}
    catch(err) {
        resp.send({
            erro: err.message
        })
    }

})
server.get('/dia2/caracteres/:texto/:caracter', (req, resp) => {
    try {
        const a = req.params.texto;
        const b = req.params.Caracteres;
        

        const x = Caracteres(a, b);

        resp.send({
            Freq: x
        })
    }

    catch (err) {
        resp.send({
            err:err.message
        })
    }
})

server.post('/dia2/maiornumero', (req, resp) => {
    try{
    const a = req.body;

    const x = MaiorNumero(a);

    resp.send({
        maior: x
    })
    } catch(err) {
        resp.send({
            err:err.message
        })
    }
})

export default server;
