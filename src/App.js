import logo from './logo.svg';
import './App.css';

function DockItem(props) {
  return (
    <div className="item">
      <img src={props.url} />
    </div>
  )
}

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/img/wall3.jpg'})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      {/* Navigation header */}
      <header className="App-header">
        <div className="left">
          <div className="option">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="option">File</div>
          <div className="option">Edit</div>
          <div className="option">View</div>
          <div className="option">Go</div>
        </div>
        <div className="right">
          <div className="option">
            <img src="img/arrow-down.png" style={{ width: "20px" }} />
          </div>
          <div className="option">
            <div class="battery">
              <div class="body">
                <div class="charging"></div>
              </div>
              <div class="terminal"></div>
            </div>
          </div>
          <div className="option">12:00 AM</div>
        </div>
      </header>

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
      <footer>
        <dock>
          <DockItem url="/logos/Excel_64x64.svg" />
          <DockItem url="/logos/Word_64x64.svg" />
          <DockItem url="/logos/OneDrive_64x64.svg" />
          <DockItem url="/logos/OneNote_64x64.svg" />
          <DockItem url="/logos/PowerPoint_64x64.svg" />
          <DockItem url="/logos/Skype_64x64.svg" />
          
        </dock>
      </footer>
    </div>
  );
}

export default App;
