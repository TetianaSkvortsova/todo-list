import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface AddTodoPayload {
    text: string;
    type: string;
}
export interface Todo {
    id: string;
    text: string;
    type: string;
}

interface TodoState {
    items: Todo[];
}

const initialState: TodoState = {
    items: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
            console.log('action.payload: ', action.payload);
            const newTodo: Todo = {
                id: Date.now().toString(),
                text: action.payload.text,
                type: action.payload.type,
            };
            state.items.push(newTodo);
        },
    },
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;