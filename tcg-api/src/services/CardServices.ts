import db from "../db/knexfile";



export const CardServices ={
    async getCards(page:number = 1,pageSize:number= 50):Promise<any>{
        try {

            const offset = (page-1) * pageSize;
            const cards = await db('card')
                .select('*')
                .limit(pageSize)
                .offset(offset);           

            return {
                cards,
                page,
                pageSize                
            }
        } catch (error) {
            console.error("++ERROR++--[CardServices]-->",error);
        }
    },

    async getCardSetsId(set_id:string,page:number = 1,pageSize:number= 20):Promise<any>{
        try {
            const offset = (page-1) * pageSize;
            const cardSet = await db('card')                
                .join('image','card.id','=','image.card_id')
                .select(
                    'card.id',
                    'card.name',                    
                    'image.type',
                    'image.url',    
                    'card.types',            
                    'card.subtypes',                    
                    'card.number',
                    'card.rarity'
                )
                .where('card.set_id',set_id)
                .limit(pageSize)
                .offset(offset);           
;
                return cardSet
        } catch (error) {
            console.error('++ERROR++--[getCardSets]-->',error);
        }
    },
    
    async getCardById(card_id:string):Promise<any>{
        try {
            const card = await db('card')
            .join('image','card.id','=','image.card_id')            
            .select(
                'card.id',
                'card.name',                    
                'image.type',
                'image.url',    
                'card.types',            
                'card.subtypes', 
                'card.supertype',
                'card.number',
                'card.rarity',                
            )
            .where('card.id',card_id)
            .limit(1);

            const market = await db('market')
                .select('*')
                .where('card_id','=',card_id);

            const data = {
                cardData:card,
                marketData:market
            }
            return data
        } catch (error) {
            console.error('++ERROR++--[getCardById]-->',error);
            
        }
    }

}