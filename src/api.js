
import { post, get } from 'axios';

function tryLogin(email, password) {
    return post('https://reqres.in/api/login', { "email": email, "password": password })
}

function setToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function clearLocalStorage(key) {
    localStorage.removeItem(key)
}

function clearAllLocalstorageValues(ky) {
    localStorage.clear();
}

function getList(url) {
   return get(url);
}

export { tryLogin, setToLocalStorage, clearLocalStorage, getFromLocalStorage, clearAllLocalstorageValues, getList };