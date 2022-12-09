import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavorite] = useState(null);
  //const localFavs = getFavFromStorage();

  useEffect(() => {
    setFavorite(getFavFromStorage());
  }, [])

  return (
    <>
      <h1>Favs Dentists</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs
          ? favs.map((dentistFav) => (
            <Card {...dentistFav} key={dentistFav.id} id={dentistFav.id} handleFav={() => setFavorite(getFavFromStorage())} />
          ))
          : null}
      </div>
    </>
  );
};

export default Favs;
