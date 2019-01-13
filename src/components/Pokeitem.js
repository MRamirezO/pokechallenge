import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';


const Pokeitem = ({name,url,updateDetails}) => {

    

  return (
        <ListItem button onClick={() => updateDetails(url)}>
            <ListItemIcon>
            <StarIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
            
        </ListItem>
        
        )
};


export default Pokeitem;