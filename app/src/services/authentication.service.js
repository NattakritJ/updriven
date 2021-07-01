import { setCookieBeforeAuth } from '../helpers/authHeader';
import Cookie from 'js-cookie';
const axios = require('axios');

export const authenService = {
    signin
}

function signin() {
    setCookieBeforeAuth();
    return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: `auth/login`,
          data: {
            username: 'hehe@he.hea',
            password: 'tata'
          },
          withCredentials: true,
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
}