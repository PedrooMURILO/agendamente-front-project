import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NavbarProfessional from "../NavbarProfessional";

const PsychologistSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([
    { time: "08:30 - 09:00", patient: "Paciente Teste", date: "2024-11-26" },
    { time: "09:30 - 10:00", patient: "Paciente A", date: "2024-11-26" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    time: "",
    patient: "",
    date: selectedDate.toISOString().split("T")[0],
  });
  const [charCount, setCharCount] = useState(0);
  const [errors, setErrors] = useState({
    time: "",
    patient: "",
    date: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Função para abrir e fechar o modal
  const openModal = (appointment = null) => {
    if (appointment) {
      setNewAppointment({
        ...appointment,
      });
      setIsEditing(true);
      setEditIndex(appointments.indexOf(appointment));
    } else {
      setIsEditing(false);
      setEditIndex(null);
      setNewAppointment({
        time: "",
        patient: "",
        date: selectedDate.toISOString().split("T")[0],
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrors({ time: "", patient: "", date: "" });
  };

  // Função para adicionar ou editar o agendamento
  const saveAppointment = () => {
    let hasErrors = false;
    let newErrors = { time: "", patient: "", date: "" };

    // Validação do campo de horário (formato: HH:mm - HH:mm)
    const timeRegex = /^[0-2][0-9]:[0-5][0-9] - [0-2][0-9]:[0-5][0-9]$/;
    if (!newAppointment.time || !timeRegex.test(newAppointment.time)) {
      newErrors.time = "O horário deve estar no formato HH:mm - HH:mm.";
      hasErrors = true;
    }

    // Validação do nome do paciente
    if (!newAppointment.patient) {
      newErrors.patient = "O nome do paciente é obrigatório.";
      hasErrors = true;
    }

    // Validação da data
    if (!newAppointment.date) {
      newErrors.date = "A data é obrigatória.";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    if (isEditing) {
      // Alterar o agendamento existente
      const updatedAppointments = [...appointments];
      updatedAppointments[editIndex] = newAppointment;
      setAppointments(updatedAppointments);
    } else {
      // Adicionar um novo agendamento
      setAppointments([...appointments, newAppointment]);
    }

    setNewAppointment({ time: "", patient: "", date: "" });
    setCharCount(0);
    setErrors({ time: "", patient: "", date: "" });
    closeModal();
  };

  // Função para remover um agendamento
  const cancelAppointment = (appointmentToCancel) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment !== appointmentToCancel
    );
    setAppointments(updatedAppointments);
  };

  // Função para atualizar o campo de paciente e contar os caracteres
  const handlePatientChange = (e) => {
    const value = e.target.value;
    setNewAppointment({ ...newAppointment, patient: value });
    setCharCount(value.length);
  };

  // Função para filtrar os agendamentos pela data selecionada
  const filterAppointmentsByDate = (date) => {
    return appointments.filter((appointment) => appointment.date === date);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <NavbarProfessional></NavbarProfessional>

      <div className="flex flex-1">
        {/* Lista de pacientes */}
        <div className="w-1/3 p-6 bg-white rounded-l-xl shadow-xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Pacientes Agendados</h2>
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-medium text-blue-800">{appointment.time}</h3>
                <p className="text-sm text-blue-600">{appointment.patient}</p>
                <p className="text-xs text-gray-500">{appointment.date}</p>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => openModal(appointment)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => cancelAppointment(appointment)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendário e agendamentos */}
        <div className="flex-1 p-6 bg-white rounded-r-xl shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <input
              type="date"
              value={newAppointment.date}
              onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
              className="p-3 border border-gray-300 rounded-md w-40 text-blue-700"
            />
            <button
              onClick={openModal}
              className="p-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300"
            >
              Novo Agendamento
            </button>
          </div>

          <div className="flex flex-col items-center">
            {/* Calendário */}
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              className="my-4 w-80 rounded-lg shadow-lg"
            />

            {/* Exibição de agendamentos para o dia selecionado */}
            <div className="w-full mt-4">
              {filterAppointmentsByDate(selectedDate.toISOString().split("T")[0]).map((appointment, index) => (
                <div
                  key={index}
                  className="bg-blue-100 p-2 mb-2 rounded-md shadow-md"
                >
                  <span className="text-sm text-blue-800">{appointment.time} - {appointment.patient}</span>
                  <span className="text-xs text-gray-500 ml-2">{appointment.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Novo Agendamento */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold text-blue-700 mb-4">{isEditing ? "Editar Agendamento" : "Novo Agendamento"}</h2>
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
              {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Paciente</label>
              <input
                type="text"
                value={newAppointment.patient}
                onChange={handlePatientChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                maxLength={100}
              />
              <p className="text-xs text-gray-500">{charCount}/100</p>
              {errors.patient && <p className="text-xs text-red-500">{errors.patient}</p>}
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
                placeholder="HH:mm - HH:mm"
              />
              {errors.time && <p className="text-xs text-red-500">{errors.time}</p>}
            </div>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="text-blue-700 hover:text-blue-500"
              >
                Cancelar
              </button>
              <button
                onClick={saveAppointment}
                className="bg-blue-700 text-white rounded-md p-2"
              >
                {isEditing ? "Alterar" : "Adicionar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PsychologistSchedule;
