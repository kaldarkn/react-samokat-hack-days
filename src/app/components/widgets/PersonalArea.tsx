import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { RootState } from '../../../redux/store';
import { setCurrentUser, userInfoInitialState } from '../../../redux/slices/currentUser/slice';

const PersonalArea = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => dispatch(setCurrentUser(userInfoInitialState));

  const { user } = useSelector((state: RootState) => state.currentUser);
  return (
    <Card sx={{ width: 355, height: 130 }}>
      <Stack flexDirection="row" justifyContent="flex-end">
        <div>
          <IconButton aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-around" alignItems="center">
        <Avatar alt={user.name} src={user.imgUrl} sx={{ width: 70, height: 70 }} />
        <CardContent>
          <Typography variant="h3" sx={{ color: '#16615D', fontSize: '10px' }}>
            {user.email}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: '22px' }}>
            {user.name}
          </Typography>
          <Typography variant="h3" sx={{ color: '#16615D', fontSize: '10px' }}>
            {user.jobTitle}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

export { PersonalArea };
