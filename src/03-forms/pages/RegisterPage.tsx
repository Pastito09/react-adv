import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';
import { spawn } from 'child_process';


export const RegisterPage = () => {

    const { formData, onChange, name, email, password1, password2, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });


    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log( formData );
    }

  return (
    <div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={ onSubmit }>
            <input 
                type="text"
                name='name'
                placeholder="Name" 
                value={ name }
                onChange={ onChange }
                className={`${ name.trim().length <=0 && 'has-error'} `}
            />
            {
                name.trim().length <= 0  && <span>Este campo es necesario</span>
                }
            <input 
                type="email"
                name="email"
                placeholder="Email" 
                value={ email }
                onChange={ onChange }
                className={`${ !isValidEmail(email) && 'has-error'}`}
            />
            { !isValidEmail(email) && <span>Email no es valido</span> }
            <input 
                type="password"
                name='password1'
                placeholder="Password" 
                value={ password1 }
                onChange={ onChange }
            />
            { password1.trim().length <= 0  && <span>Este campo es necesario</span> }
            { password1.trim().length < 6  &&  password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span> }
            <input 
                type="password"
                name='password2'
                placeholder="Repeat Password" 
                value={ password2 }
                onChange={ onChange }
            />
            { password2.trim().length <= 0  && <span>Este campo es necesario</span> }
            { password2.trim() !== password1.trim() && <span>Las contraseñas deben ser iguales</span> }
            { password2.trim().length < 6  &&  password2.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span> }


            <button type="submit">Create</button>
            <button onClick={ resetForm}> Reset Form </button>
        
        </form>

    </div>
  )
}
