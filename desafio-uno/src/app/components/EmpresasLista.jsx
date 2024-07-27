import React from "react";
import {empresasMasValiosas} from "../data"; // Importa directamente el array con UUIDs

export const EmpresasMasValiosasComponent = () => {
    return (
        <div className="container">
        <div className="artistic-title">
        <h1>Empresas Más Valiosas HOKN DSFUO 1</h1>
      </div>
        <ul className="empresa-list">
            {empresasMasValiosas.map((empresa) => (
                <li key={empresa.uuid} className="empresa-item">
                    <img src={empresa.imagen} alt={empresa.titulo} className="empresa-imagen" />
                    <div className="empresa-content">
                        <div className="empresa-info">
                            <h2>{empresa.titulo}</h2>
                            <p>{empresa.descripcion}</p>
                            <p><strong>Características:</strong> {empresa.caracteristicas}</p>
                        </div>          
                    </div>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default EmpresasMasValiosasComponent;



