import { call, select, takeLatest } from 'redux-saga/effects'
import { LOGIN_SAGA } from './constant/constLogin'
import axios from 'axios'

function* useLogin(action) {
  // console.log(action);
  try {
    const { data, status } = yield call(() => {
      return axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signin',
        method: 'POST',
        data: action.useLogin,
      })
    })

    console.log(data);
    localStorage.setItem('eccess-token', data.content.accessToken)
    localStorage.setItem('USER_LOGIN', JSON.stringify(data.content))

    const navigate = yield select((state) => state.navigateSlice.navigate)

    // navigate('/')
  } catch (err) {
    console.log(err)
  }
}

export function* rootSaga() {
  yield takeLatest(LOGIN_SAGA, useLogin)
}
