import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from '../component/main'
import Category from '../component/category'
import NotFound from '../component/notFound'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import withRoot from '../withRoot';
import { mailFolderListItems, otherMailFolderListItems } from '../common/menu'

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class Index extends Component {
    state = {
        left: false
    }

    toggleDrawer = (side, open) => {
        this.setState({
            [side]: open
        })
    }

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            onClick={this.toggleDrawer('left', true)}
                            color="inherit"
                            aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/categories" component={Category} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index));
