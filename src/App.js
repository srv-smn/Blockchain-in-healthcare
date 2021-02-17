import './App.css';
import Login from './utils/Containers/Login/Login'
import Footer from './utils/Components/Footer/Footer'
import Header from './utils/Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
