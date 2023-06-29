import { createContext, useEffect, useState, useCallback } from 'react';
import CryptoJS from 'crypto-js';

export const AuthContext = createContext( {} as any);

export const AuthProvider = ( { children }: any ) => {
    const [logged, setLogged] = useState(localStorage.getItem("token") as string);
    const [user_data, setUser_data] = useState({});
    const [users_bd, setUsers_bd] = useState(JSON.parse(localStorage.getItem("users_bd") || 'null') );

    interface User {
        email: string;
        password: string
    }

    function crypt(text:string, encrypt = true){
        const secretKey = 'MinhaChave';

        if(encrypt){
            const tokenCript = CryptoJS.AES.encrypt(text, secretKey).toString();
            return tokenCript;
        }else{
            const bytes = CryptoJS.AES.decrypt(text, secretKey);
            return bytes.toString(CryptoJS.enc.Utf8);
        }
    }
    
     //-- get user data
     const getUser = useCallback((valueToken: string) => {
        if (valueToken && valueToken !== 'null') {
          const tokenDescrypt = crypt(valueToken, false);
          if (users_bd) {
            const hasUser = users_bd?.filter((data: User) => data.email === tokenDescrypt);
            const nomeUser = hasUser[0].nome || null;
            const emailUser = hasUser[0].email || null;
            setUser_data({ nome: nomeUser, email: emailUser });
          }
          setLogged(valueToken);
        }
      }, [users_bd]);

     useEffect(() => {
        getUser(logged);
      }, [logged, getUser]);

    //- Sing Up --
    const singUp = (nome:string, email:string, pass: string) => {
        let newUser;
        const password = crypt(pass);
        if( users_bd ){
            const hasUser = users_bd?.filter((data:User) => data.email === email);

            if (hasUser?.length) {
                return "Já existe um usuário com este e-mail";
            }else{
                newUser = [...users_bd, { nome, email, password }];
            }

        }else{
            newUser = [{ nome, email, password }];
        }

        localStorage.setItem("users_bd", JSON.stringify(newUser));
        setUsers_bd( newUser );
        return;
    }

    //- Login in --
    const logIn = (email:string, password: string) => {
        
        if( users_bd ){
            const hasUser = users_bd?.filter((data:User) => data.email === email);

            if (hasUser?.length && hasUser[0].email === email && (crypt(hasUser[0].password, false) === password) ){
                const tokenGenerate = crypt(email);
                localStorage.setItem('token',tokenGenerate);
                setLogged(tokenGenerate);
                getUser(tokenGenerate);
                return;
            }else{
                return "E-mail ou senha incorretos";
            }
        }else{
            return 'Nenhum Usuário Cadastro!';
        }
        
    }

    const logOut = () => {
        localStorage.removeItem('token');
        setLogged('');
        setUser_data({})
        console.log('logout');
    }
   

    return (
        <AuthContext.Provider value={{
           logged,
           user_data,
           singUp,
           logIn,
           logOut
        }}>{children}</AuthContext.Provider>
    )

    
}