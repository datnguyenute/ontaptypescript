import { TODO_ADD, TODO_EDIT, TODO_EDIT_CHANGE, TODO_INPUT, TODO_REMOVE } from "./constants";

export const todoInput = (payload) => {
  return {
    type: TODO_INPUT,
    payload,
  };
};
export const todoAdd = (payload) => {
  return {
    type: TODO_ADD,
    payload,
  };
};
export const todoRemove = (payload) => {
  return {
    type: TODO_REMOVE,
    payload,
  };
};
export const todoEdit = (payload) => {
  return {
    type: TODO_EDIT,
    payload,
  };
};
export const todoEditChange = (payload) => {
  return {
    type: TODO_EDIT_CHANGE,
    payload,
  };
};
