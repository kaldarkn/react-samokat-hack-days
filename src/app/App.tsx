import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout title="React Samokat Hack Days" />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export { App };
