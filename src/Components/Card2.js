import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Card2(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Master Volume
        </Typography>
        <Typography varient="body2">
          Overrides all other sound setting in this application
        </Typography>
        <Slider
        defaultValue={props.volume}
        // getAriaValueText={()=>props.toggleVolume}
        aria-labelledby="discrete-slider-small-steps"
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={props.toggleVolume}
      />
      </CardContent>
    </Card>
  );
}