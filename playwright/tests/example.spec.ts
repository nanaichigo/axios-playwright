import { test, expect } from '@playwright/test';

import axios from 'axios';


test('login', async ({  }) => {
  const username = "admin";
  const password = "password";

  const body = {
    username: username,
    password: password
  }

  const endpoint = 'http://127.0.0.1:5000/login';
  const repponse = await axios.post(endpoint, body);

  await expect(repponse.status).toBe(200);
  await expect(repponse.data).toBe("Success");

});

test('wrong password', async ({  }) => {
  const username = "admin";
  const password = "password1";

  const body = {
    username: username,
    password: password
  }

  const endpoint = 'http://127.0.0.1:5000/login';
  try{
    const response = await axios.post(endpoint, body);
  }catch(exception){
    await expect(exception.response.status).toBe(401);
    await expect(exception.response.data).toBe("Failed");
  }
});

test('not found user', async ({  }) => {
  const username = "admin1";
  const password = "password1";

  const body = {
    username: username,
    password: password
  }

  const endpoint = 'http://127.0.0.1:5000/login';
  try{
    const response = await axios.post(endpoint, body);
  }catch(exception){
    await expect(exception.response.status).toBe(403);
    await expect(exception.response.data).toBe("Failed");
  }
});