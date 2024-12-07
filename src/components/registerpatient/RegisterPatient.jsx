import React, { useState } from "react";
import api from "../services/api";

const RegisterPatient = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    whatsapp: "",
  });

  // Validação dos campos
  const validateForm = () => {
    const newErrors = {};

    // Validação do nome
    if (!name) {
      newErrors.name = "Nome é obrigatório";
    } else if (name.length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    // Validação do telefone
    const phonePattern = /^[0-9]{10,11}$/; // Exemplo de regex para telefone
    if (!phone) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!phone.match(phonePattern)) {
      newErrors.phone = "Telefone deve ter 10 ou 11 dígitos numéricos";
    }

    // Validação do WhatsApp (opcional, mas se preenchido deve ser válido)
    const whatsappPattern = /^\+?[1-9]\d{1,14}$/; // Regex para formato de WhatsApp internacional
    if (whatsapp && !whatsapp.match(whatsappPattern)) {
      newErrors.whatsapp = "WhatsApp deve ter um número válido (com código do país)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna verdadeiro se não houver erros
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Formulário inválido");
      return;
    }

    const patientData = {
      name,
      phone,
      whatsapp,
    };

    try {
      // Envia os dados para o backend via POST request
      const response = await api.post("/patients", patientData);
      console.log(response.data.message);

      // Limpa os campos após o cadastro
      setName("");
      setPhone("");
      setWhatsapp("");
      setErrors({}); // Limpa os erros
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-blue-900">Cadastro de Paciente</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite o nome completo"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

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

          {/* Campo WhatsApp */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
              WhatsApp (Opcional)
            </label>
            <input
              type="text"
              id="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite o número do WhatsApp"
            />
            {errors.whatsapp && <p className="text-red-500 text-xs">{errors.whatsapp}</p>}
          </div>

          {/* Botão de Enviar */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-900 text-white rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Já possui uma conta?{' '}
            <a href="/loginpatient" className="text-blue-500 hover:underline">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPatient;
