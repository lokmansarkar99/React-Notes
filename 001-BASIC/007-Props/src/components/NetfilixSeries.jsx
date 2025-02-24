import './NetflixSeries.css';
import data from '../api/data.json';
import { Lists } from './Lists';

const NetflixSeries = () => {
  return (
    <ul>
      {data.map(currElem => (
        <Lists key={currElem.id} currElem={currElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;
