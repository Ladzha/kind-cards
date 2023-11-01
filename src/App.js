import './App.css';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <h1 className='main-title'>Send something nice to your friend</h1>
      <div className='cards-grid'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
