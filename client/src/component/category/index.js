import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category';
import AppBar from 'material-ui/AppBar';

class Category extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <AppBar title="category" />
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

const mapDispatchToProps = {
    fetchCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)


