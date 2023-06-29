import { useState } from "react";
import * as C from './style';
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input";
import { ButtonLogin } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Loogin.png'

function Login(){

    const [error, setError] = useState('');
    const { logIn } = useAuth();
    const navigate = useNavigate();
  
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    }
     
    function handleSubmit(event: any){
      event.preventDefault(); // Evita o recarregamento da página
      setError('');
      const emailValue = event.currentTarget.querySelector('[name="email"]').value;
      const passValue = event.currentTarget.querySelector('[name="password"]').value;
      // Verificar se todos os campos estão vazios
      if (!emailValue || !passValue) {
        const msg = 'Por favor, preencha todos os campos.';
        setError(msg);
      }else{
        const res = logIn(emailValue, passValue);
        if (res) {
          setError(res);
          return;
        }
      }
  
      navigate("/mytube");
    }


    return(
            <C.Container onSubmit={handleSubmit}>
            
            <C.Content>
            <img alt="logo" src={Logo} />
            <h1>Fazer Login</h1>
            <span>Prosseguir com seus dados</span>

            <Input 
                name='email'
                type="email"
                placeholder="Digite seu Email"
                required />
            <Input 
                name='password'
                type={showPassword? 'text' : 'password'}
                placeholder="Digite sua Senha"
                required />

            <C.ContentShowPass>
                <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                <label htmlFor="show-password">Mostrar senha</label>
            </C.ContentShowPass>

            <C.labelError>{error}</C.labelError>
                
            <C.Footer>
            <Link to='/mytube/signup'> Criar Uma Conta </Link>
            <ButtonLogin Type="submit" Text='Entrar' />
            </C.Footer>
            
            </C.Content>
            
        </C.Container>
        )
}

export default Login;