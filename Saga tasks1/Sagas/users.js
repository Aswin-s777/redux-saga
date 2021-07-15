import { GET_USERS, SET_USERS ,remove_data,Removedata,array2,data2} from "../reducer/action";
import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

export function* watchGetUsers(){
    console.log("Inside watchGetUsers");
    yield takeEvery(GET_USERS,workerGetUser);
    yield takeEvery(Removedata,Remove_data);
    yield takeEvery(array2,dataFetch);
}

export function* workerGetUser(){
    console.log("Inside workerGetUsers")
    const uri="https://jsonplaceholder.typicode.com/users";
    const result=yield call(axios.get,uri);
    console.log("data's",result.data)
    yield put({type: SET_USERS,value: result.data})
}
export function* dataFetch(){
    const url="https://jsonplaceholder.typicode.com/posts";
    const answer=yield call(axios.get,url)
    yield put({type: data2,value:answer.data})
}
export function* Remove_data()
{
    yield put({type:remove_data })
}