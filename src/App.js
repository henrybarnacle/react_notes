import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/note';
import NoteForm from './NoteForm/noteForm';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

//the React state of component

    this.state = {
      notes: [
        {id: 1, noteContent: "Note 1 here!"},
        {id: 2, noteContent: "Note 2 here!"}
      ],
    }
  }
  render() {

    return (
<div className="notesWrapper">
  <div className="notesHeader">
    <div className="heading">React and Firebase todos</div>
    </div>
    <div className="notesBody">
    {
      this.state.notes.map((note) => {
        return (
        <Note noteContent={note.noteContent} noteId={note.Id} key={note.Id} />
        )
      })
    }
    
    </div>
    
     <div className="notesFooter">
      <NoteForm/>
    </div>
    
    
  </div>
    );
  }
}

export default App;
