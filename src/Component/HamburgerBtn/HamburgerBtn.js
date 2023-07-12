import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import style from './HamburgerBtn.module.css';
import {Accordion1, Accordion2, Accordion3, Accordion4, Accordion5, Accordion6} from '../Accordion/Accordion';

export default function HamburgerBtn() {

  const [state, setState] = React.useState({
    right: false,
  });



  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation">
      <List
        className={style.opt}
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '30px',
          height: '100vh',
        }}
      >
        <h1>
          Menu
          <button className={style.closeButton} onClick={toggleDrawer(anchor, false)}>
          <RxCross2 />
          </button>
        </h1>
        <Accordion1/>
        <Accordion2/>
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{color:"white",fontSize:"20px"}}><GiHamburgerMenu/></Button>

          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
