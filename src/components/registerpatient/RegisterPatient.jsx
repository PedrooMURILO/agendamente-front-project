import React, { useState } from "react";

const RegisterPatient = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const patientData = {
      name,
      phone,
      whatsapp,
    };

    console.log("Dados do paciente cadastrados:", patientData);

    setName("");
    setPhone("");
    setWhatsapp(false);
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
          </div>

          {/* Checkbox WhatsApp */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="whatsapp"
              checked={whatsapp}
              onChange={() => setWhatsapp(!whatsapp)}
              className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
              WhatsApp
            </label>
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
            <a href="/login" className="text-blue-500 hover:underline">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPatient;
