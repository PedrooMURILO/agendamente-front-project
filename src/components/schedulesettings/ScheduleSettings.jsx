import React, { useState, useEffect } from "react";
import NavbarProfessional from "../NavbarProfessional";

const ScheduleSettings = () => {
  const initialSchedule = {
    workingDays: Array(7).fill(false), // Array representando os dias da semana (0 = domingo)
    workHours: {
      morningStart: "08:00",
      morningEnd: "12:00",
      afternoonStart: "14:00",
      afternoonEnd: "18:00",
    },
    notes: "",
  };

  const [schedule, setSchedule] = useState(initialSchedule);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch("/api/schedule");
        const data = await response.json();
        setSchedule({
          workingDays: data.workingDays.map((day) => day === true),
          workHours: data.workHours,
          notes: data.notes || "",
        });
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };
    fetchSchedule();
  }, []);

  const toggleDay = (index) => {
    setSchedule((prev) => {
      const updatedDays = [...prev.workingDays];
      updatedDays[index] = !updatedDays[index];
      return { ...prev, workingDays: updatedDays };
    });
  };

  const handleWorkHoursChange = (field, value) => {
    setSchedule((prev) => ({
      ...prev,
      workHours: { ...prev.workHours, [field]: value },
    }));
  };

  const saveSchedule = async () => {
    const selectedDays = schedule.workingDays
      .map((isWorking, index) => (isWorking ? index : null))
      .filter((day) => day !== null);

    if (selectedDays.length === 0) {
      alert("Por favor, selecione ao menos um dia.");
      return;
    }

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workingDays: selectedDays,
          ...schedule.workHours,
          notes: schedule.notes,
        }),
      });

      alert(response.ok ? "Configuração salva com sucesso!" : "Erro ao salvar.");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };

  const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  return (
    <div className="bg-white shadow-lg rounded-lg w-full ">
      <NavbarProfessional />
      <div className="flex-1 flex justify-center items-center py-10">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
          <h2 className="text-3xl font-bold text-center text-blue-900">Configuração de Agenda</h2>

          {/* Dias de Atendimento */}
          <section className="mt-6">
            <h3 className="text-xl font-semibold text-blue-700">Dias de Atendimento</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {daysOfWeek.map((day, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={schedule.workingDays[index]}
                    onChange={() => toggleDay(index)}
                    className="w-4 h-4"
                  />
                  <span className="text-blue-900">{day}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Horário de Atendimento */}
          <section className="mt-6">
            <h3 className="text-xl font-semibold text-blue-700">Horários</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {["morningStart", "morningEnd", "afternoonStart", "afternoonEnd"].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm text-blue-800">
                    {field.includes("morning") ? "Manhã" : "Tarde"} - {field.includes("Start") ? "Início" : "Fim"}
                  </label>
                  <input
                    type="time"
                    value={schedule.workHours[field]}
                    onChange={(e) => handleWorkHoursChange(field, e.target.value)}
                    className="w-full p-2 border-gray-300 rounded-md"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Observações */}
          <section className="mt-6">
            <h3 className="text-xl font-semibold text-blue-700">Observações</h3>
            <textarea
              value={schedule.notes}
              onChange={(e) => setSchedule({ ...schedule, notes: e.target.value })}
              className="w-full p-2 border-gray-300 rounded-md"
              placeholder="Adicione observações aqui..."
            />
          </section>

          <div className="flex justify-center mt-8">
            <button
              onClick={saveSchedule}
              className="px-6 py-2 bg-blue-500 text-white rounded-md"
            >
              Salvar Configurações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSettings;
