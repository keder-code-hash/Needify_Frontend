import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import {LockOutlinedIcon,UpdateOutlined} from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UpdateOutlined } from '@mui/icons-material';
import { orange } from '@mui/material/colors';

 
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const data={ 
    id : "XXXXX/XXXX/XXXXX",
    contact : {
        Address:"	C/O STATE OLYMPIC ASSOCIATION NETAJI STADIUM PORT BLAIR",
        City:"	PORT BLAIR",
        State:"	ANDAMAN & NICOBAR ISLANDS",
        Telephone:"	Not Available",
        MobileNo:"	8900946370",
        WebsiteUrl:"	Not Available",
        Email:"	sasipoly744(at)gmail[dot]com",
    },
    memberdetails : [
        {
            membername:"Ram Singh",
            position:"President",
            AadharDets:"XXXX XXXX XXXX XXXX"
        },
        {
            membername:"Ram Singh",
            position:"President",
            AadharDets:"XXXX XXXX XXXX XXXX"
        },
        {
            membername:"Ram Singh",
            position:"President",
            AadharDets:"XXXX XXXX XXXX XXXX"
        }
    ],
    registrationdetails: {
        RegisteredWith:"Registrar of Societies",
        TypeofNGO:"Registered Societies (Non-Government)",
        RegistrationNo:"1544",
        CopyofRegistrationCertificate:"Available",
        CopyofPanCard:"	Available",
        Actname:"SR ACT 1860",
        CityofRegistration:"PORT BLAIR",
        StateofRegistration:"ANDAMAN & NICOBAR ISLANDS",
        DateofRegistration:"26-12-2016",
    },
    achievements:[{
        name:"Prize",
        date:"12/23/2003"
    },{
        name:"Prize",
        date:"12/23/2003"
    }]
}
 
const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function DetailsUpdate() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({ 
      // email: data.get('email'),
      // password: data.get('password'),
    });
  };

  return (
    <React.Fragment>
      <div style={{ width: "100%" }}>
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <UpdateOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
                Contact Details Update
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth id="address" label="Address" name="text" autoComplete="text" autoFocus/>
              <TextField margin="normal" required fullWidth id="city" label="City" name="text" autoComplete="text" autoFocus/> 
              <TextField margin="normal" required fullWidth id="state" label="State" name="text" autoComplete="text" autoFocus/> 
              <TextField margin="normal" required fullWidth id="telephone" label="Telephone No." name="number" autoComplete="number" autoFocus/> 
              <TextField margin="normal" required fullWidth id="mobileno" label="Mobile No." name="number" autoComplete="number" autoFocus/> 
              <TextField margin="normal" required fullWidth id="website" label="Website URL." name="text" autoComplete="text" autoFocus/> 
              <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </Box>
          </Box> 
        </Container>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }}> 
              <DetailsUpdate/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export {DetailsUpdate,NestedList};