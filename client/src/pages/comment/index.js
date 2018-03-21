import React, { Component } from 'react'
import { Header, Icon, List } from 'semantic-ui-react'

class Comment extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        console.log("postId", id)
    }

    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='comment' circular />
                    <Header.Content>
                        Comment
                    </Header.Content>
                </Header>
                <List selection verticalAlign='middle'>
                </List>
            </div>
        )
    }
}

export default Comment