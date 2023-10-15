import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions/noteActions";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNoteText("");
    dispatch(addNote(noteText));
  };

  return (
    <div className="container">
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control mb-3"
            value={noteText}
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
