import {decrement, increment, incrementByAmount} from "./slices/counterSlice";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state: any) => state.counter.count);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-3 m-5">
      <h3 className="text-2xl font-bold">{count}</h3>
      <button
        className="w-full px-6 py-5 bg-green-500 text-white rounded-lg"
        onClick={() => dispatch(increment())}
      >
        Add
      </button>
      <button
        className="w-full px-6 py-5 bg-red-500 text-white rounded-lg"
        onClick={() => dispatch(decrement())}
      >
        Minus
      </button>
      <button
        className="w-full px-6 py-5 bg-green-500 text-white rounded-lg"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        AddByAmount
      </button>
    </div>
  );
}

export default App;
