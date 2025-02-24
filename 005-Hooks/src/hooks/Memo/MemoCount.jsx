import  { memo, useRef } from 'react'


 const MemoCount = ({bioData}) => {
    const renderCount = useRef(0)
    console.log(renderCount)
  return (
    <div className="mt-3">
      <p> {bioData.name} </p>
        <p>
            Noting changed here but Ive now rendered:
            <span className='text-red-500'>   {renderCount.current++}  time(s) </span>
        </p>

    </div>
  )
}

export default memo(MemoCount)
