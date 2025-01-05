
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state) => state.counter);

  const handleIncrement = (amount:number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
      <h1>Counter With Redux</h1>
      <Button  onClick={()=> handleIncrement(1)}>Increment by one</Button>
      <Button onClick={()=> handleIncrement(5)}>Increment five</Button>
      <div>{count}</div>
      <Button onClick={handleDecrement}>Decrement</Button>
      
    </>
  );
}

export default App;
