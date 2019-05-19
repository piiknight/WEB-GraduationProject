import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
    button1: {
        fontFamily: "arial",
        width: 280,
        height: 132,
        textAlign: "center"
    },
    listTitle: {
        textAlign: "center"
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
        width: 280,
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
        this.state = {
            showButtonAdd: true,
            mon: ''
        }
    };

    handleButtonAdd = () => {
        const { addNew } = this.props;
        const { showButtonAdd } = this.state;
        addNew();
        this.setState({
            showButtonAdd: !showButtonAdd
        });
    };

    handleButtonDone = () => {
        const { removeOne } = this.props;
        removeOne();
        this.setState({
            showButtonAdd: true,
            mon: ''
        });
    };

    handleChange = event  => {
        console.log("dasdsa: " + JSON.stringify(event.target));
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes, addNew, removeOne, tileData } = this.props;
        const { showButtonAdd, mon } = this.state;
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
                            <img src="assets/images/mon/mon_1.jpg" alt={tile.name} />
                            <GridListTileBar className={classes.listTitle}
                                title={tile.name}
                                // subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton className={classes.icon} onClick={() => removeOne(tile)}>
                                        <CloseIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                    <GridListTile key={"default"}>
                        {showButtonAdd ?
                            (
                                <div>
                                    <Button variant="contained" color="primary" className={classes.button1}
                                            onClick={this.handleButtonAdd}
                                    >
                                        <AddIcon/>
                                    </Button>
                                    <GridListTileBar className={classes.listTitle} title={"Thêm mới"}/>
                                </div>
                            ) :
                            (
                                <div>
                                    <Button variant="contained" color="primary" className={classes.button1}
                                            onClick={this.handleButtonDone}
                                    >
                                        <DoneIcon/>
                                    </Button>
                                    <Select
                                        value={mon}
                                        onChange={this.handleChange}
                                        name="mon"
                                        displayEmpty
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="" disabled>
                                            Placeholder
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                            )
                        }
                    </GridListTile>
                </GridList>
            </div>
        );
    }
}

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
