import { startTransition, useState } from 'react'
import './App.css'


function App() {
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(0);
  const [lastRecommendation, setLastRecommendation] = useState('Ninguna');
  var alto = 0;
  var bajo = 0;

  var recommendationsLow = [
    'Hidratate. Nuestro cuerpo necesita estar hidratado para funcionar de forma óptima. Si no tenemos suficiente líquido en el cuerpo, las funciones esenciales como la circulación de la sangre no se realizan adecuadamente y los órganos no reciben los nutrientes necesarios, de modo que su rendimiento será menos eficiente.',
    'Ejercitate. El ejercicio fortalece su corazón y mejora su circulación. El aumento del flujo sanguíneo eleva los niveles de oxígeno en su cuerpo. Esto ayuda a bajar el riesgo de enfermedades del corazón como el colesterol alto, la enfermedad arterial coronaria y el ataque al corazón.'
  ]
  var recommendationslHigh = [
    'Pasea al aire libre. Las personas que viven en un entorno rodeado de naturaleza, realizan con frecuencia paseos por parques y bosques, también hacen senderismo por la montaña. Esta actividad ayuda a tener unos niveles de estrés ideales. Por ello, las personas que llevan a cabo los paseos al aire libre no ven alteradas sus pulsaciones en reposo.',
    'Reduce grandes fuentes de estrés. El trabajo, las cargas económicas o la responsabilidad de cuidar a un familiar dependiente genera un estrés considerable, haciendo que el corazón trabaje a un ritmo más alto. Buscar alternativas y delegar funciones en personas de máxima confianza ayudarán a reducir o a acabar con las fuentes principales de estrés.'
  ]

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const start = () => {
    setInterval(changeRandom, 1000);
  }

  const changeRandom = () => {
    let minimo: number = getRandomArbitrary(50, 70);
    let maximo: number = getRandomArbitrary(70, 110);
    let number: number = getRandomArbitrary(minimo, maximo);
    let statusAux: string = "";

    let getRandom = getRandomArbitrary(-1, 1);
    getRandom = Math.ceil(getRandom);
    if (getRandom == -0) {
      getRandom = 0;
    }
    if (number >= 60 && number <= 100) {
      statusAux = "Normal";
      alto = 0;
      bajo = 0;
      console.log(bajo);
    } else if (number < 60) {
      statusAux = "Bajo";
      bajo++;

    } else if (number > 100) {
      statusAux = "Alto";
      alto++;
    }

    if (alto == 2) {
      setLastRecommendation(recommendationslHigh[getRandom]);
    } else if (alto == 3) {
      alert("DEBE VER UN MEDICO.");
    } else if (alto > 3) {
      alert("DEBE VER UN MEDICO URGENTE.");
    }
    if (bajo == 2) {
      setLastRecommendation(recommendationsLow[getRandom]);
      console.log(recommendationsLow[getRandom]);
    } else if (bajo == 3) {
      setLastRecommendation(recommendationsLow[getRandom]);
    } else if (bajo > 3) {
      alert("LA PERSONA NECESITA RPC.");
    }
    setCount(Math.ceil(number));
    setStatus(statusAux);


  }

  return (
    <div className="App">
      <div className="heart"></div>
      <div>
        <h1>{count}(PPS)</h1>
        <h1>{status}</h1>
        <button onClick={start}>Start</button>
        <h3>Ultima recomendacion</h3>
        <p>{lastRecommendation}</p>
      </div>
    </div>
  )
}

export default App
