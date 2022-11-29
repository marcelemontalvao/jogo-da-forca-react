import palavras from '../../palavras';
import Game from '../Game/Game';
import Lyrics from '../Lyrics/Lyrics';
import Shot from '../shot/Shot';
import "../../css/reset.css"

function App() {
  return (
    <div className="App">
      <Game />
      <Lyrics />
      <Shot />
    </div>
  );
}

export default App;
