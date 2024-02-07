import { useState } from 'react';


export const useCounter = (initialValue = 10) => {
    const [counter, setCount] = useState(initialValue);
    
    const increment = () => setCount(counter + 1);
    const decrement = () => setCount(counter - 1);
    const reset = () => setCount(initialValue);
    
    return { counter , increment, decrement, reset};
    };