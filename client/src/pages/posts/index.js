import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Icon, List } from 'semantic-ui-react'
import { fetchPosts } from '../../actions/posts'

class Posts extends Component {

    componentDidMount() {
        const { category } = this.props.match.params
        const { fetchPosts } = this.props
        fetchPosts(category);
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='newspaper' circular />
                    <Header.Content>
                        All Posts
                    </Header.Content>
                </Header>
                <List selection verticalAlign='middle'>
                    {
                        posts && posts.length > 0 && posts.map((post, key) => {
                            let date = (new Date(post.timestamp));
                            return (
                                <List.Item key={key}>
                                    <List.Content>
                                        <Link to={`/posts/${post.id}`}>
                                            <List.Header>{post.title}</List.Header>
                                        </Link>
                                        <List.Description>{post.body}</List.Description>
                                        <List.Description>{post.author} - {date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()}</List.Description>
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


