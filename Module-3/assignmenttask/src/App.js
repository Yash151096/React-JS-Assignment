import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>React JS</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{backgroundColor:"#61dafb", width:"100%", height:"100px", display:"flex", justifyContent:"center", alignItems:"center", color:"#000", fontSize:"50px", fontWeight:"600"}}>Hello World!!!</p>
            </header>
        </div>
    );
}

export default App;