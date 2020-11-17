import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
  root: {
    width: 290,
    minHeight: 250,
    marginLeft: 10,
    marginRight:10,
    marginTop:10,
    float: "left"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
  },
  button:{
      marginTop: 90
  }
});

function Restaurant(props){
  const [showMoreInd, setShowMoreInd] = useState(false);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.restaurent.Stars} Star
        </Typography>
        <Typography variant="h5" component="h2">
        {props.restaurent.Brand} 
        </Typography>
        {showMoreInd && <div>
        <Typography variant="h5" color="textSecondary">
        {props.restaurent.Country}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.restaurent["Top Ten"]}
        </Typography>
        <Typography variant="body2" component="p">
        {props.restaurent.Variety}
        </Typography>
        </div>}
      </CardContent>
      <CardActions >
          {showMoreInd ?
          <Button variant="contained" color="secondary" size="small" onClick={() => setShowMoreInd(false)}>Show less</Button>:
          <Button className={classes.button} variant="outlined" color="secondary" size="small" onClick={() => setShowMoreInd(true)}>Show more</Button>}
      </CardActions>
    </Card>
  );
}
export default Restaurant;
