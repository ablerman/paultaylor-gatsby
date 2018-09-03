import React from "react";
import PropTypes from "prop-types";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import { Link } from "gatsby"
// import { Link } from 'react-router-dom'

import menu from 'constants/menu';


const Menu = (props) => {

  const onButtonClick = () => {
    props.onMenuClick()
  }

  const generateList = (children) => {
    if(children.length) {
      return (
        <List dense={true}>
          {children.map(child => (
            <ListItem key={child.name}>
              <ListItemText>
                <Button
                  component={Link}
                  to={child.location}
                  // onClick={onButtonClick}
                >
                  {child.name}
                </Button>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      )
    }
  }

  const generateHeading = (item) => (
    <React.Fragment key={item.name}>
      <Typography>
        <Button
          component={Link}
          to={item.location}
          // onClick={onButtonClick}
        >
          {item.name}
        </Button>
      </Typography>
      {generateList(item.children)}
    </React.Fragment>
  )

  return (
    <div>
      {menu.map(item => generateHeading(item))}
    </div>
  );
};


Menu.defaultProps = {};

Menu.propTypes = {
  onMenuClick: PropTypes.func
};

export default Menu;
