
import { Route, Routes, Navigate,BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./Home";

function App() {


  const user = localStorage.getItem("token");

  return (
    <div className="App">
      

<BrowserRouter>
      <Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/home" element={<Home/>} />
		</Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;