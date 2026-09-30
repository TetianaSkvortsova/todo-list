import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface AddTodoPayload {
    text: string;
    type: string;
    completed: boolean;
}

export interface Todo {
    id: string;
    text: string;
    type: string;
    completed: boolean;
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
            const newTodo: Todo = {
                id: Date.now().toString(),
                text: action.payload.text,
                type: action.payload.type,
                completed: action.payload.completed,
            };
            state.items.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.items.find((item) => {
                return item.id === action.payload;
            })
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const {addTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;