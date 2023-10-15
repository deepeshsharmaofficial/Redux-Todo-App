// action constants
const ADD_NOTE = "Add Note";
const DELETE_NOTE = "Delete Note";

// action creators
export const addNote = (text) => ({
    type: ADD_NOTE,
    text
});
export const deleteNote = (index) => ({
    type: DELETE_NOTE,
    index
});