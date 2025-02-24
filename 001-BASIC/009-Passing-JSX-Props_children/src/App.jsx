import ProfileCard from "./ProfileCard"
function App() {


  return (
    <>
      <ProfileCard name="Alice" age={`30`} greeting={<div><strong>Hello Alice, great work</strong>  </div>} >
        
    <button>Hello Children</button>
    <h1>Hi Children</h1>
      </ProfileCard>

    </>
  )
}

export default App
