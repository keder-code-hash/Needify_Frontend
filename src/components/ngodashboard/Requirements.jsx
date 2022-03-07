import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'; 
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function SignIn() {
  const handSignInleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            REQUIREMENT
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="itemname"
              label="Item Name"
              name="itemname"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="itemcount"
              label="Item Count"
              type="itemcount"
              id="itemcount"
              autoComplete="number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="timespanfrom"
              label="Time From"
              type="timespanfrom"
              id="timespan"
              autoComplete="number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="timespanto"
              label="Time To"
              type="timespan"
              id="timespanto"
              autoComplete="number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="ngopurpose"
              label="WHY?"
              type="ngopurpose"
              id="ngopurpose"
              autoComplete="text"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
            //   label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT YOUR RESPONSE
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
// const id=[1,2,3,4];


function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

 

const id=[1,2,3,4]
 
function RecentDetailsCard(){

    const cardDiv=id.map((d)=>
        <div key={d.id} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div key={d} >
                <MultiActionAreaCard/>
            </div>
        </div>
    );  
    
    return(
        <div className="row">
            {cardDiv}
        </div>
    );
}

const style={
    "box-shadow": "10px 10px 8px #888888"
}

const RequirementsElem=()=>{
    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row" style={ style }>
                    <div className="col-12">
                        <RecentDetailsCard/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-12">
                        <SignIn/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RequirementsElem
