import React from 'react';
import Login from './login';
import Detail from './detail';
import Home from './home';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Register from './register';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" exact strict component={Login} />
        <Route path="/" exact strict component={Login} />
        <Route path="/register" exact strict component={Register} />
        <Route path="/home" exact strict component={Home} />
        <Route path="/detail" exact strict component={Detail} />
      </div>
    </Router>

  );
}

export default App;
