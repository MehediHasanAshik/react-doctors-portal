import { Grid } from '@mui/material';
import * as React from 'react';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={4}>
              <Calender
                date={date}
                setDate={setDate} />
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <Appointments date={date} />
            </Grid>
          </Grid>
        </div>
    );
};

export default DashBoardHome;