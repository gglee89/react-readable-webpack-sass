import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import DraftsIcon from 'material-ui-icons/Drafts'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

const CategoryList = (props) => {
    const { categories, classes } = props;

    return (
        <div className={classes.root}>
            <List component="nav">
                {
                    categories && categories.length > 0 && categories.map((category, key) => {
                        return (
                            <ListItem button>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary={category.name} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

CategoryList.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CategoryList)