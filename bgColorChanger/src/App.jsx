import { useState } from "react";
import "./App.css";


const useColor = (initialColor) => {
  const [color, setColor] = useState(initialColor);

  return { color, setColor };
};

function App() {

  
  const { color, setColor } = useColor("red");

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2  p-2 m-2">
        <div className="flex justify-center bg-white flex-wrap p-2 m-2 rounded-xl gap-20">
          <button className="outline-none p-4 bg-red-300 rounded-full" onClick={() => setColor("red")}>
            Red
          </button>
          <button className="outline-none p-4 bg-green-300 rounded-full" onClick={() => setColor("green")}>
            Green
          </button>
          <button className="outline-none p-4 bg-blue-300 rounded-full" onClick={() => setColor("blue")}>
            Blue
          </button>
          <button className="outline-none p-4 bg-violet-300 rounded-full" onClick={() => setColor("violet")}>
            Violet
          </button>
          <button className="outline-none p-4 bg-indigo-300 rounded-full" onClick={() => setColor("indigo")}>
            Indigo
          </button>
          <button className="outline-none p-4 bg-yellow-300 rounded-full" onClick={() => setColor("yellow")}>
            Yellow
          </button>
          <button className="outline-none p-4 bg-orange-300 rounded-full" onClick={() => setColor("orange")}>
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
