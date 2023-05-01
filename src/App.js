import './App.css';
import Testimony from "./components/Testimony";
import testimoniesData from './testimonies.json'

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>Testimonios Estudiantes RiandiCode</h1>
      <div className="outerdiv">
        <div className="innerdiv">
        {testimoniesData.map((testimony, index) => (
            <Testimony
              key={index}
              name={testimony.name}
              country={testimony.country}
              history={testimony.history}
              phrase={testimony.phrase}
              divOrder={testimony.divOrder}
              img={testimony.img}
              darkText={testimony.darkText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
