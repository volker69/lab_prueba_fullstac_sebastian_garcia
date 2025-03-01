import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
type cardProps = {
    id:string;
    name:string;
    type: string[];
    number: string;
    rarity: string;
    urlImg:string
  };
  
  const CardItem: React.FC<cardProps> = ({ id,name, type, number, rarity,urlImg  }) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/card/${id}`); // Navegar a la ruta específica
    };
    return (
        <div className="flex flex-col gap-4 p-4"  onClick={handleClick}  style={{ cursor: "pointer" }}>

            <div
              key={id}
              className="flex items-center bg-gray-200 p-4 rounded-lg shadow-md"
            >
              <div className="h-50 bg-gray-300 flex items-center justify-center rounded-lg">
              <img src={urlImg} alt={name} className="card-image" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-sm italic">{type}</p>
                <p>
                  <span className="font-bold">Number:</span> {number}
                </p>
                <p>
                  <span className="font-bold">Rareza:</span> {rarity}
                </p>
              </div>
            </div>
       
        </div>
      );
  };
  

export default CardItem