import React from 'react'
import { createReducer, createAction } from "@reduxjs/toolkit"
import { TodoType } from '../types/Todo'
import { initialTodo } from '../const/TodoConst';

const initialValue = {
    todoList: initialTodo
};

export const addTodo = createAction<TodoType>("todo/addTodo");

export const updateTodo = createAction<TodoType>("todo/updateTodo");

export const deleteTodo = createAction<TodoType>("todo/deleteTodo");

export const deleteAllTodo = createAction("todo/deleteAllTodo");

export const updateCompleted = createAction<TodoType>("completed/updateCompleted");

export const todoReducer = createReducer(initialValue, builder => {
    builder
    .addCase(addTodo, (state, action) => {
        const todo = action.payload;
        state.todoList.push(todo);
    })
    .addCase(updateTodo, (state, action) => {
        const todoWithUpdateTitle = action.payload;
        state.todoList.map(todo => {if(todo.id == todoWithUpdateTitle.id) {
            todo.title = todoWithUpdateTitle.title;
        }})
    })
    .addCase(deleteTodo, (state, action) => {
        const deleteTodo = action.payload;
        state.todoList = state.todoList.filter(todo => {return todo.id != deleteTodo.id});
    })
    .addCase(updateCompleted, (state, action) => {
        const todoWithCompleted = action.payload;
        state.todoList.map(todo => {
            if(todo.id == todoWithCompleted.id) {
                todo.completed = todoWithCompleted.completed;
            }
        })
    })
    .addCase(deleteAllTodo, (state, action) => {
        state.todoList = [];
    })
})