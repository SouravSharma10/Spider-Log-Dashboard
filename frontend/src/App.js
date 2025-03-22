import './App.css';
import LogViewer from './components/LogViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Log Viewer Dashboard</h1>
        <LogViewer spiderName="spider1" />
      </header>
    </div>
  );
}

export default App;
