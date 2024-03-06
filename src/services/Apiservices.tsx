// Dentro de "@/services/Apiservices"

import axios from 'axios';

// Define a interface para os dados do formulário de registro.
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Modifica a função para aceitar um objeto de dados do formulário como argumento.
export async function postFunction(formData: RegisterFormData) {
    const response = await axios.post(`http://localhost:3000/auth/register`, formData);
    return response.data;
}
