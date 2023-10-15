import { useState } from "react";
import "./NoteForm.css";

function NoteForm({ onCreateNote }) {
  const [NoteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateNote(NoteText);
    setNoteText("");
  };

  return (
    <div className="container">
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control mb-3"
            value={NoteText}
            placeholder="Write a Note!"
            onChange={(e) => setNoteText(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">Create Note</button>
      </form>
    </div>
  );
}

export default NoteForm;
