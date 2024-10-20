function HowWork() {
  return (
    <section
      id="howWork"
      className="mb-5 md:my-0 lg:h-screen flex justify-center items-center bg-blue-100"
    >
      <div className="pl-9 pr-9">
        <h1 className="mb-2 font-bold text-2xl xl:text-4xl 2xl:text-5xl">
          Organize suas sessões, simplifique sua rotina e foque no que realmente
          importa: o bem-estar dos seus pacientes.
        </h1>

        <h1 className="mt-5 mb-10 text-xl xl:text-2xl 2xl:text-3xl">
          Nosso sistema de agendas é simples e eficiente, tanto para pacientes
          quanto para psicólogos. <br /> Veja como ele funciona:
        </h1>

        <div className="md:w-4/5 space-y-6">
          <div>
            <h1>Profissional,</h1>
            <p>
              Gerencie sua agenda, definindo horário do expediente, folgas e
              mais. Tenha controle de todos os pacientes, com anotações e
              observações.
            </p>
          </div>
          <div>
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
