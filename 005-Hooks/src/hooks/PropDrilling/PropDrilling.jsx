export const PropDrilling = () => {
    const data = "Sending data from Parent to Child Level 5";
  
    return (
      <div>
        <h1>Parent Component</h1>
        <Level4 parentData={data} />
       
      </div>
    );
  };
  
//   const Level1 = ({ parentData }) => {
//     return <Level2 parentData={parentData} />;
//   };
  
//   const Level2 = ({ parentData }) => {
//     return <Level3 parentData={parentData} />;
//   };
  
//   const Level3 = ({ parentData }) => {
//     return <Level4 parentData={parentData} />;
//   };
  
  const Level4 = ({ parentData }) => {
    return <ChildComponent parentData={parentData} />;
  };
  
  const ChildComponent = ({ parentData }) => {

    return <div>
        <h2>Child Component </h2>
        {parentData}</div>;
  };
  