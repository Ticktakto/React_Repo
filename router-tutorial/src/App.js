import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return(
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">profile</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
      
      <Route
      // path 따로 지정하지 않으면 모든 상황에 렌더링 되는 Route
      render={({location}) => (
        <div>
          <h2>이 페이지는 존재하지 않습니다.</h2>
          <p>{location.pathname}</p>
        </div>
      )}
      />
      </Switch>
      
    </div>
  )
}
export default App;

