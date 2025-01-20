import React, {  useEffect, useState } from 'react'

const Formulario = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEnviar = (event) =>{
        event.preventDefault()
        console.log("valor de email : ", email)
        console.log("valor de password :", password)

        if(email == "giancarlos@gmail.com" && password == "123456"){
            alert("logeo exitoso")
        }

        setEmail('')
        setPassword('')
    }

    useEffect(() =>{
        console.log("componente renderizado")
    },[email])


    return (
        <form onSubmit={handleEnviar}>

            <div>
                <input 
                type="email" 
                value={email}
                placeholder='ingresar correo'
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <input 
                type="password"
                placeholder='ingresar contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Formulario
