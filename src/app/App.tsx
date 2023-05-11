import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import { Badge } from '@mui/material';
import { Person } from '@mui/icons-material';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout title="React Samokat Hack Days" />}>
        <Route index element={
          <>
            <h1>Home</h1> 
            <Badge badgeContent={3} color="success">
              <Person color="action"/> 
            </Badge>
          </>
        } />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export { App };
