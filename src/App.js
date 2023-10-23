import logo from './logo.svg';
import './App.css';
import FirstComponent from './part1/FirstComponent';
import NamedComponent from './part1/NamedComponent';
import Tweet from './part2/Tweet';
import Person from './part3/Person';

function App() {
  return (
    <div>
      <FirstComponent/>
      <NamedComponent name="Theara"/>

      <Tweet username="tya" name="Theara" date="today" message="Hello"></Tweet>
      <Tweet username="tya" name="Theara" date="today" message="World"></Tweet>
      <Tweet username="tya" name="Theara" date="today" message="!!!!!"></Tweet>

      <Person name="Theara" age={30} hobbies={["Coding", "Gaming", "Racing"]} />
      <Person name="AliceAlice" age={18} hobbies={[]} />
    </div>
  );
}

export default App;
