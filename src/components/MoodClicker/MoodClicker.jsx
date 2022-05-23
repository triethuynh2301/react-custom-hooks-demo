// import useToggleState from "../../hooks/useToggleState";
import { useBoolean } from "usehooks-ts";

// SECTION - custom hook
// const MoodClicker = () => {
//   const [isHappy, toggleIsHappy] = useToggleState(true);

//   return (
//     <div>
//       <h1>{isHappy ? "Happy" : "Sad"}</h1>
//       <button onClick={toggleIsHappy}>Change Mood</button>
//     </div>
//   );
// };

// SECTION - usehook-ts library
const MoodClicker = () => {
  const { value: isHappy, toggle: toggleMood } = useBoolean(true);

  return (
    <div>
      <h1>{isHappy ? "Happy" : "Sad"}</h1>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default MoodClicker;
