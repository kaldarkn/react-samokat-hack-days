import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { PersonalArea } from './widgets/PersonalArea';
import { EventBox } from './widgets/EventBox';

const Layout = () => {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Outlet />
        <Stack marginRight={4} spacing={2}>
          <PersonalArea />
          <EventBox />
        </Stack>
      </Stack>
    </Box>
  );
};

export { Layout };
