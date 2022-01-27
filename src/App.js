import logo from './logo.svg';
import './App.css';

// Components


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <p className='logo'>Tasker</p>
        </nav>
      </header>
      <section>
        <div className='container'>
          <form>
            <input
              type='text'
              name='task'
              className='taskInput'
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
