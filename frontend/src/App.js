import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import axios from "axios"

const App=()=> {
  const fetchData = async()=>{
    try {
      const response = await axios.get("/api")
      console.log(response)
      console.log("App Connected to Backend")
    } catch (error) {
      console.log("Api hit fail",error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
