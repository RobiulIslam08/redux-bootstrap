import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state) => state.counter);

  const handleIncrement = (amount) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <h1>Counter With Redux</h1>
      <button onClick={()=> handleIncrement(1)}>Increment by one</button>
      <button onClick={()=> handleIncrement(5)}>Increment five</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
