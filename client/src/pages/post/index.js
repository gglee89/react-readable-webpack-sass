import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Icon, List, Segment } from 'semantic-ui-react'
import { fetchPost } from '../../actions/post'

class Post extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        const { fetchPost } = this.props
        fetchPost(id)
    }

    render() {
        const { post } = this.props;

        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='newspaper' circular />
                    <Header.Content>
                        {post.title}
                    </Header.Content>
                </Header>
                <Header sub>{post.author}</Header>
                <Segment attached>
                    {post.body}
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.post,
    }
}

const mapDispatchToProps = {
    fetchPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)