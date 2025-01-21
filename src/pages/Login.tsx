import React, { useState } from "react";
import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useNavigate } from "react-router-dom";

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
          <div>
            <input
              type="email"
              placeholder="Email, telefone ou Skype"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Entrar
          </button>
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
