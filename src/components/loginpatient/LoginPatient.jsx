import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Para navegação após login bem-sucedido
import InputMask from "react-input-mask"; // Importando a biblioteca de máscara

const LoginPatient = () => {
  const [phone, setPhone] = useState(""); // Usando telefone para login
  const [password, setPassword] = useState(""); // Senha
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
  });

  const navigate = useNavigate(); // Usado para redirecionar após login

  // Função para validar os campos
  const validateForm = () => {
    const newErrors = {};

    // Validação do telefone
    const phonePattern = /^[0-9]{10,11}$/; // Formato de telefone esperado
    if (!phone) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!phone.match(phonePattern)) {
      newErrors.phone = "Telefone inválido";
    }

    // Validação da senha
    if (!password) {
      newErrors.password = "Senha é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna verdadeiro se não houver erros
  };

  // Função para enviar o login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Formulário inválido");
      return;
    }

    const loginData = {
      phone,
      password,
    };

    try {
      // Envia os dados para o backend para validar o login
      const response = await axios.post("http://localhost:5000/api/login", loginData);
      console.log(response.data.message); // Sucesso no login

      // Redireciona o paciente para a página de agendamento após o login
      navigate("/schedule"); // Substitua "/schedule" pelo caminho correto da página de agendamento

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Login falhou. Verifique os dados.");
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-blue-900">Login de Paciente</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Telefone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite o número de telefone"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          {/* Campo Senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          {/* Botão de Login */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-900 text-white rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Entrar
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <a href="/registerpatient" className="text-blue-500 hover:underline">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPatient;
