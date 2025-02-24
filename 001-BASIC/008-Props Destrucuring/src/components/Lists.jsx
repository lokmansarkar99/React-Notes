export const Lists = ({data}) => {
  const { name, img_url, rating, description, genre, cast, watch_url } =
   data;
 
  return (
    <li>
      <div>
        <img
          src={img_url}
          alt={name}
          width="40%"
          height="40%"
        />

        <h2>Name: {name || 'Not Available'}</h2>
        <h3>Rating: {rating || 'N/A'}</h3>
        <p>Summary: {description || 'No description provided.'}</p>
        <p>Genre: {genre || 'Not specified'}</p>
        <p>Cast: {cast || 'Unknown'}</p>

        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
