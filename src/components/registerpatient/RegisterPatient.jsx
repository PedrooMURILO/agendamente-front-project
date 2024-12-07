import React, { useState } from 'react';
import api from '../services/api'; // Importa a conexão com o back-end

function RegisterPatient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Atualiza os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Valida os campos do formulário
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email.includes('@')) newErrors.email = 'Insira um email válido.';
    if (!formData.phone.match(/^\d{10,11}$/)) newErrors.phone = 'Insira um telefone válido (10-11 dígitos).';
    return newErrors;
  };

  // Envia os dados para o back-end
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await api.post('/patients', formData); // Envia os dados para o back-end
        console.log('Paciente cadastrado com sucesso:', response.data);
        setIsSubmitted(true); // Exibe a mensagem de sucesso
      } catch (error) {
        console.error('Erro ao cadastrar paciente:', error.response?.data || error.message);
        setErrors({ api: 'Erro ao realizar o cadastro. Tente novamente.' });
      }
    } else {
      setErrors(validationErrors); // Exibe erros de validação
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-blue-900">
          Cadastro do Paciente
        </h2>

        {isSubmitted ? (
          <div className="text-center text-green-600">
            Cadastro realizado com sucesso!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {[{ field: 'name', label: 'Nome' }, { field: 'email', label: 'Email' }, { field: 'phone', label: 'Telefone' }].map(({ field, label }) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type="text"
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

            {errors.api && (
              <p className="text-center text-red-500 mt-2">{errors.api}</p>
            )}
          </form>

          
        )}

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Já possui um registro?{' '}
            <a href="/loginpatient" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPatient;
