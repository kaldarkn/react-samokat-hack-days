import { Grid } from '@mui/material';
import { ReserveMeetingRoom } from '../components/widgets/ReserveMeetingRoom';
import { PersonalArea } from '../components/widgets/PersonalArea';

const HomePage = () => {
  return (
    <Grid container spacing={{ md: 5, lg: 6, xl: 6 }}>
      <ReserveMeetingRoom />
      <PersonalArea />
    </Grid>
  );
};

export { HomePage };
