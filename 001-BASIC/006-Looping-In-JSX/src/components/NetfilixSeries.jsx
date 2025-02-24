import './NetflixSeries.css';
import data from '../api/data.json';

const NetflixSeries = () => {
  return (

      // {/* <ul>
      //   <li>
      //     <img src={data[0].img_url} alt="" width="40%" height="40%" />

      //     <h2>Name: {data[0].name} </h2>
      //     <h3>Rating: {data[0].rating} </h3>
      //     <p>Summary: {data[0].description}</p>
      //     <p> Genre: {data[0].genre} </p>
      //     <p>Cast: {data[0].cast} </p>
      //     <a href={data[0].watch_url} target="_blank">
      //       <button>Watch Now</button>
      //     </a>
      //   </li>

      //   <li>
      //     <img src={data[1].img_url} alt="" width="40%" height="40%" />

      //     <h2>Name: {data[1].name} </h2>
      //     <h3>Rating: {data[1].rating} </h3>
      //     <p>Summary: {data[1].description}</p>
      //     <p> Genre: {data[1].genre} </p>
      //     <p>Cast: {data[1].cast} </p>
      //     <a href={data[1].watch_url} target="_blank">
      //       <button>Watch Now</button>
      //     </a>
      //   </li>

      //   <li>
      //     <img src={data[2].img_url} alt="" width="40%" height="40%" />

      //     <h2>Name: {data[2].name} </h2>
      //     <h3>Rating: {data[2].rating} </h3>
      //     <p>Summary: {data[2].description}</p>
      //     <p> Genre: {data[2].genre} </p>
      //     <p>Cast: {data[2].cast} </p>
      //     <a href={data[2].watch_url} target="_blank">
      //       <button>Watch Now</button>
      //     </a>
      //   </li>

      //   <li>
      //     <img src={data[3].img_url} alt="" width="40%" height="40%" />

      //     <h2>Name: {data[3].name} </h2>
      //     <h3>Rating: {data[3].rating} </h3>
      //     <p>Summary: {data[3].description}</p>
      //     <p> Genre: {data[3].genre} </p>
      //     <p>Cast: {data[3].cast} </p>
      //     <a href={data[3].watch_url} target="_blank">
      //       <button>Watch Now</button>
      //     </a>
      //   </li>
      // </ul> */}
    



    <ul>
      {data.map(currElem => (
        <li key={currElem.id}>
          <div>
            <img
              src={currElem.img_url}
              alt={currElem.name}
              width="40%"
              height="40%"
            />

            <h2>Name: {currElem.name || 'Not Available'}</h2>
            <h3>Rating: {currElem.rating || 'N/A'}</h3>
            <p>Summary: {currElem.description || 'No description provided.'}</p>
            <p>Genre: {currElem.genre || 'Not specified'}</p>
            <p>Cast: {currElem.cast || 'Unknown'}</p>

            <a
              href={currElem.watch_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Watch Now</button>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NetflixSeries;
