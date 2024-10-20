function Resources() {
  return (
    <section
      id="resources"
      className="my-5 md:my-0 md:h-screen bg-blue-900 text-white flex justify-center items-center bg-silver"
    >
      <div className="grid md:grid-cols-2 md:w-4/5 space-y-2 md:space-y-0">
        <div className="space-y-3 w-4/5 text-xl">
          <h1 className="text-3xl">Para profissionais:</h1>
          <p>
            <b>Ver horários disponíveis: </b>Um calendário dinâmico que mostra
            os horários livres para agendamento da triagem, com filtros de
            datas.
          </p>
          <p>
            <b>Controle de sessões: </b>Um painel onde o paciente possa ver o
            histórico de sessões realizadas, como uma linha do tempo ou lista.
          </p>
          <p>
            <b>Saber sobre indisponibilidades: </b>Notificações ou alertas no
            calendário que mostram quando a clínica estará fechada ou a
            psicóloga não estará disponível.
          </p>
          <p>
            <b>Anotações do paciente: </b>Um espaço privado para o paciente
            registrar o que foi discutido na sessão, criando uma espécie de
            diário pessoal.
          </p>
        </div>
        <div className="space-y-3 w-4/5 text-xl">
          <h1 className="text-3xl">Para pacientes:</h1>
          <p>
            <b>Visualizar todos os pacientes: </b>Uma lista ou dashboard com
            informações dos pacientes e um campo de busca por nome ou data.
          </p>
          <p>
            <b>Gerenciar ausências: </b>Ferramenta para bloquear datas ou dias
            específicos no calendário, como feriados, folgas ou viagens.
          </p>
          <p>
            <b>Definir horários de atendimento: </b>Configuração de agenda com
            intervalo entre consultas e horas de início e fim do expediente.
          </p>
          <p>
            <b>Observações sobre pacientes: </b>Campo privado para o psicólogo
            fazer anotações sobre o progresso, pontos importantes ou qualquer
            outra observação relevante para o acompanhamento.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resources;
