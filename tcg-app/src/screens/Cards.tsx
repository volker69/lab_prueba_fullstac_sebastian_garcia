import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { ICards } from "../interfaces/cars.interface"
import CardItem from "../components/cardItem";
import { useParams } from 'react-router-dom';
import "../styles.css";

const Cards:React.FC = ()=>{
    const { id } = useParams();
    const [card,setCards] = useState<ICards[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    //http://localhost:3001/api/cards

    useEffect(() => {
        const fetchPosts = async () => {
          try {
           
            console.log("PArrams====>",id);
            const response = await axios.get<ICards[]>(`http://localhost:3001/api/sets/${id}/cards`);
            console.log("datos-->",response.data);
            setCards(response.data);
          } catch (error) {
            console.error("ERROR: ",error);
            setError("Error al obtener los datos");
          } finally {
            setLoading(false);
          }
        };
    
        fetchPosts();
      }, []);

      if (loading) return <p>Cargando datos...</p>;
       if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Sets</h2>
      <div className="cardList">
        {card.slice(0, 10).map((card) => (
         
          <div className="itemCar">
           <CardItem id={card.id} name={card.name} number={card.number}  rarity={card.raruty} type={card.types} key={card.id} urlImg={card.url}  />
          </div>
        ))}
        </div>
      </div>
   
  );
}

export default Cards