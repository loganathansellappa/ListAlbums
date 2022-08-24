import Albums from './components/albums/Albums';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

/**
 * We really dont need to use React Router for current scope as we
 * dont have more pages, however I have added router so we could
 * easily extend the app when we have requirement to add more pages
 */
const App = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Albums />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default App;
