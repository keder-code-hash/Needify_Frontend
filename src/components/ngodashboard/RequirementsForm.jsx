import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RequestPageOutlined } from '@mui/icons-material';
 
const theme = createTheme();

export default function RequirementsForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget); 
    console.log({
      email: data.get('requirements'),
      password: data.get('noofitems'),
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
            <RequestPageOutlined/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Requirements Forms
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> 
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="requirements"
                    label="Items Requirements"
                    name="requirements"
                    autoComplete="requirements"
                    autoFocus
                 />  
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="noofitems"
                    label="No of Items"
                    name="noofitems"
                    autoComplete="noofitems"
                    autoFocus
                /> 
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="issev"
                    label="Issue/Events"
                    name="issev"
                    autoComplete="issev"
                    autoFocus
                />  
                <br></br>
                <br></br>
                <TextField
                    id="date"
                    label="From Date"
                    type="date"
                    defaultValue="test"
                    sx={{ width: "100%" }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                /> 
                <br></br>
                <br></br>
                <TextField
                    id="date"
                    label="To Date"
                    type="date"
                    defaultValue="test"
                    sx={{ width: "100%" }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                /> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box> 
      </Container>
    </ThemeProvider>
  );
}