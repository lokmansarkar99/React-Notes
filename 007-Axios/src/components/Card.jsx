

const Card = ({currElem}) => {
    const {Poster, Title, Type, Year, imdbID } = currElem
  return (
<li>
    <img src={Poster} alt="" />
    <h1>Name:  {Title} </h1>
    <h2>  Year: {Year} </h2>
</li>
  )
}

export default Card