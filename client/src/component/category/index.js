import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category';
import CategoryList from './CategoryList';

class Category extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        const { category } = this.props;

        return (
            <CategoryList categories={category} />
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


