import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category';

class Category extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <div className="category">Category</div>
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


