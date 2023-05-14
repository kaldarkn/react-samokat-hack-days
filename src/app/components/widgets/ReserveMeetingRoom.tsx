import { Box, Button, Card, Paper, Stack, Typography } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const icon = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="21" height="21" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_27_606" transform="scale(0.0104167)" />
      </pattern>
      <image
        id="image0_27_606"
        width="96"
        height="96"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const ReserveMeetingRoom = () => {
  return (
    <Card sx={{ width: 350, height: 350, borderRadius: '16px', padding: '15px' }}>
      <Stack flexDirection="column" justifyContent="space-around" height="100%">
        <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
          <Stack flexDirection="row">
            {icon}
            <Typography component="div" marginLeft={1}>
              Переговорки
            </Typography>
          </Stack>
          <Button variant="text" sx={{ color: '#226965' }}>
            Перейти
          </Button>
        </Stack>
        <Box>
          <Paper sx={{ backgroundColor: '#F8F9FC', paddingLeft: '8px', marginTop: '12px' }}>
            <Typography color="#16615D" fontWeight="600">
              Встреча с руководством
            </Typography>
            <Typography color="#16615D" fontWeight="600">
              18:00 - 18:30
            </Typography>
          </Paper>
          <Paper sx={{ backgroundColor: '#F8F9FC', paddingLeft: '8px', marginTop: '12px' }}>
            <Typography color="#16615D" fontWeight="600">
              Встреча с руководством
            </Typography>
            <Typography color="#16615D" fontWeight="600">
              18:00 - 18:30
            </Typography>
          </Paper>
        </Box>

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ bottom: 0 }}>
          <Button variant="text" sx={{ color: '#226965' }} startIcon={<ControlPointIcon />}>
            Забронировать
          </Button>
          <Typography>Свободно 1/3</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export { ReserveMeetingRoom };
