import Home from "./components/Home";
import { Logged } from "./components/Logged";
import Login from "./components/Login";
import Register from "./components/Register";
import Teste from "./components/Teste";

function App() {
  document.body.classList.add("dark");
  return (
    <div className="">
      <div className="h-screen">
        <Home />
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <Login />
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <Register />
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <Logged />
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <Teste />
      </div>
    </div>
  );
}

export default App;
