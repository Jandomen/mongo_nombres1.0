import React, { useState } from 'react'
import axios from 'axios'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/personas', { nombre, edad })
            alert('Persona agregada exitosamente :) ')
        } catch (error) {
            alert('Error al añadir a la persona')
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '300px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center' }}>Añadir Persona</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block' }}>Nombre:</label>
                    <input
                        type="text"
                        placeholder='Ingresa el nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block' }}>Edad:</label>
                    <input
                        type="text"
                        placeholder='Ingresa la edad'
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                    />
                </div>
                <button type='submit' style={{ width: '100%', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px', borderRadius: '5px' }}>Añadir</button>
            </form>
        </div>
    )
    
}

export default Formulario;
