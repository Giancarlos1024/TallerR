import { useState } from 'react'
import './App.css'
import Galeria from './components/Galeria'

function App() {
  
  const [contador, setContador] = useState(100)

  const contadorActualizar = () =>{
    setContador(contador + 1)
  }

  let  nombre = "mailo"
  let color = "blanco"


  let imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOtv3TRF9fW_TYao8EtoYiPyBK3u7upYuMg&s"

  return (
    <>
      <p>{contador}</p>

      <button onClick={contadorActualizar}>Presionar</button>

      <Galeria imgValor = {imgUrl} />
    </>
  )
}

export default App
