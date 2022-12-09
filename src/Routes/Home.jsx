import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/globalContext';
import Card from '../Components/Card';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map(dentist => <Card id={dentist.id} key={dentist.id} name={dentist.name} username={dentist.username} />)}
        {/* Aqui deberias renderizar las cards */}

      </div>
    </>
  );
};

export default Home;