import axios from "axios";

import { API_KEY, BASE_URL } from "../secrets";

const signIn = async (nome, password) => {
  try {
    await axios.post(`${BASE_URL}signInWithPassword?key=${API_KEY}`, {
      nome,
      password,
      returnSecureToken: true,
    });
  } catch (error) {
    if (error.response.data.error.message === "INVALID_LOGIN_CREDENTIALS") {
      throw Error("Usuário/Senha inválidos");
    }
  }
};

const signUp = async (displayName, nome, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}signUp?key=${API_KEY}`, {
      nome,
      email,
      password,
      returnSecureToken: true,
    });
    await update(response.data.idToken, displayName);
  } catch (error) {
    if (error.response.data.error.message === "EMAIL_EXISTS") {
      throw Error("Usuário já cadastrado");
    }
  }
};

const update = async (idToken, displayName) => {
  try {
    await axios.post(`${BASE_URL}update?key=${API_KEY}`, {
      idToken,
      displayName,
      returnSecureToken: true,
    });
  } catch (error) {
    if (error.response.data.error.message === "EMAIL_EXISTS") {
      throw Error("Usuário já cadastrado");
    }
  }
};

export { signIn, signUp, update };
