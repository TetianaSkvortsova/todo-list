import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type FilterType = 'all' | 'active' | 'completed';

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
    filter: FilterType;
}

const savedTodos = localStorage.getItem('todos');

const initialItems: Todo[] = savedTodos ? JSON.parse(savedTodos) : [];

const initialState: TodoState = {
    items: initialItems,
    filter: 'all',
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
        setFilter: (state, action: PayloadAction<FilterType>) => {
            state.filter = action.payload;
        },
    },
});

export const {addTodo, toggleTodo, setFilter} = todoSlice.actions;
export default todoSlice.reducer;