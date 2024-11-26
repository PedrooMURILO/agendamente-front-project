import React, { useState } from 'react';

function RegisterProfessional() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    registroProfissional: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = 'Nome é obrigatório.';
    if (!formData.email.includes('@')) newErrors.email = 'Insira um email válido.';
    if (!formData.telefone.match(/^\d{10,11}$/)) newErrors.telefone = 'Insira um telefone válido (10-11 dígitos).';
    if (formData.senha.length < 6) newErrors.senha = 'A senha deve ter pelo menos 6 caracteres.';
    if (!formData.registroProfissional) newErrors.registroProfissional = 'Registro profissional é obrigatório.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log('Dados enviados:', formData);
      // Lógica de envio para o backend pode ser adicionada aqui.
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-blue-900">
          Cadastro do Profissional
        </h2>

        {isSubmitted ? (
          <div className="text-center text-green-600">
            Cadastro realizado com sucesso!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {['nome', 'email', 'telefone', 'senha', 'registroProfissional'].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field === 'registroProfissional'
                    ? 'Registro Profissional'
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === 'senha' ? 'password' : 'text'}
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
              Cadastrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegisterProfessional;
