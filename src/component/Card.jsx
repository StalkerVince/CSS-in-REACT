import icon from "../assets/icon.png";
import "./style.scss";

function Card() {
  return (
    <body>
      <div className="page">
        <img src={icon} />
        <h1>Les Ornithorynques</h1>
        <h2>Mi-Canard, Mi-Castor: Une anomalie. </h2>
        <p>Ses chevilles ont des aiguillons venimeux non-létaux.</p>
        <p>
          Sa fourrure emet de la lumière bleue quand il est exposé aux
          Ultra-Violets
        </p>
      </div>
    </body>
  );
}

export default Card;
