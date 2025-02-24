import {useMemo, useState} from 'react'


export const ExpensiveCalculation = () => {
    const sum = () => {
        console.log("calculating sum...")
        let i = 0
        for (i = 0; i <= 1000000000; i++) {
            i = i + 1
        }
        return i
    }
    // const total = sum()

    const total = useMemo(()=> {
        
        return sum()
    }, [])

  return (
    <div>
        <p>sum:  {total} </p>
    </div>
  )
}



export const MemoParentComponent = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='p-4 h-52 tracking-wider flex flex-col justify-end items-center'>
            <ExpensiveCalculation />
            <button onClick={()=> {setCount((pre) => { return pre + 1})}} className="btn bg-cyan-500 py-1 px-3 rounded-xl " >re render parent</button>
            <p>parent re render {count}</p>



        </div>
    )
}

