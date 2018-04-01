import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, Icon, List, Segment } from 'semantic-ui-react'
import { fetchPost, updatePost } from '../../actions/post'
import { voteScore } from './Post.css'

class Post extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        const { fetchPost } = this.props
        fetchPost(id)
    }

    onVoteScoreClick(id, option = 'upVote') {
        this.props.updatePost(id, { option })
    }

    render() {
        const { post } = this.props;

        let date = (new Date(post.timestamp));

        console.log("post", post)

        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='newspaper' size="tiny" circular />
                    <Header.Content>
                        {post.title}
                    </Header.Content>
                    <Button><Icon name='pencil' size="tiny" /> Edit</Button>
                </Header>
                <Header sub><span>Author: {post.author}</span></Header>
                <Header sub>
                    <span className={voteScore}>Vote Score: {post.voteScore}</span>
                    <button onClick={() => this.onVoteScoreClick(post.id)}>+</button>
                    <button onClick={() => this.onVoteScoreClick(post.id, 'downVote')}>-</button>
                </Header>
                <Header sub><span>Comments: {post.commentCount}</span></Header>
                <Header sub><span>Date: {date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()}</span></Header>
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
    fetchPost,
    updatePost,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)