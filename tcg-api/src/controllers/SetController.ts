import { Request, Response } from "express";
import { SetServices } from "../services/SetServices";

export const SetControll = {
    async ObtenerCartas(req:Request,res:Response){
        try {            
            const set = await SetServices.getSets();
            res.status(200).json(set)
        } catch (error) {
            res.status(500).json({error:`Error en SetControll:${error}`})
        }
    }
}