// Libraries
import { 
  Routes, 
  Route 
} from 'react-router-dom';

// Components
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;