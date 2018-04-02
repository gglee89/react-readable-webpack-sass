import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { addPosts } from '../../../actions/posts'
import { fetchCategories } from '../../../actions/categories'

class PostNew extends Component {
    state = {
        author: '',
        body: '',
        category: '',
        redirect: false,
        title: '',
    }

    componentDidMount() {
        this.props.fetchCategories()
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    onFormSubmit = () => {
        let postBody = {
            ...this.state,
            timestamp: Date.now()
        }
        this.props.addPosts(postBody)
        this.setState({
            ...this.state,
            redirect: true
        })
    }

    render() {
        const { author, body, category, redirect, title } = this.state
        const { categories } = this.props
        categories.length > 0 && categories.map(category => {
            category['key'] = category.name
            category['text'] = category.name
            category['value'] = category.name
        })
        if (redirect) {
            return <Redirect to='/posts' />;
        } else {
            return (
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} name='author' value={author} label='Author' placeholder='Author' onChange={this.handleChange} />
                        <Form.Field control={Input} name='title' value={title} label='Title' placeholder='Title' onChange={this.handleChange} />
                        {categories.length > 0 && <Form.Select fluid label='Category' options={categories} name='category' value={category} placeholder='Category' onChange={this.handleChange} />}
                    </Form.Group>
                    <Form.Field control={TextArea} label='Body' name='body' value={body} placeholder='Body content...' onChange={this.handleChange} />
                    <Form.Field control={Button}>Submit</Form.Field>
                </Form>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = {
    addPosts,
    fetchCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew)