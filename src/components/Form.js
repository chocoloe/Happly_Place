import React, { Component } from 'react'
import { Button, Input } from 'reactstrap';

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            body: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {title, body } = this.state;

        return (
            <div>
            <form className="ms-3 me-3 mb-3">
                <label className="ms-1" id="formLabel">Title</label>
                <Input 
                    className="mb-2 mt-1"
                    placeholder="Enter Journal Title"
                    type="text"
                    name="title"
                    id="enterTitle"
                    value={title}
                    onChange={this.handleChange}
                    maxLength={30}
                    />
                <label className="ms-1" id="formLabel">Entry</label>
                <Input 
                    className="mt-1"
                    placeholder="What's on your mind?"
                    type="textarea"
                    rows="10"
                    name="body"
                    id="enterBody"
                    value={body}
                    onChange={this.handleChange}
                    />
            </form>
            <Button className="ms-3" id="formButton" disabled={!this.state.title || !this.state.body} onClick={this.submitForm}>Submit</Button>
            </div>
        )
    }
}

export default Form;