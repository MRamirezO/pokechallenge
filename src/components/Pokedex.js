import React, { Component } from 'react';
import Pokelist from './Pokelist';
import Pokedetails from './Pokedetails';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../Pokeball.svg';
import './styles/Pokedex.css';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Pokedex extends Component {

  constructor(){
    super();
    this.state = {
      pokemons : [],
      selectedPokemon : null
    };
    this.updatePokemon = this.updatePokemon.bind(this);
  }
  
  updatePokemon(url){
    axios.get(url)
    .then(response => {
      // handle success
      this.setState({
        selectedPokemon: response.data
      });
      console.log('updating pokemon');
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
      // handle success
      this.setState({
        pokemons: response.data.results
      });
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
    this.updatePokemon("https://pokeapi.co/api/v2/pokemon/1/");
  }

  

  render() {
    const { classes } = this.props;

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            PokeChallenge Zipdev
          </p>
          
        </header>

        <div className="Pokedex">
          <AppBar position="static">
            <Toolbar>
              <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={styles.grow}>
                Pokedex
              </Typography>
              
            </Toolbar>
          </AppBar>
          <div className="Pokelist">
            <Pokelist data={this.state.pokemons} updatePokemon={this.updatePokemon}/>
          </div>
          <div className="Pokedetails">
          {
            (!this.state.selectedPokemon)?(<div></div>):(<Pokedetails data={this.state.selectedPokemon} />)
          }
          </div>

        </div>

      </div>
    );
  }
}

export default Pokedex;
