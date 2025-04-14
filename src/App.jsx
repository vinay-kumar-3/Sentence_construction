import { useEffect,useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Testscreen from './components/Testscreen/Testscreen'

function App() {
  const [data , setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
          setData(data)
          console.log(data.questions)
      })
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Dashboard testDetails = {data.testDetails} />} />
      <Route path="/testscreen" element={<Testscreen questions={data.questions} />} />
    </Routes>
  )
}

export default App
