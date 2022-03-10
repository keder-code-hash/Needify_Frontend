import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,TextField } from '@mui/material';  
import RequirementsForm from './RequirementsForm';
 
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
    "padding-top": "1%",
    "padding-bottom": "6%"
}

const RequirementsElem=()=>{
    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row" style={style}>
                    <div className="col-12">
                        <RequirementsForm/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-12"> 
                        <RecentDetailsCard/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RequirementsElem