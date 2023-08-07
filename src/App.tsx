import './App.css';
import Grumpus from './components/Grumpus';

function App() {

  const grumpuses = [
    "wambus",
    "shelda",
    "snorpy",
    "triffany",
    "cromdo",
    "filbo",
    "wiggle",
    "floofty",
    "beffica",
    "gramble",
    "chandlo",
  ];

  return (
    <>
      {grumpuses.map((grumpus => { return <Grumpus img={`/grumpuses/${grumpus}.png`} />; }))}
    </>
  );
}

export default App;
