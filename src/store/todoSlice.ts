import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "./index.ts";

export type FilterType = 'all' | 'active' | 'completed';

interface AddTodoPayload {
    text: string;
    type: string;
    createdAt: string;
    completed: boolean;
}

export interface Todo {
    id: string;
    text: string;
    type: string;
    createdAt: string;
    completed: boolean;
}

interface TodoState {
    items: Todo[];
    filter: FilterType;
    editingTodoId: string | null;
    searchQuery: string;
}

const savedTodos = localStorage.getItem('todos');

const initialItems: Todo[] = savedTodos ? JSON.parse(savedTodos) : [];

const initialState: TodoState = {
    items: initialItems,
    filter: 'all',
    editingTodoId: null,
    searchQuery: '',
};

export const selectFilteredTodos = (state: RootState) => {
    const {items, filter, searchQuery} = state.todos;

    return items.filter((todo) => {
        const matchesFilter =
            filter === 'all' ||
            (filter === 'active' && !todo.completed) ||
            (filter === 'completed' && todo.completed);

        const matchesSearch = todo.text
            .toLowerCase()
            .includes(searchQuery.toLowerCase().trim());

        return matchesFilter && matchesSearch;
    })
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
            const newTodo: Todo = {
                id: Date.now().toString(),
                text: action.payload.text,
                type: action.payload.type,
                createdAt: action.payload.createdAt,
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
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
});

export const {
    addTodo,
    toggleTodo,
    setFilter,
    startEditing,
    cancelEditing,
    updateTodo,
    deleteTodo,
    setSearchQuery,
} = todoSlice.actions;
export default todoSlice.reducer;