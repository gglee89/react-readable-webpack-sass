import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions/category'

import { Header, Icon, List } from 'semantic-ui-react'

class Category extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        const { category } = this.props;

        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='ordered list' circular />
                    <Header.Content>
                        All Categories
                    </Header.Content>
                </Header>
                <List selection verticalAlign='middle'>
                    {
                        category && category.length > 0 && category.map((category_item, key) => {
                            return (
                                <List.Item key={key}>
                                    <Link to={`${category_item.path}/posts`}>
                                        <List.Icon name="setting" size="large" verticalAlign='middle' />
                                    </Link>
                                    <List.Content>
                                        <List.Header>{category_item.name}</List.Header>
                                    </List.Content>
                                </List.Item>
                            )
                        })
                    }
                </List>
            </div>
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


