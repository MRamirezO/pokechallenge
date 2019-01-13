import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const Pokedetails = props => {

  const selected = props.data;

  const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
}

    return (
        <Card>
        <CardActionArea>
          <CardMedia
            style = {styles}
            image={selected.sprites.front_default}
            title={selected.name}
          />
          <img src={selected.sprites.front_default} alt={selected.name}></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {selected.name}
            </Typography>
            <Typography component="p">
              Types: {selected.types.map(type => type.type.name + ' ')}
            </Typography>
            <Typography component="p">
              Height: {selected.height}
            </Typography>
            <Typography component="p">
              Weight: {selected.weight}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  
}

export default Pokedetails;