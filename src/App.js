import "./App.css";
import { MoodClicker, Counter, SignUpForm, DogDetail } from "./components";

function App() {
  return (
    <div className="App">
      <SignUpForm />
      <Counter />
      <MoodClicker />
      <DogDetail />
    </div>
  );
}

export default App;
