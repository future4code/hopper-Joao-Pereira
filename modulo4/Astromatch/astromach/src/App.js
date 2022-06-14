import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [perfis, setPerfis] = useState([])

  useEffect(() => {
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
      .then((response) =>{
        setPerfis(response.data) 
      })
      .catch(() => {
        console.log("Deu ruimzão")
      })
  }, [])

  return (
    <div className="App">
      <div>
        <h1>teste</h1>
      </div>
    </div>
  );
}

export default App;
