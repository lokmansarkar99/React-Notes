
import NetfilixSeries, { Header, Footer } from './components/NetfilixSeries';
const App = () => {
  const name = "Queen of Tears"
  return (
    <>
      <Header />
      <NetfilixSeries
        image="qot.jpg"
        title={name}
        rating="8.4"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum est libero quaerat ea animi obcaecati esse debitis omnis nam, doloribus quasi quas hic deserunt sapiente maiores soluta suscipit placeat quis. Laboriosam quasi possimus porro dolores maiores quas omnis consequuntur, temporibus, eius, dolore cumque a? Illo aut soluta aperiam excepturi."
      />

      <NetfilixSeries
        image="hl.jpeg"
        title="Hidden Love"
        rating="8.2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum est libero quaerat ea animi obcaecati esse debitis omnis nam, doloribus quasi quas hic deserunt sapiente maiores soluta suscipit placeat quis. Laboriosam quasi possimus porro dolores maiores quas omnis consequuntur, temporibus, eius, dolore cumque a? Illo aut soluta aperiam excepturi."
      />

      <NetfilixSeries
        image="hl.jpeg"
        title="Hidden Love"
        rating="8.2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum est libero quaerat ea animi obcaecati esse debitis omnis nam, doloribus quasi quas hic deserunt sapiente maiores soluta suscipit placeat quis. Laboriosam quasi possimus porro dolores maiores quas omnis consequuntur, temporibus, eius, dolore cumque a? Illo aut soluta aperiam excepturi."
      />

      <NetfilixSeries
        image="hl.jpeg"
        title="Hidden Love"
        rating="8.2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laborum est libero quaerat ea animi obcaecati esse debitis omnis nam, doloribus quasi quas hic deserunt sapiente maiores soluta suscipit placeat quis. Laboriosam quasi possimus porro dolores maiores quas omnis consequuntur, temporibus, eius, dolore cumque a? Illo aut soluta aperiam excepturi."
      />
      <Footer />
    </>
  );
};




export default App;
