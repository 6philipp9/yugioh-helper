//TODO    Fetch funktioniert nicht da NewComponent 2 mal geladen wird, 1 mal beim initialisieren des NewCard components durchs returnen der beiden Components und das zweite mal durch das activieren des components 

//! eventuell hilft ein exportiertes component 



import React, { useState, useEffect } from 'react';

const CurrentComponent = () => <div>Loading...</div>;
const NewComponent = (data) => {
  console.log("test")
}

const NewCards = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      'https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2024-01-01&enddate=2024-02-06&dateregion=tcg',
    )
      .then((response) => response.json())
      .then((datei) => {
        setData(datei.data);
        setLoading(false);
      })
      .catch((err) => console.log('error'));
  }, []);
  return (
    <div>
      <h1>New Cards</h1>
      {loading ? <CurrentComponent /> : <NewComponent data={data} />}
    </div>
  );
};

export default NewCards;
