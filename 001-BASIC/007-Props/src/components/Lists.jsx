import styled from "styled-components";
// const ButtonWatch = styled.button({
//   padding: "2px",
//   border: "none",
//   cursor: "pointer"
// })

const ButtonWatch = styled.button`
  padding: '2px';
  border: 'none';
  cursor: 'pointer';
  background-color: 
`



export const Lists = ({ currElem }) => {
  console.log(currElem)
  return (
    <li>
      <div>
        <img
          src={currElem.img_url}
          alt={currElem.name}
          width="40%"
          height="40%"
        />

        <h2>Name: {currElem.name || 'Not Available'}</h2>
        <h3>
          Rating: <span className={`rating-bg ${currElem.rating >= 8.5 ? "super_hit" : "average"}` }> {currElem.rating}</span>
        </h3>
        <p>Summary: {currElem.description || 'No description provided.'}</p>
        <p>Genre: {currElem.genre || 'Not specified'}</p>
        <p>Cast: {currElem.cast || 'Unknown'}</p>

        <a href={currElem.watch_url} target="_blank" rel="noopener noreferrer">
          {/* <button>Watch Now</button> */}
          <ButtonWatch>Watch Now S</ButtonWatch>
        </a>
      </div>
    </li>
  );
};
