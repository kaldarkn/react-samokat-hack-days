import { Card, Paper, Stack, Typography } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

const DAY_NAME = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

const EventBox = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs(Date.now()));

  return (
    <Card sx={{ width: 500, height: 260, borderRadius: '16px', padding: '10px' }}>
      <Stack flexDirection="row" justifyContent="space-around" alignItems="stretch">
        <Stack width={350} paddingTop={2} spacing={1}>
          <Typography color="#FF335F" fontSize="18px" fontWeight="700">
            {date && DAY_NAME[date.day()]}
          </Typography>
          <Typography fontSize="28px" fontWeight="700">
            {date?.date()}
          </Typography>
          <Paper sx={{ backgroundColor: '#F8F9FC', paddingLeft: '8px' }}>
            <Typography color="#16615D" fontWeight="600">
              Совещание с командой
            </Typography>
            <Typography color="#16615D" fontWeight="600">
              15:00 - 17:30
            </Typography>
          </Paper>
          <Paper sx={{ backgroundColor: '#F8F9FC', paddingLeft: '8px' }}>
            <Typography color="#16615D" fontWeight="600">
              Встреча с руководством
            </Typography>
            <Typography color="#16615D" fontWeight="600">
              18:00 - 18:30
            </Typography>
          </Paper>
        </Stack>
        <DateCalendar value={date} onChange={(newValue) => setDate(newValue)} views={['day']} />
      </Stack>
    </Card>
  );
};

export { EventBox };
