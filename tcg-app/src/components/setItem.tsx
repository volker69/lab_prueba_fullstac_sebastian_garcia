import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
type setProps = {
    id:string;
    title: string;
    subtitle: string;
    count: number;
    imageUrl: string;
  };
  
  const SetItem: React.FC<setProps> = ({ id,title, subtitle, count, imageUrl  }) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/set/${id}/card`); // Navegar a la ruta específica
    };
    return (
      <div className="card" onClick={handleClick}  style={{ cursor: "pointer" }}>
        <div className="image-container">
          <img src={imageUrl} alt={title} className="card-image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">{subtitle}</p>
        </div>
        <span className="card-count">Cartas: {count}</span>
      </div>
    );
  };
  

export default SetItem