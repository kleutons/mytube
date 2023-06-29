import * as C from "./style";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input";
import { ButtonLogin } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Loogin.png'

function SingUp (){
    const [error, setError] = useState('');
    const { singUp } = useAuth();
    const navigate = useNavigate();
    
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    }
  

    function handleSubmit(event: any) {
        event.preventDefault(); // Evita o recarregamento da página
        setError('');
        const nomeValue = event.currentTarget.querySelector('[name="nome"]').value;
        const emailInput = event.currentTarget.querySelector('[name="email"]');
        const passValue = event.currentTarget.querySelector('[name="password"]').value;
        const passConfValue = event.currentTarget.querySelector('[name="conf-pass"]').value;

        if (!nomeValue || !emailInput.value || !passValue || !passConfValue) {
            setError('Por favor, preencha todos os campos.');
            return;
        }else 
        if(!/\S+@\S+\.\S+/.test(emailInput.value)){
          emailInput.focus();
          setError('Digite um e-mail válido!');
          return;
        }else
        if( passValue.length < 8 || passConfValue.legenth < 8){ 
            setError('Digite uma senha de pelo menos 8 caracteres e confirme!');
            return;
        }else 
        if( passValue !== passConfValue){ 
            setError('Senha inválida, Não são iguais!');
            return;
        }

        const res = singUp(nomeValue, emailInput.value, passValue);
        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadatrado com sucesso!");
        navigate("/");
        
    }

    return(
        <C.Container onSubmit={handleSubmit}>
        <C.Content>
          <img alt="logo" src={Logo} />
          <h1>Criar sua Conta</h1>
          <span>Preencha seus dados</span>
          <Input 
            name='nome'
            type="text"
            placeholder="Nome e Sobrenome"
            required />
          <Input 
              name='email'
              type="email"
              placeholder="Digite seu Email"
              required />


          <C.ContentPass>
            <Input 
              name='password'
              type={showPassword? 'text' : 'password'}
              placeholder="Senha"
              required />
            <Input 
              name='conf-pass'
              type={showPassword? 'text' : 'password'}
              placeholder="Confirmar Senha"
              required />
          </C.ContentPass>
          <C.SpanPass>
            Use 8 caracteres com uma combinação de letras, números e símbolos.
          </C.SpanPass>

          <C.ContentShowPass>
            <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
            <label htmlFor="show-password">Mostrar senha</label>
          </C.ContentShowPass>
          

          <C.labelError>{error}</C.labelError>

          <C.Footer>
            <Link to='/mytube/login'> Faça login em vez disso </Link>
            <ButtonLogin Type="submit" Text='Criar' />
          </C.Footer>

        </C.Content>
      </C.Container>
    )
};

export default SingUp;