const ProfileCard = ({ name, age, greeting, children }) => {
  return (
    <>
      <h1> Name:{name} </h1>
      <h2> Age: {age} </h2>
      <h3> {greeting} </h3>
      <div>{children}</div>
    </>
  );
};

export default ProfileCard
