import './App.css';
import Login from './components/login'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className='holder'>
      <h1>Hi beautiful soul, signup or login to know the truth of life XD</h1>
      <Login />

    </div>
  );
}

export default App;
