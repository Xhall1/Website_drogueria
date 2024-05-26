import React from 'react';
import './Banner.css'; // Asegúrate de tener un archivo CSS para los estilos del banner

const Banner = ({ data }) => {
  return (
    <div className="banner-container" style={{ backgroundColor: data.bgColor }}>
      <div className="banner-content">
        <h2>{data.discount}</h2>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <img src={data.image} alt="Banner" />
        <h3>{data.title2}</h3>
        <h4>{data.title3}</h4>
        <p>{data.title4}</p>
      </div>
    </div>
  );
};

export default Banner;
