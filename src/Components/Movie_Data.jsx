import React, { useEffect, useState } from 'react';

const Movie_Data = () => {
  const [value, setValue] = useState();
  const [pages,setPages]=useState(1);
  

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d096bacf2f5095f688bb93a6bbe75f0c');
      const data = await api.json();
      const apiData = data.results;
      console.log(apiData);

      setValue(apiData);
    }

    fetchData();
  }, []);

  return (
    <>
    <div className='container'>
      <div className='row'>
      {value && value.map((items) => (
        <div className='col-sm-12 col-md-6 col-lg-4' key={items.id}>
          <div className="card" style={{ width: '20rem',height:'60rem' }}>
            <img src={`https://image.tmdb.org/t/p/w500${items.poster_path}`} className="card-img-top" alt="poster" />
            <div className="card-body">
              <h5 className="card-title">{items.original_title}</h5>
              <p className="card-text">{items.overview}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}


export default Movie_Data;