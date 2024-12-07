import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarProfessional from "../NavbarProfessional";

const ProfileProfessional = () => {
  const navigate = useNavigate();

  // Estados para armazenar dados do banco e controlar modo de edição
  const [profile, setProfile] = useState({});
  const [scheduleSettings, setScheduleSettings] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Função para buscar dados do banco
  const fetchData = async () => {
    try {
      const profileResponse = await axios.get("http://localhost:3000/api/profile");
      const scheduleResponse = await axios.get("http://localhost:3000/api/schedule");

      setProfile(profileResponse.data);
      setScheduleSettings(scheduleResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Função para salvar as edições
  const saveProfile = async () => {
    try {
      await axios.put("http://localhost:3000/api/profile", profile);
      await axios.put("http://localhost:3000/api/schedule", scheduleSettings);
      setIsEditing(false); // Desabilita o modo de edição após salvar
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Buscar os dados assim que o componente carregar
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Professional */}
      <NavbarProfessional />

      {/* Main content */}
      <div className="flex justify-center py-10">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-6 rounded-t-lg text-white">
            <h1 className="text-xl font-semibold">Bem vindo, {profile.name || "Dra. Marcela"}</h1>
            <p className="text-sm">{new Date().toLocaleDateString()}</p>
          </div>

          {/* Profile Section */}
          <div className="p-6 flex flex-col items-center">
            <img
              src={profile.profileImage || "/img/profissional.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
            />

            <h2 className="text-2xl font-bold text-gray-800">{profile.name || "Dra. Marcela"}</h2>
            <p className="text-gray-600">{profile.email || "marceladias@gmail.com"}</p>
          </div>

          {/* Information Form */}
          <div className="px-8 py-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Informações do perfil</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 text-sm font-medium">Nome Completo</label>
                <input
                  type="text"
                  value={profile.name || ""}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  readOnly={!isEditing}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium">Nome profissional</label>
                <input
                  type="text"
                  value={profile.businessName || ""}
                  onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                  readOnly={!isEditing}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium">Telefone</label>
                <input
                  type="text"
                  value={profile.phone || ""}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  readOnly={!isEditing}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium">Licença Profissional (CIP) </label>
                <input
                  type="text"
                  value={profile.professionalLicense || ""}
                  onChange={(e) => setProfile({ ...profile, professionalLicense: e.target.value })}
                  readOnly={!isEditing}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Schedule Settings */}
          <div className="px-8 py-4 border-t border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Configurações da agenda</h3>
            <div className="space-y-4">
              {/* Working Days */}
              <div>
                <label className="block text-gray-600 text-sm font-medium">Dias da Semana</label>
                <p className="mt-1 text-gray-800">{scheduleSettings.workingDays?.join(", ") || "Segunda, quarta e sexta"}</p>
              </div>

              {/* Time Slot 1 */}
              <div>
                <label className="block text-gray-600 text-sm font-medium">Período 1 (Início - Final)</label>
                <p className="mt-1 text-gray-800">
                  {scheduleSettings.timeSlot1 ? `${scheduleSettings.timeSlot1.start} - ${scheduleSettings.timeSlot1.end}` : "8:30 - 12:00"}
                </p>
              </div>

              {/* Time Slot 2 */}
              <div>
                <label className="block text-gray-600 text-sm font-medium">Período 2 (Início - Final)</label>
                <p className="mt-1 text-gray-800">
                  {scheduleSettings.timeSlot2 ? `${scheduleSettings.timeSlot2.start} - ${scheduleSettings.timeSlot2.end}` : "14:00 - 18:00"}
                </p>
              </div>

              {/* Blocked Dates */}
              <div>
                <label className="block text-gray-600 text-sm font-medium">Datas bloqueadas</label>
                <p className="mt-1 text-gray-800">
                  {scheduleSettings.blockedDates?.join(", ") || "24/12/2024, 25/12/2024 e 31/12/2024"}
                </p>
              </div>

              {/* Observations */}
              <div>
                <label className="block text-gray-600 text-sm font-medium">Observações</label>
                {isEditing ? (
                  <textarea
                    value={scheduleSettings.observations || ""}
                    onChange={(e) => setScheduleSettings({ ...scheduleSettings, observations: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{scheduleSettings.observations || "Horários disponíveis sujeito a mudanças; verificar 1 dia com antecedência."}</p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-8 py-4 flex justify-end gap-4 border-t border-gray-300">
            {isEditing ? (
              <button onClick={saveProfile} className="px-4 py-2 bg-green-500 text-white rounded-md">
                Salvar alterações
              </button>
            ) : (
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Editar perfil
              </button>
            )}
            <button
              onClick={() => navigate("/schedulesettings")}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md"
            >
              Editar informações da agenda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileProfessional;
