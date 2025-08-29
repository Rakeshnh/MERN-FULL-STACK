import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";
//import './Login.css'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
      <nav >
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>


        </Routes>
        </div>
    </Router>
      
  )
}

export default App
