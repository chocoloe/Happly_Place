import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import Entries from './Entries';
import Form from './Form';

class Journaling extends Component {
  state = {
    entries:[

    ]
  }

  removeEntry = index => {
    const { entries } = this.state

    this.setState({
      entries: entries.filter((entry, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = entry => {
    this.setState({ entries: [...this.state.entries, entry]})
  }

    render() {
      const { entries } = this.state;
        return ( 
          <div className = "Journaling">
            <h1 className="m-3" id="journalHead">Your Journal</h1> 
            <Alert className="ms-3 me-3" color="secondary">
              Something talking about the benefits of journaling and how it can help them understand their mental health better. Your journal entries are private and can only be read by you!
            </Alert>
            <Form handleSubmit={this.handleSubmit}/>
            <Entries entryData={entries} removeEntry={this.removeEntry}/>
          </div>
        );
    }
}

export default Journaling;