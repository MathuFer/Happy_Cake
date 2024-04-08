import { useState } from "react"
import "../assets/css/contacto.css"

const initialState ={
    email: '',
    descripcion: ''
}

export default function Contacto(){

    const [data, setData] = useState(initialState)
    const [isValid, setIsValid] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email === '' || data.descripcion === '') return setIsValid(false)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then(res => {
            if(res.status === 201) return setIsValid(true)
          })
        console.log(data);
    }

    const handleChange = (e) =>{
        console.log(e.target.value);
        setData((estadoPrevio) => ({...estadoPrevio, [e.target.name]: e.target.value}))
    }


    return(
        <div className="contacto">
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <form onSubmit={handleSubmit} style={{border: `${!isValid ? '1px solid red' : '1px solid green'}` }}>
                <div className="container-input">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" name="email" required onChange={handleChange}/>
                </div>
                <div className="container-textarea">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea name="descripcion" onChange={handleChange}></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>

    )
}