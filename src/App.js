import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/cake/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

const App = () => {
  return (
    <div className="App">
      {/* <CakeContainer />
      <HooksCakeContainer />
      <IcecreamContainer />
      <NewCakeContainer />
       */}
       {/* <UserContainer />
        */}
        Hello
    </div>
  );
}

export default App;
