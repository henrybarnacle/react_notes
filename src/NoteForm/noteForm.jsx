import React, { Component } from 'react';
import './noteForm.css';

class NoteForm extends Component {
	constructor(props) {
	super(props);
	this.state = {
		newNoteContent: '',
		};

		this.handleUserInput = this.handleUserInput.bind(this);

	}

	// when the input changes, set the newNoteContent to the value of what's in the input box

handleUserInput(e) {
	this.setState({
		newNoteContent: e.target.value,
	})
}



	render() {
	return (

		<div className="formWrapper">
			<input className="noteInput" placeHolder="Write a new note..." 
			value={this.state.newNoteContent} />
			<button className="noteButton">Add Note </button>
		</div>


	)
	}
} 

export default NoteForm;