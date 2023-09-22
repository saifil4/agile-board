import './App.css';
import { DataProvider } from 'hooks/useData';

//importing components
import Main from './components/Main';


function App() {
  return (
    <DataProvider>
      <main className="wrapper">
        <Main />
      </main>
    </DataProvider>
  );
}

export default App;
