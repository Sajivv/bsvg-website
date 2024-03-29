import logo from './logo.svg';
import './App.css';

import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';

class App extends React.Component {

  render() {
    return ( 
      <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }

}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
