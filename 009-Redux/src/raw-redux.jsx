// Importing createStore function from Redux

import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

// Action Types
const ADD_TASK = "task/add";  // Action type to add a task
const DELETE_TASK = "task/delete";  // Action type to delete a task
const FETCH_TASKS = "task/fetch"


// Initial state of the Redux store
const initialState = {
    task: [],  // Array to store tasks
    isLoading: false,  // Boolean flag to indicate loading state
};

// Reducer function to handle task-related actions
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            // Adding a new task to the task array
            return {
                ...state, 
                task: [...state.task, action.payload],  // Spread current tasks and add new task
            };

        case DELETE_TASK:
            // Removing a task by its index from the task array
            const updatedTask = state.task.filter((currTask, index) => {
                return index !== action.payload;  // Remove the task at the given index
            });
            return {
                ...state, 
                task: updatedTask,  // Return the updated task array
            };

        case FETCH_TASKS:
            return {
                ...state, task: [...state.task, ...action.payload]
            }

        default:
            // Return the current state if action type does not match
            return state;
    }
};

// Create Redux store with taskReducer
export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)) );

// Log the store object
// console.log(store);

// Log the initial state of the store
console.log("Initial state", store.getState());

// Uncomment these lines to test task addition and deletion directly

// ADD ITEM - Dispatching action to add a task
// store.dispatch({type: ADD_TASK, payload: "Buy Coffee"});
// console.log("Updated State AFTER BUY COFFEE", store.getState());

// ADD ITEM - Dispatching action to add another task
// store.dispatch({type: ADD_TASK, payload: "Buy Mango"});
// console.log("Updated State AFTER BUY MANGO", store.getState());

// DELETE ITEM - Dispatching action to delete a task by index (1)
store.dispatch({type: DELETE_TASK, payload: 1});
console.log("DELETED State", store.getState());

// Action Creators

// Function to create an action for adding a task
export const addTask = (data) => {
    return { type: ADD_TASK, payload: data };  // Return action object with type and payload
};

// Function to create an action for deleting a task by index
export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id };  // Return action object with type and task index
};

// Using action creators to dispatch actions

// ADD ITEM - Dispatching action using addTask creator
store.dispatch(addTask("BUY MANGO"));
store.dispatch(addTask("BUY TANG"));
store.dispatch(addTask("BUY Banana"));
store.dispatch(addTask("BUY Pen"));
store.dispatch(addTask("BUY Sneakers"));

// Log the updated state after adding tasks
console.log("Updated State WITH ACTION CREATOR (ADD)", store.getState());

// DELETE ITEM - Dispatching action using deleteTask creator
store.dispatch(deleteTask(0));  // Delete task at index 0

// Log the updated state after deleting the task
console.log("Updated State WITH ACTION CREATOR (DELETE)", store.getState());


export const fetchTasks = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3") 
            const task = await res.json()
            console.log(task)
            dispatch({type: FETCH_TASKS, payload: task.map((currTask) => currTask.title)})
        } catch (error) {
            console.log(error)
        }
    }
}


