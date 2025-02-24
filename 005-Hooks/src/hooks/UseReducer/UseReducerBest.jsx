import { useReducer } from "react";

export const UseReducerBest = () => {
    
    const reducer = (state, action) => {
        console.log(state, action)
        switch (action.type) {
            case "INCREMENT":
                return {
                    ...state,
                    count: state.count + 1 };
            case "DECREMENT":
                return { count: state.count - 1 };
            case "RESET":
                return { count: 0 };
            default:
                return state;
        }

        
    };

    const initialState = { count: 0, inc: 2, dec: 2 };
    
    const [state, dispatch] = useReducer(reducer, initialState);
    

    return (
        <div className="container p-6 mx-auto text-center">
            <h1 className="text-3xl underline text-blue-400 mb-2">Hello UseReducer</h1>
            <h1 className="text-3xl text-blue-400"> Count is: {state.count}</h1>
            <div>
                <button
                    onClick={() => dispatch({ type: "INCREMENT" })}
                    className="text-white px-6 py-2 m-4 bg-blue-400 hover:bg-blue-500 rounded-xl transition-all"
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch({ type: "DECREMENT" })}
                    className="text-white px-6 py-2 m-4 bg-red-400 hover:bg-red-500 rounded-xl transition-all"
                >
                    Decrement
                </button>
                <button
                    onClick={() => dispatch({ type: "RESET" })}
                    className="text-white px-6 py-2 m-4 bg-green-400 hover:bg-green-500 rounded-xl transition-all"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};
