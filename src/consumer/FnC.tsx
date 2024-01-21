import { useContext } from "react";
import LocalContext from '../context';

export default function FnC() {
  const state = useContext<any>(LocalContext);
  return (
    <div>
      useContext: {state.title}
      <button onClick={() => state.setCount((v: number) => v + 1)}>Click</button>
      { state.count }
    </div>
  );
}