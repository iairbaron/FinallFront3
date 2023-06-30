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
    <>
      <h1>Detail Dentist id </h1>
      {/* Aquí deberás renderizar la información detallada de un usuario en particular */}
      {/* Debes mostrar el name - email - phone - website para cada usuario en particular */}
      <p  >Name: {dentista.name}</p>
      <p>Email: {dentista.email}</p>
      <p>Phone: {dentista.phone}</p>
      <p>Website: {dentista.website}</p>
    </>
  )
}

export default Detail
