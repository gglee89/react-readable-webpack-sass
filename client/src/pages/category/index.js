import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions/categories'

import { Header, Icon, List } from 'semantic-ui-react'

class Category extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        const { categories } = this.props;

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
                        categories && categories.length > 0 && categories.map((category, key) => {
                            return (
                                <List.Item key={key}>
                                    <Link to={`${category.path}/posts`}>
                                        <List.Icon name="setting" size="large" verticalAlign='middle' />
                                    </Link>
                                    <List.Content>
                                        <List.Header>{category.name}</List.Header>
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
        categories: state.categories
    }
}

const mapDispatchToProps = {
    fetchCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)


