import React, { useState } from "react";

const UserSchedule = () => {
  const [professional, setProfessional] = useState({
    id: 1,
    name: "Dr. Ricardo Psicólogo",
    image: "https://via.placeholder.com/150", // URL simulada de imagem
    availableTimes: {
      "2024-12-05": ["09:00", "10:30", "14:00"],
      "2024-12-06": ["10:00", "11:30", "15:00"],
      "2024-12-07": ["09:00", "13:30", "16:00"],
    },
  });

  const [selectedDate, setSelectedDate] = useState("2024-12-05"); // Dia inicial
  const [selectedTime, setSelectedTime] = useState(""); // Horário escolhido

  const today = new Date();
  const weekDates = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date.toISOString().split("T")[0]; // Formato YYYY-MM-DD
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(""); // Resetar horário ao mudar a data
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (!selectedTime) {
      alert("Por favor, selecione um horário!");
      return;
    }
    alert(`Você agendou para o dia ${selectedDate} às ${selectedTime} com ${professional.name}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-4xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-900">
          Agendamento com {professional.name}
        </h1>

        {/* Informações do Profissional */}
        <div className="flex items-center justify-center space-x-4 bg-white p-4 rounded-lg shadow">
          <img
            src={"/img/profissionalh.png"}
            alt={professional.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-800">{professional.name}</h2>
            <p className="text-sm text-blue-600">Especialista em terapia cognitivo-comportamental</p>
          </div>
        </div>

        {/* Seleção de Dias */}
        <div className="bg-white p-4 rounded-lg shadow space-y-4">
          <h3 className="text-xl font-semibold text-blue-800 text-center">Escolha um dia</h3>
          <div className="flex justify-center space-x-2 overflow-x-auto">
            {weekDates.map((date) => (
              <button
                key={date}
                onClick={() => handleDateChange(date)}
                className={`px-4 py-2 rounded-lg ${
                  selectedDate === date
                    ? "bg-blue-500 text-white"
                    : "bg-blue-200 text-blue-700 hover:bg-blue-300"
                }`}
              >
                {new Date(date).toLocaleDateString("pt-BR", {
                  weekday: "short",
                  day: "2-digit",
                  month: "2-digit",
                })}
              </button>
            ))}
          </div>
        </div>

        {/* Seleção de Horários */}
        <div className="bg-white p-4 rounded-lg shadow space-y-4">
          <h3 className="text-xl font-semibold text-blue-800 text-center">Horários disponíveis</h3>
          <div className="grid grid-cols-3 gap-4 justify-center">
            {(professional.availableTimes[selectedDate] || []).map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`px-4 py-2 rounded-lg ${
                  selectedTime === time
                    ? "bg-blue-500 text-white"
                    : "bg-blue-200 text-blue-700 hover:bg-blue-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Botão de Agendamento */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
          >
            Confirmar Agendamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSchedule;
