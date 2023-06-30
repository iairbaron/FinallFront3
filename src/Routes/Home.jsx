import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'

const Home = () => {
  const { dentistas } = useContext(ContextGlobal);
  console.log(dentistas)

  

  // Resto del código

  return (
    <main>
      <h1>Lista dentistas</h1>
      <div className='card-grid'>
        {dentistas.map((dentista) => (
          <Card key={dentista.id} dentista={dentista} />
        ))}
      </div>
    </main>
  );
};

export default Home