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
    editingTodoId: string | null;
}

const savedTodos = localStorage.getItem('todos');

const initialItems: Todo[] = savedTodos ? JSON.parse(savedTodos) : [];

const initialState: TodoState = {
    items: initialItems,
    filter: 'all',
    editingTodoId: null,
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
        startEditing: (state, action: PayloadAction<string>) => {
            state.editingTodoId = action.payload;

        },
        cancelEditing: (state) => {
            state.editingTodoId = null;
        },
        updateTodo: (state, action: PayloadAction<{ id: string; text: string; }>) => {
            const todo = state.items.find((todo) => {
                return todo.id === action.payload.id;
            });
            if (todo) {
                todo.text = action.payload.text;
                state.editingTodoId = null;
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.items.splice(state.items.findIndex((item) => item.id === action.payload), 1);
        }
    },
});

export const {addTodo, toggleTodo, setFilter, startEditing, cancelEditing, updateTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;