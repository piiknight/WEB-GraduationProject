import React from "react";
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/icons/Add";

import withStyles from "@material-ui/core/styles/withStyles";

const style = () => ({
  fab: {
    position: "fixed",
    bottom: 65,
    right: 100
  }
});

const FabButton = props => {
  const { classes } = props;
  return (
    <Button
      onClick={props.onClick}
      variant="fab"
      className={classes.fab}
      color={"primary"}
    >
      <AddIcon />
    </Button>
  );
};

export default withStyles(style)(FabButton);
