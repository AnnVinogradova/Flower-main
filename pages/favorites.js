import { useContext } from 'react';
import { CustomContext } from '../context/context.js';


export default function Favorites () {
  const { favorites } = useContext(CustomContext);

  return (
    <div>
      {favorites.map((favorite, id) => (
        <div key={id}>
          {favorite.title}
        </div>
      ))}
    </div>
  );
};

