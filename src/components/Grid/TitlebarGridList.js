import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
class TitlebarGridList extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { classes, addNew, removeOne, tileData } = this.props;
        return (
            <div className={classes.root}>
                <GridList cellHeight={180} className="list-group-flush">
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">
                            <Chip label="Món ăn" className={classes.chip} variant="outlined" />
                        </ListSubheader>
                    </GridListTile>
                    {tileData.map(tile => (
                        <GridListTile key={tile.id}>
                            <img src="assets/images/mon/mon_2.jpg" alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                // subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton className={classes.icon} onClick={() => removeOne(tile)}>
                                        <CloseIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
                <Grid
                    container
                    spacing={16}
                    className={classes.demo}
                    alignItems={"center"}
                    direction={"row"}
                    justify={"center"}
                >
                    <Grid key={"addButton"} item>
                        <Paper
                            className={classes.paper}
                            style={{ padding: 10 }}
                        >
                            <Button variant="contained" color="primary" className={classes.button} onClick={addNew}>
                                Primary
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
