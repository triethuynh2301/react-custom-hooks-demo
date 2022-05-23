// import useLocalStorageState from "../hooks/useLocalStorageState";
import { useLocalStorage } from "usehooks-ts";

// SECTION - custom hook useLocalStorageState
// const Counter = () => {
//   const [count, setCount] = useLocalStorageState("count", 0);

//   const handleClick = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Add +1 to count</button>
//     </div>
//   );
// };

// SECTION - usehook-ts
const Counter = () => {
  const [count, setCount] = useLocalStorage("count", 0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Add +1 to count</button>
    </div>
  );
};

export default Counter;
