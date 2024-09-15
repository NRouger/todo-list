import "./TodoIcon.css"
import { ReactComponent as CheckSVG } from "./check.svg"; //para importar nuestros iconos
import { ReactComponent as DeleteSVG} from "./delete.svg";

const iconTypes = {
  "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
  "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />
}

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
      {/* condicional reducido: color se envia como (funcion) */}
    </span>
  )
}

export { TodoIcon };

// condicional reducido: se envian propiedades como funcion en el script.
// Complete/DeleteIcon.js componente => props {color} => que recibimos en IconTypes.js y pasamos la prop como funcion para utilizar la misma prop dentro de la propiedad 'fill'
