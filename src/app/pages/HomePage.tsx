import { Grid } from '@mui/material';
import { ReserveMeetingRoom } from '../components/widgets/ReserveMeetingRoom/ReserveMeetingRoom';

const HomePage = () => {
  return (
    <>
      <Grid justifyContent="center" container spacing={{ md: 5, lg: 6, xl: 6 }}>
        <ReserveMeetingRoom />
        <ReserveMeetingRoom />
        <ReserveMeetingRoom />
      </Grid>
    </>
  );
};

export { HomePage };
