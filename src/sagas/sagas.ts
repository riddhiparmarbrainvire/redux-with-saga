import { call, put, takeEvery } from "redux-saga/effects";
import { getUserData, isLoading } from "../slice/userSlice";

function* workGetUsersFetch(): any {
  const users: any = yield call(() =>
    fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
      response.json().then((data) => {
        return data;
      })
    )
  );

  yield put(getUserData(users));
}

function* mySaga() {
  yield takeEvery(isLoading, workGetUsersFetch);
}

export default mySaga;
