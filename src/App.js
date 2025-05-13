import CicloDeVida from "./components/ciclo-de-vida";
import playButtonImg from "./resources/play-button.png";
import stopButtonImg from "./resources/stop-button.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="section">
        <CicloDeVida
          playButtonImg={playButtonImg}
          stopButtonImg={stopButtonImg}
        ></CicloDeVida>
      </section>
    </div>
  );
}

export default App;
