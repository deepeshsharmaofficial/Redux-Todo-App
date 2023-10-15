import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

// initial state
const initialState = {
    notes: [
        {
            text: "This is the most used method present online. In this case, the parent div is assigned a position ‘relative’ while the child divs are assigned position ‘absolute’",
            createdOn: new Date()
        },

        {
            text: "Elements inside ‘absolute’ divs can be aligned in whatever way you want. Consider the following example. It shows all possible alignments a DOM element, in this case, buttons can have.",
            createdOn: new Date()
        },
    ]
}

export function noteReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        text: action.text,
                        createdOn: new Date()
                    }
                ]
            }
        case DELETE_NOTE:
            state.notes.splice(action.index, 1);
            return {
                ...state,
                notes: [...state.notes]
            }
        default:
            return state;
    }
}

