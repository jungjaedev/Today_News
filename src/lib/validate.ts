import uuid from 'react-uuid'
import { updateValidationAction } from '../data/manager';
import { updateIsLoginAction } from '../data/user';
import { store } from '../data/store';
import { getTokenWithExpireTime, setTokenWithExpireTime } from "../lib/local-storage"

interface userProps {
  account: string;
  password: string;
}

export const validateLogin = (user : userProps, handleModal: () => void) => {
  if(user.account === 'user' && user.password === 'user123') {
    handleModal();
    const token = uuid();
    store.dispatch(updateIsLoginAction(true));
    setTokenWithExpireTime("tokenWithExpireken", token, 60 * 60 * 1000);
  } else {
    store.dispatch(updateValidationAction(false));
  }
}

export const checkLogin = () => {
  const token = getTokenWithExpireTime("tokenWithExpireken");
  if(token) {
    store.dispatch(updateIsLoginAction(true));
  }
}

export const LogoutFunction = () => {
  store.dispatch(updateIsLoginAction(false));
  window.localStorage.removeItem("tokenWithExpireken");
  window.location.reload();
}

