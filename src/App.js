
import './App.scss';
import { Main } from './component/Main';
import { DataProvider } from './context/todosContext';

function App() {
  return (
    <>
      <DataProvider>
        <Main />
      </DataProvider>
    </>
  );
}

export default App;
