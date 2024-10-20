function NeedHelp() {
  return (
    <section
      id="needHelp"
      className="my-5 md:my-0 lg:h-screen flex justify-center items-center bg-blue-100"
    >
      <div>
        <h1 className="text-3xl mb-3 md:text-center p-9 xl:text-4xl">
          Dúvidas frequentes
        </h1>
        <div className="md:flex space-y-2 md:space-y-0">
          <div className="space-y-3 w-4/5 pr-9 pl-9">
            <div>
              <h1 className="font-bold">
                Como configuro meus horários de atendimento?
              </h1>
              <p>
                Na seção de configurações, você pode definir seu horário de
                início, fim e intervalos entre consultas, além de marcar dias em
                que estará ausente.
              </p>
            </div>
            <div>
              <h1 className="font-bold">
                Posso bloquear dias específicos na minha agenda?
              </h1>
              <p>
                Sim, você pode bloquear datas em que não estará disponível, como
                feriados ou folgas, e o sistema automaticamente informará seus
                pacientes.
              </p>
            </div>
          </div>
          <div className="space-y-3 w-4/5 pr-9 pl-9">
            <div>
              <h1 className="font-bold">
                Como visualizo e gerencio meus pacientes?
              </h1>
              <p>
                Na aba Pacientes, você encontrará uma lista completa com
                informações de todos os seus pacientes, incluindo histórico de
                sessões e observações.
              </p>
            </div>
            <div>
              <h1 className="font-bold">
                Posso adicionar observações privadas sobre os pacientes?
              </h1>
              <p>
                Sim, há um campo privado para cada paciente onde você pode
                registrar anotações sobre o progresso, questões discutidas e
                outros pontos relevantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NeedHelp;
