
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Create from'./components/Create';
import Read from'./components/Read';
import Update from "./components/Update";
import Counter from "./components/Counter";


function App() {
  return (
    <Router>
      <div className="main">
        <div className="main-header">
          <div className="header-title">React Crud Application with Axios.</div>
          <div className="RouteWrapper">
            <div>
              <Route exact path="/Counter" component={Counter}/>
              <Route exact path="/Create" component={Create}/>
              <Route exact path="/Read" component={Read}/>
              <Route exact path="/Update" component={Update}/>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
