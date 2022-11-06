import { useState } from "react";
import "./App.css";

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="text-6xl text-red-600">hey {count}</div>
        <button
          className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white"
          onClick={() => setCount((count) => count + 1)}
          type="button"
        >
          count+
        </button>
      </div>
    </div>
  );
};

export default App;
