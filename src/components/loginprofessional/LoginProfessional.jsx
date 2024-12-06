import React, { useState } from 'react';

function LoginProfessional() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Insira um email válido.';
    if (formData.password.length < 6) newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log('Dados de login enviados:', formData);
      // Lógica de login pode ser adicionada aqui.
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-blue-900">
          Login do Psicólogo
        </h2>

        {isSubmitted ? (
          <div className="text-center text-green-600">
            Login realizado com sucesso!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { field: 'email', label: 'Email', type: 'email' },
              { field: 'password', label: 'Senha', type: 'password' },
            ].map(({ field, label, type }) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none ${
                    errors[field]
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
                {errors[field] && (
                  <p className="text-sm text-red-500">{errors[field]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-900 rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Entrar
            </button>

            <div className="text-center text-sm">
              <p>
                Não tem uma conta?{' '}
                <a href="/registerprofessional" className="text-blue-600 hover:underline">
                  Cadastre-se
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginProfessional;
