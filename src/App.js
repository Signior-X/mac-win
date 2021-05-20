import './App.css';
import AppFooter from './AppFooter';

import AppHeader from "./AppHeader";

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/img/wall3.jpg'})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      {/* Navigation header */}
      <AppHeader />

      {/* Main Opening block */}
      <main>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>

      {/* Dock */}
      <AppFooter />
    </div>
  );
}

export default App;
