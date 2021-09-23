import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Signup from "./components/signup/Signup";
import Profile from "./components/profil/Profile"
import EspaceP from "./components/espacePro/EspaceP"
import LogPro from "./components/espacePro/LogPro"
import Nav from "./components/navbar/Nav";
import Conseils from "./components/conseilsPratiques/Conseils";
import Dashboread from "./components/dashboread/Dashboread";

function App() {
  return (
    <div >

      <Router>
         <Nav></Nav>
        <Switch>
         
          <Route exact path="/"component={Home} />
          <Route exact path="/conseils" component={Conseils}/>
          <Route exact path="/pro" component={EspaceP}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/loginpro" component={LogPro} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/dash" component={Dashboread}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
