import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Icon, List, Button, Dropdown } from 'semantic-ui-react'
import { fetchPosts } from '../../actions/posts'
import { listHeader, sort, sortLabel } from './Posts.css'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortKey: 'timestamp'
        }

        this.onSortChange = this.onSortChange.bind(this)
    }

    componentDidMount() {
        const { category } = this.props.match.params
        const { fetchPosts } = this.props
        fetchPosts(category);
    }

    onSortChange(e, data) {
        this.setState({
            sortKey: data.value
        })
    }

    render() {
        const { posts } = this.props
        const { sortKey } = this.state

        const sortOptions = [
            { key: 'timestamp', value: 'timestamp', text: 'Creation Date' },
            { key: 'voteScore', value: 'voteScore', text: 'Vote Score' },
        ]

        const customSort = (a, b) => {
            const { sortKey } = this.state;
            return a[sortKey] > b[sortKey] ? 1 : a[sortKey] < b[sortKey] ? -1 : 0
        }

        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='newspaper' circular />
                    <Header.Content>
                        All Posts
                    </Header.Content>
                </Header>
                <div className={listHeader}>
                    <div className={sort}>
                        <div className={sortLabel}>Sorted Ascendently By:</div>
                        <Dropdown defaultValue={sortKey} search selection options={sortOptions} onChange={this.onSortChange} />
                    </div>
                    <Link to='/post/new'>
                        <Button content='Add new post' primary />
                    </Link>
                </div>
                <List selection verticalAlign='middle'>
                    {
                        posts && posts.length > 0 && posts.sort(customSort).map((post, key) => {
                            let date = (new Date(post.timestamp));
                            return (
                                <List.Item key={key}>
                                    <List.Content>
                                        <Link to={`/posts/${post.id}`}>
                                            <List.Header>{post.title}</List.Header>
                                        </Link>
                                        <List.Description>{post.body}</List.Description>
                                        <List.Description>{post.author} - {date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()}</List.Description>
                                        <List.Description>Vote Score: {post.voteScore}</List.Description>
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
        posts: state.posts
    }
}

const mapDispatchToProps = {
    fetchPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)


