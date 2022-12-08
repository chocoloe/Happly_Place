import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import Entries from './Entries';
import Form from './Form';
import NavBar from './NavBar.js';

class Journaling extends Component {
  state = {
    entries: []
  };

  // Hooks managing storage of journal entries
  componentDidMount() {
    const entries = localStorage.getItem('entries')
    if (entries) {
      this.setState({ entries: JSON.parse(entries) })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.entries !== this.state.entries) {
      localStorage.setItem('entries', JSON.stringify(this.state.entries))
    }
  }

  handleSubmit = entry => {
    this.setState({ entries: [...this.state.entries, entry]})
    localStorage.setItem('entries', JSON.stringify([...this.state.entries, entry]))
  }
  
  removeEntry = index => {
    const { entries } = this.state

    this.setState({
      entries: entries.filter((entry, i) => {
        return i !== index
      })
    })
  }

  render() {
    const { entries } = this.state;

    return ( 
      <div className = "Journaling">
        <header>
          <NavBar />
        </header>
        <h1 className="m-3" id="journalHead">Your Journal</h1> 
        <Alert className="ms-3 me-3" aria-label="informational" color="secondary">
          Journaling can help you better understand your mental health and gives you the opportunity to record your feelings privately. Remember, your journal entries are secure and can only be read by you!
        </Alert>
        <Form handleSubmit={this.handleSubmit}/>
        <Entries entryData={entries} removeEntry={this.removeEntry}/>
      </div>
    );
  }
}

export default Journaling;
