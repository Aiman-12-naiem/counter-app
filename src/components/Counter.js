import { useState } from "react";
const Counter= () => {
    const [count, setCount] = useState(1);
    const incrCount = () => {
        setCount(count + 1);
    };
    const decCount = () =>{
        if (count> 0){
            setCount(count - 1);
        }
    }
    return (
        <div className="mt-5 card-body">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button className="btn btn-success" onClick={incrCount}>+</button>
                <span className="btn btn-secondary">{count}</span>
                <button className="btn btn-primary" onClick={decCount}>-</button>
                <button className="btn btn-danger" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}
 
export default Counter;