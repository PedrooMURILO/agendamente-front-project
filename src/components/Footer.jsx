function Footer() {
  return (
    <footer className="py-8">
      <div className="container px-4 lg:grid lg:grid-cols-5">
        {/* Links Úteis */}
        <div className="md:col-start-2">
          <ul className="space-y-3">
            <li>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" className="p-2 rounded-md hover:bg-gray-100">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="space-x-7 text-3xl px-2 my-5 lg:my-0">
          <i className="bi bi-linkedin hover:text-gray-500 cursor-pointer"></i>
          <i className="bi bi-instagram hover:text-gray-500 cursor-pointer"></i>
          <i className="bi bi-youtube hover:text-gray-500 cursor-pointer"></i>
        </div>

        {/* Contato */}
        <div>
          <p className="mb-2 px-2">Telefone: (11) 1234-5678</p>
          <p className="mb-4 px-2">Email: contato@agendamente.com</p>
        </div>
      </div>
      <div className="mt-8 text-center opacity-40">
        <p>AgendaMente &copy; 2024 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
