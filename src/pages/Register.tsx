import React, { useState } from "react";
import { createUserWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const getErrorMessage = (errorCode: string) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "Este email já está cadastrado.";
    case "auth/invalid-email":
      return "Email inválido.";
    case "auth/weak-password":
      return "A senha deve ter pelo menos 6 caracteres.";
    default:
      return "Erro ao registrar. Tente novamente.";
  }
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Salvar informações adicionais no Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        city,
        state,
        phone,
        gender,
        birthDate,
        email,
      });

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
          Registrar
        </h2>
        <p className="text-center text-gray-600 mb-6">crie sua conta</p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Sobrenome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Estado"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecione o sexo</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>
          <div>
            <input
              type="date"
              placeholder="Data de Nascimento"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
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
            Registrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-600 hover:underline">
            Já tem uma conta? Entrar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
