import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  panel: {
    breakInside: 'avoid',
    padding: '5px',
  },
  content: {
    padding: '10px',
    borderRadius: '10px',
    overflow: 'hidden',
  }
})

const MasonryPanel = (props) => {
  return (
    <div className={props.classes.panel}>
      <div className={props.classes.content}>
        {props.children}
      </div>
    </div>
  );
};


MasonryPanel.defaultProps = {};

MasonryPanel.propTypes = {};

export default withStyles(styles)(MasonryPanel);
