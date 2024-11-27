
import React, { useState } from "react";

const PsychologistProfile = () => {
  const [professional, setProfessional] = useState({
    name: "",
    specialty: "",
    contact: "",
    period1: { start: "", end: "" },
    period2: { start: "", end: "" },
  });

  const handleInputChange = (field, value) => {
    setProfessional({ ...professional, [field]: value });
  };

  const handlePeriodChange = (period, field, value) => {
    setProfessional({
      ...professional,
      [period]: { ...professional[period], [field]: value },
    });
  };

  const saveProfile = () => {
    console.log("Perfil salvo:", professional);
    alert("Perfil salvo com sucesso!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      {/* Navbar */}
      <nav className="bg-blue-700 p-4 shadow-md">
        <h1 className="text-white text-3xl font-semibold">Perfil do Profissional</h1>
      </nav>

      {/* Formulário */}
      <div className="flex-1 p-6 flex flex-col items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Dados do Profissional</h2>
          
          {/* Nome */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm text-blue-600">Nome</label>
            <input
              id="name"
              type="text"
              value={professional.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-blue-700"
              placeholder="Nome completo"
            />
          </div>

          {/* Especialidade */}
          <div className="mb-4">
            <label htmlFor="specialty" className="block text-sm text-blue-600">Especialidade</label>
            <input
              id="specialty"
              type="text"
              value={professional.specialty}
              onChange={(e) => handleInputChange("specialty", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-blue-700"
              placeholder="Ex.: Psicologia Clínica"
            />
          </div>

          {/* Contato (opcional) */}
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm text-blue-600">Contato (opcional)</label>
            <input
              id="contact"
              type="text"
              value={professional.contact}
              onChange={(e) => handleInputChange("contact", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-blue-700"
              placeholder="Ex.: (11) 98765-4321"
            />
          </div>

          {/* Período 1 */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Período de Trabalho 1</h3>
            <div className="flex space-x-4">
              <div>
                <label htmlFor="period1-start" className="block text-sm text-blue-600">Início</label>
                <input
                  id="period1-start"
                  type="time"
                  value={professional.period1.start}
                  onChange={(e) => handlePeriodChange("period1", "start", e.target.value)}
                  className="p-3 border border-gray-300 rounded-md text-blue-700"
                />
              </div>
              <div>
                <label htmlFor="period1-end" className="block text-sm text-blue-600">Término</label>
                <input
                  id="period1-end"
                  type="time"
                  value={professional.period1.end}
                  onChange={(e) => handlePeriodChange("period1", "end", e.target.value)}
                  className="p-3 border border-gray-300 rounded-md text-blue-700"
                />
              </div>
            </div>
          </div>

          {/* Período 2 */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Período de Trabalho 2</h3>
            <div className="flex space-x-4">
              <div>
                <label htmlFor="period2-start" className="block text-sm text-blue-600">Início</label>
                <input
                  id="period2-start"
                  type="time"
                  value={professional.period2.start}
                  onChange={(e) => handlePeriodChange("period2", "start", e.target.value)}
                  className="p-3 border border-gray-300 rounded-md text-blue-700"
                />
              </div>
              <div>
                <label htmlFor="period2-end" className="block text-sm text-blue-600">Término</label>
                <input
                  id="period2-end"
                  type="time"
                  value={professional.period2.end}
                  onChange={(e) => handlePeriodChange("period2", "end", e.target.value)}
                  className="p-3 border border-gray-300 rounded-md text-blue-700"
                />
              </div>
            </div>
          </div>

          {/* Botão de Salvar */}
          <button
            onClick={saveProfile}
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Salvar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default PsychologistProfile;
