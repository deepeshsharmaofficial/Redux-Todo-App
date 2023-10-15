import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

function NoteList() {
  const notes= useSelector(state => state.noteReducer.notes);
  const dispatch = useDispatch();

  return (
    <>
    <ol className="list-group list-group-numbered">
      {notes.map((note, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-start">

          <div class="ms-2 me-auto">
            <div>
              <span>{note.text}</span>
            </div>
            <span className='badge bg-success rounded-pill mt-2'>{note.createdOn.toLocaleDateString()}</span>
          </div>
        
          <button className="btn btn-danger" onClick={() => dispatch(deleteNote(index))}>Delete</button>
        </li>
      ))}
    </ol>
    </>
  );
}

export default NoteList;