import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  AuthError,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "@/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const getErrorMessage = (errorCode: string) => {
  switch (errorCode) {
    case "auth/user-not-found":
      return "Usuário não encontrado.";
    case "auth/wrong-password":
      return "Senha incorreta.";
    case "auth/invalid-email":
      return "Email inválido.";
    case "auth/invalid-credential":
      return "Email ou senha inválidos.";
    default:
      return "Erro ao fazer login. Tente novamente.";
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redireciona para a página inicial
    } catch (err) {
      const errorCode = (err as AuthError).code;
      setError(getErrorMessage(errorCode));
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/"); // Redireciona para a página inicial
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div>
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Entrar
        </h2>
        <p className="text-center text-gray-600 mb-6">para continuar</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 mb-0 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="m-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-600 mb-0 text-sm">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="m-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="m-1 w-full py-3 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-5 mr-2" />
              Entrar com email
            </button>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-2 text-gray-500">ou</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="m-1 w-full py-3 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faGoogle} className="h-5 mr-2" />
              Entrar com Google
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <a href="/register" className="text-blue-600 hover:underline">
            Criar uma conta
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
