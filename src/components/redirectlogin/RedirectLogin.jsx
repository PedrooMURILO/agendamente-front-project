function RedirectLogin() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-blue-900">Login</h2>
        <p className="text-center text-sm text-gray-600">
          Não possui cadastro?{' '}
          <a href="/registerprofessional" className="text-blue-500 hover:underline">
            Crie agora
          </a>
        </p>

        <div className="space-y-4">
          
          <a href="/login/profissional" className="block w-full py-2 text-center text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            Acesse
          </a>
        </div>
        
        <div className="text-center">
          <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
            Esqueceu a senha?
          </a>
        </div>
      </div>
    </div>
  );
}

export default RedirectLogin;
