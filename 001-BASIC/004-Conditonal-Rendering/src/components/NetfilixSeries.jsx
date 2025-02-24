import './NetflixSeries.css';

const NetflixSeries = ({ image, title, rating, description }) => {
  let age = 19;

  // 1st WAY
  // if (age > 18) {
  //     return (
  //       <div className="container">
  //         <img src={image} alt={title} />
  //         <h2>{title}</h2>
  //         <h3>{rating}</h3>
  //         <p>{description}</p>
  //         <button>Watch Now</button>
  //       </div>
  //     );
  // } else {
  //     return (
  //       <div className="container">
  //         <img src={image} alt={title} />
  //         <h2>{title}</h2>
  //         <h3>{rating}</h3>
  //         <p>{description}</p>
  //         <button>Not Available</button>
  //       </div>
  //     );
  // }

// 2ND WAY
  // return (
  //       <div className="container">
  //         <img src={image} alt={title} />
  //         <h2>{title}</h2>
  //         <h3>{rating}</h3>
  //         <p>{description}</p>
  //     <button>{ age >= 18? "Watch Now" : "Not Available"}</button>
  //       </div>
  //     );

  // 3RD WAY
  // let canWatch = "Not Available"
  // if (age >= 18) canWatch = "Watch Now"
  

  //   return (
  //     <div className="container">
  //       <img src={image} alt={title} />
  //       <h2>{title}</h2>
  //       <h3>{rating}</h3>
  //       <p>{description}</p>
  //       <button> {canWatch}  </button>
  //     </div>
  //   );

  // 4TH WAY
  const canWatch = () => {
    if (age >= 18) {
      return  <button>Watch Now Button</button> ;
    }
    else {
      return <button>Not Button</button>;
    }
  }
    return (
      <div className="container">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{rating}</h3>
        <p>{description}</p>
        <button>{ canWatch() }</button>
      </div>
    );

};

export default NetflixSeries;
