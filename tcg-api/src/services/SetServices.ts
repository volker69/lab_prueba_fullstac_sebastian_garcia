import db from "../db/knexfile";



export const SetServices ={
    async getSets():Promise<any>{
        try {

            
            const set = await db("set")
                .select("*")                
                

            return set
        } catch (error) {
            console.error("++ERROR++--[SetServices]-->",error);
        }
    }
}