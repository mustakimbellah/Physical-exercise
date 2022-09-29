
import './App.css';
import Gym from './components/Gym/Gym';
import Header from './components/Header/Header';
import Question from './components/Question/Question';

function App() {
  return (
    <div>
      <Header></Header>
      <h1>Select Today Exercise</h1>
      <Gym></Gym>
      <Question></Question>
    </div>
  );
}

export default App;
