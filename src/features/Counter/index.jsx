import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

function CounterFeature(props) {
    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action) // action creator
    }

    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action) // action creator
    }
    return (
        <div>
           Counter: {counter}

           <div>
            <button onClick={handleIncreaseClick}>Increase</button>
            <button onClick={handleDecreaseClick}>Decrease</button>
           </div>
        </div>
    );
}

export default CounterFeature;