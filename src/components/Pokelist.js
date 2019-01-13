import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Pokeitem from './Pokeitem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './styles/Pokelist.css';


const Pokelist = props => {

  const results = props.data;
  let pokemon = results.map(poke => 
    <Pokeitem name={poke.name} url={poke.url} updateDetails={props.updatePokemon}/>
    );

    return (
      <List component="nav">
        {pokemon}
      </List>
    );
  
}

export default Pokelist;