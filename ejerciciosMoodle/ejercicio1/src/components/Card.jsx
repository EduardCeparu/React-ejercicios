import React from "react";
import '../styles/Card.css';

function Card() {
  return (
    <>
    {/* <div classNameName="cuadro">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
    <button>GO SOMEWHERE</button>
    </div> */}
    <div className="card w-70">
  <div className="card-body">
    <p className="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary boton">GO SOMEWHERE</a>
  </div>
</div>
    </>
    
  );
}

export default Card
