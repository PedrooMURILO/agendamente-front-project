import React, { useState } from "react";

const PsychologistSchedule = () => {
  const [selectedDate, setSelectedDate] = useState("2024-11-26");
  const [appointments, setAppointments] = useState([
    { time: "08:30 - 09:00", patient: "Paciente Teste", date: "2024-11-26" },
    { time: "09:30 - 10:00", patient: "Paciente A", date: "2024-11-26" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    time: "",
    patient: "",
    date: "2024-11-26",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addAppointment = () => {
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ time: "", patient: "", date: "" });
    closeModal();
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-700 p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">Agendamentos</h1>
          <div className="flex space-x-8">
            <a href="#" className="text-white hover:text-blue-300 transition duration-300">Início</a>
            <a href="#" className="text-white hover:text-blue-300 transition duration-300">Agenda</a>
            <a href="#" className="text-white hover:text-blue-300 transition duration-300">Perfil</a>
            <a href="#" className="text-white hover:text-blue-300 transition duration-300">Configurações</a>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Lateral esquerda com lista de pacientes */}
        <div className="w-1/3 p-6 bg-white rounded-l-xl shadow-xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Pacientes Agendados</h2>
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-medium text-blue-800">{appointment.time}</h3>
                <p className="text-sm text-blue-600">{appointment.patient}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lateral direita com a agenda */}
        <div className="flex-1 p-6 bg-white rounded-r-xl shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-40 text-blue-700"
            />
            <button
              onClick={openModal}
              className="p-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300"
            >
              Novo Agendamento
            </button>
          </div>

          <div className="grid grid-cols-7 gap-4 mb-6">
            <div className="text-center text-sm font-medium text-gray-600">Domingo</div>
            <div className="text-center text-sm font-medium text-gray-600">Segunda</div>
            <div className="text-center text-sm font-medium text-gray-600">Terça</div>
            <div className="text-center text-sm font-medium text-gray-600">Quarta</div>
            <div className="text-center text-sm font-medium text-gray-600">Quinta</div>
            <div className="text-center text-sm font-medium text-gray-600">Sexta</div>
            <div className="text-center text-sm font-medium text-gray-600">Sábado</div>

            {/* Exemplo de horários agendados */}
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className="col-span-1 bg-blue-100 text-center py-2 rounded-md shadow-md"
              >
                <span className="text-sm text-blue-800">{appointment.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Novo Agendamento */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Novo Agendamento</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Data</label>
              <input
                type="date"
                value={newAppointment.date}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, date: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Horário</label>
              <input
                type="text"
                value={newAppointment.time}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, time: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Ex: 08:30 - 09:00"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Paciente</label>
              <input
                type="text"
                value={newAppointment.patient}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, patient: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Nome do paciente"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="p-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={addAppointment}
                className="p-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PsychologistSchedule;
