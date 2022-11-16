import './App.css';
import Login from './components/login'
import Logout from './components/logout'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <div>
        {!isAuthenticated && <h1>Homepage</h1>} <nav>let us consider this is a navbar</nav>
      </div>
      <div className='holder'>

        <h1>Hi beautiful soul, signup or login to know the truth of life XD</h1>
        {isAuthenticated ? <Logout /> : <Login />}
      </div>;
      <marquee width="30%" direction="left" height="100px">
        and this is a footer 🐱‍👤 @ninjaNirajan
      </marquee>
    </>
  );
}

export default App;
