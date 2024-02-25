import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./features/counterSlice";

export default function Counter() {
  // I need to access the state stored in the counter slice
  const count = useSelector((store) => store.counter);

  // I need to dispatch the correct action to the store
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}
