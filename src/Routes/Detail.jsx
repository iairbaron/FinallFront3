import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const params = useParams()
  const [dentista, setDentista] = useState({})
  const url =  `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
      .then(response => {
        setDentista(response.data)
        console.log(response.data)
      })
  }, [url])

  return (
    <div style={{width:"100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className="card" >
      <div style={{ maxWidth: '400px' }}>
        <h1>Detail Dentist ID {params.id}</h1>

        <p>Name: {dentista.name}</p>
        <p>Email: {dentista.email}</p>
        <p>Phone: {dentista.phone}</p>
        <p>Website: {dentista.website}</p>
      </div>
    </div>
    </div>
  )
}

export default Detail
