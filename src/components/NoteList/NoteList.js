import "./NoteList.css";

function NoteList() {
  const notes=[];
  
  return (
    <div className="container">
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger">Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
