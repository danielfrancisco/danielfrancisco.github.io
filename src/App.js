import "./styles.scss";

export default function App() {
  return (
    <>
      <div id="fondo">
        <div id="nav">
          <p>Home</p>
          <p className="rnav">Skills</p>
          <p className="rnav">Portfolio</p>
          <p className="rnav">About</p>
        </div>

        <div id="con">
          <div id="nombre">Daniel Campoverde</div>
          <div id="titulo">Front end developer</div>
          <div id="titulo">Designer</div>
          <button>CONTACT</button>
        </div>
      </div>
    </>
  );
}
