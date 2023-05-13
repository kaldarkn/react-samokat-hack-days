import { all } from 'redux-saga/effects';
import { AuthWatcher } from './auth/sagas';

export function* rootSagaWatcher() {
  yield all([AuthWatcher()]);
}
