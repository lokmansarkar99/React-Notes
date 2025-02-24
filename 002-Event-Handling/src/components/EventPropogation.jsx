
const EventPropogation = () => {
  const handleGrandParent = () => { console.log('Grand Parent') }
  const handleParentClick = (event) => {
    console.log('Parent Clicked')
    // event.stopPropagation()
   }
  const handleChildClick = (event) => {
    console.log(event)
    // event.stopPropagation()
    console.log('Child Clicked')
  }
  return (
    <section>
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}> Child Div</button>
      </div>
      </div>
</section>
  )
}

export default EventPropogation
