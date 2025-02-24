import { useState } from 'react';
const HowNotToFetchAPI = () => {
    const [data, setData] = useState([]);   
    // Fetching data directly in the render function (NOT RECOMMENDED)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(fetchedData => {
        console.log(fetchedData);
        // setData(fetchedData); // Logs the fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  
    return (
      <div>
        <h1>How Not To Fetch API</h1>
        <p>Check the console for logged data.</p>
        <ul>
        {data.map((item) => {
            return <div key={item.id}> 
                <li key={item.id} style={{fontSize:"22px"}}> Title:  {item.title}</li> 
            <li key={item.body}> Content: {item.body}</li> 
              </div>;
        })}
        </ul>
      </div>
    );
  };
  
  export default HowNotToFetchAPI;
  