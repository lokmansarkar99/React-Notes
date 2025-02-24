
import {useMemo, useState} from 'react'
import  MemoCount  from './MemoCount'

export const ReactMemo = () => {
    const [count, setCount] = useState(0)
    const bioData = {
        name: "lokman",
        age: 22
    }

    const myBioData = useMemo(()=> {
        return bioData
    }, [])
  return (
    <div className='p-4 h-52 tracking-wider flex flex-col justify-end items-center'>
        ReactMemo
        <h1 > Count:  {count} </h1>
        <button onClick={()=> {setCount((pre) => { return pre + 1})}} className="btn bg-cyan-500 py-1 px-3 rounded-xl " >Increament</button>
        <MemoCount  bioData={myBioData} />
        </div>
  )
}

