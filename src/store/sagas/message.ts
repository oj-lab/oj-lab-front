import { PayloadAction } from "@reduxjs/toolkit";
import {
  Message,
  addMessage,
  removeMessage,
  setMessageExiting,
} from "../slices/message";
import { put, takeEvery } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";

function* addMessageSaga(action: PayloadAction<Message>) {
  action.payload.id = action.payload.id || uuidv4();
  yield put(addMessage(action.payload));
  // Remove the message after the duration
  yield new Promise((resolve) => setTimeout(resolve, action.payload.duration));
  yield put(setMessageExiting(action.payload.id));
  yield new Promise((resolve) => setTimeout(resolve, 1000));
  yield put(removeMessage(action.payload.id));
}

export const ADD_MESSAGE_SAGA = "message/addMessage/saga";

export function* watchAddMessage() {
  yield takeEvery("message/addMessage/saga", addMessageSaga);
}
