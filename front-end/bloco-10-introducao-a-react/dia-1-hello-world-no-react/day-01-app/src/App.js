import './App.css';

function App() {

  const tasks = ['Café da manhã', 'Almoço' , 'Janta', 'Lanche'];

  const Task = (value) => {
    
    return (
      value.map((item) => <li>{item}</li>)
    );
  }

  return (
    <div>
      <ul>
        {Task(tasks)}
      </ul>
    </div>
  );
}

export default App;
