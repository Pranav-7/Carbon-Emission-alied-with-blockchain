import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import axios from "axios";
import {useEffect,useState} from 'react';
function App() {
  const [values,setData]=useState([])
  const getData=async()=>{
     const {data}= await axios.get("http://localhost:5000")
     console.log(data)
     setData(data)
  }

  useEffect(()=>{
    getData()
  },[])

  

  return (
    <div className="App">
      <Chart values={values} />
    </div>
  );
}

export default App;
