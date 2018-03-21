import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category';

import { List } from 'semantic-ui-react'

class Category extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        const { category } = this.props;

        console.log(category);

        return (
            <List selection verticalAlign='middle'>
                {
                    category && category.length > 0 && category.map((category_item, key) => {
                        return (
                            <List.Item key={key}>
                                <List.Icon name="setting" size="large" verticalAlign='middle' />
                                <List.Content>
                                    <List.Header>{category_item.name}</List.Header>
                                </List.Content>
                            </List.Item>
                        )
                    })
                }
            </List>
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


