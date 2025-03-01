import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { ISet } from "../interfaces/set.interface"
import SetItem from "../components/setItem";
import "../styles.css";

const Home:React.FC = ()=>{
    const [sets,setSets] = useState<ISet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    //http://localhost:3001/api/cards

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.get<ISet[]>("http://localhost:3001/api/sets");
            console.log("datos- Home->",response.data);
            setSets(response.data);
          } catch (error) {
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
        {sets.slice(0, 10).map((set) => (
         
          <div className="itemCar">
           <SetItem key={set.id} title={set.name} subtitle={set.series} imageUrl={set.logo_url} count={set.printed_total} id={set.id} />
          </div>
        ))}
        </div>
      </div>
   
  );
}

export default Home