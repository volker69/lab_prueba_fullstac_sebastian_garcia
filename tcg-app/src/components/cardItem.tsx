import React from "react";
import "../styles.css";
type CardProps = {
    title: string;
    subtitle: string;
    count: number;
    imageUrl: string;
  };
  
  const CardItem: React.FC<CardProps> = ({ title, subtitle, count, imageUrl }) => {
    return (
        <div className="card">
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
  

export default CardItem