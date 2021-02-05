import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Patrimony from './Patrimony';

const PatrimonyList = () => {
  const [patrimonials, setPatrimonials] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect((type) => {
    axios
      .get(
        'https://etablissements-publics.api.gouv.fr/v3/departements/69/mairie'
      )
      .then((response) => {
        console.log(response);
        setPatrimonials(response.data);
      });
  }, []);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div>
        <button onClick={handleVisible}>
          {!isVisible ? 'Nos antennes' : 'Découvrir nos antennes'}
        </button>
        {patrimonials
          .filter((patrimonial) => {
            return !isVisible;
          })
          .map((patrimonial) => (
            <div key={patrimonial.name}>
              <Patrimony patrimonial={patrimonial} />
            </div>
          ))}
      </div>
    </>
  );
};
export default PatrimonyList;
