import { Request, Response } from "express";
import { CardServices } from "../services/CardServices";
import { json } from "stream/consumers";

export const CardControll = {
    async ObtenerCartas(req:Request,res:Response){
        try {            
            const card = await CardServices.getCards();
            res.status(200).json(card)
        } catch (error) {
            res.status(500).json({error:`Error en ObtenerCartas: =>${error}`})
        }
    },

    async ObtenerCartasEdicion(req:Request,res:Response){
        try {
            let {id} = req.params; 
            let {page} = req.query;  
            page = `${page}` 
            let pagina:number = (page == `undefined`|| page == undefined)? 1:parseInt(page)
            console.log("pagina VALOR==>",pagina);
            let set_id = `${id}`;
            const cardSet = await CardServices.getCardSetsId(set_id,pagina);
            res.status(200).json(cardSet);
        } catch (error) {
            res.status(500).json({error:`Error en ObtenerCartasEdicion: =>${error}`})
        }
    },

    async ObtenerCartaPorId(req:Request,res:Response){
        try {
            let {id} = req.params;            
            let card_id = `${id}`;
            const card = await CardServices.getCardById(card_id);
            console.log(card);
            res.status(200).json(card);
        } catch (error) {
            res.status(500).json({error:`Error en ObtenerCartasEdicion: =>${error}`})
            
        }
    }
}