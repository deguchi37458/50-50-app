import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import StarIcon from '@mui/icons-material/Star';
import CreateIcon from '@mui/icons-material/Create';
import InfoIcon from '@mui/icons-material/Info';

import "../assets/css/Nav.scss"

export const Nav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="nav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} component={Link} to="/"/>
        <BottomNavigationAction label="Ranking" icon={<StarIcon />} component={Link} to="/ranking"/>
        <BottomNavigationAction label="Create" icon={<CreateIcon />} component={Link} to="/create"/>
        <BottomNavigationAction label="Info" icon={<InfoIcon />} component={Link} to="/info"/>
      </BottomNavigation>
    </Box>
  );
}