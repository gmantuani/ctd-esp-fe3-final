import { React, useContext, useState } from "react";
import { setFavInStorage, isFavorited, removeFavInStorage } from "./utils/localStorage";
import { ContextGlobal } from "./utils/globalContext";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
    const [favorite, setFavorite] = useState(isFavorited(id));
    const { state } = useContext(ContextGlobal);
    const isDarkMode = state.theme === "dark" || false;

    const isFavorite = (favorite) => {
        setFavorite(favorite);
    };

    const addFav = () => {
        // Aqui iria la logica para agregar la Card en el localStorage
        const favorite = setFavInStorage({ name, username, id });
        isFavorite(favorite);
    };

    const removeFav = () => {
        const favorite = removeFavInStorage(id);
        isFavorite(favorite);
    };


    return (
        <div className={`card ${isDarkMode ? "dark" : ""}`}>
            <img
                src="/images/doctor.jpg"
                alt="doctor"
            />
            <Link to={`/dentist/${id}`}>
                <h5>{name}</h5>
            </Link>
            <p className="card-text">{username}</p>
            <button className="fav"
                onClick={favorite ? removeFav : addFav}>
                {favorite ? "Remove ⭐" : "Add ⭐"}
            </button>
        </div>
    );
};

export default Card;