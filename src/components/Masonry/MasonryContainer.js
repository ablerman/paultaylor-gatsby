import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  masonryContainer: {
    [theme.breakpoints.up('md')] : {
      columnCount: 2,
    },

    // columnCount: 2,
    columnGap: 0
  }
})

const MasonryContainer = (props) => {
  return (
    <div className={props.classes.masonryContainer}>
      {props.children}
    </div>
  );
};


MasonryContainer.defaultProps = {};

MasonryContainer.propTypes = {};

export default withStyles(styles)(MasonryContainer);
