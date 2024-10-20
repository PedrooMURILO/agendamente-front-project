function HowWork() {
  return (
    <section
      id="howWork"
      className="my-5 md:my-0 md:h-screen flex justify-center items-center bg-blue-100"
    >
      <div className="p-9">
        <h1 className="mt-2 mb-4 font-bold text-5xl">
          Organize suas sessões, simplifique sua rotina e foque no que realmente
          importa: o bem-estar dos seus pacientes.
        </h1>

        <h1 className="mt-10 mb-10 text-3xl">
          Nosso sistema de agendas é simples e eficiente, tanto para pacientes
          quanto para psicólogos. <br /> Veja como ele funciona:
        </h1>

        <div className="md:w-4/5 text-2xl space-y-6">
          <div className="w-4/5">
            <h1>Profissional,</h1>
            <p>
              Gerencie sua agenda, definindo horário do expediente, folgas e
              mais. Tenha controle de todos os pacientes, com anotações e
              observações.
            </p>
          </div>
          <div className="w-4/5">
            <h1>Paciente,</h1>
            <p>
              Faça seu cadastro rápido, marque, facilmente, sua triagem inicial.
              Acompanhe suas sessões, sabendo quantas já foram realizadas e as
              próximas marcadadas, saiba sempre sobre a disponibilidade do
              profissional. E anote suas reflexões.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWork;
