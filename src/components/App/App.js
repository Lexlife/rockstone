import { SwipeTextArea } from '../SwipeTextArea/SwipeTextArea.js';
import { SwipeCurrentTime } from '../SwipeCurrentTime/SwipeCurrentTime.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <span className="TextArea">
        <SwipeTextArea />
      </span>
      <span className="CurrentTime">
        <SwipeCurrentTime />
      </span>
    </div>
  );
}

export default App;
