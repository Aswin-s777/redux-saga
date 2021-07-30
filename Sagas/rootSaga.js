import { all } from "@redux-saga/core/effects";
import { watchGetUsers } from "./users";

export default function* rootSaga() {
  yield all([watchGetUsers()]);
}