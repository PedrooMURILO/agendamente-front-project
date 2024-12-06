import React from 'react';

const NavbarProfessional = () => {
  return (
    <nav className="bg-blue-700 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-3xl font-semibold">Agendamentos</h1>
        <div className="flex space-x-8">
          <a href="/professionaldashboard" className="text-white hover:text-blue-300 transition duration-300">Painel</a>
          <a href="/profileprofessional" className="text-white hover:text-blue-300 transition duration-300">Perfil</a>
          <a href="/psychologistschedule" className="text-white hover:text-blue-300 transition duration-300">Agendamentos</a>
          <a href="/schedulesettings" className="text-white hover:text-blue-300 transition duration-300">Configurações de agenda</a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarProfessional;