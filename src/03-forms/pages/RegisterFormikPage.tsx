import * as Yup from 'yup';


import '../styles/styles.css';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';



export const RegisterFormikPage = () => {

    
  return (
    <div>
        <h1>Register Formik Page</h1>
        <Formik
            initialValues= {{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }}
            onSubmit= {( values ) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                             .max(15, 'Debe de tener maximo 15 caracteres')
                             .min(2, 'Debe de tener minimo 2 caracteres')
                             .required('Requerido'),
                    email: Yup.string()
                              .email('No tiene formato válido')
                              .required('Requerido'),
                    password1: Yup.string()
                                  .min(6, 'La contraseña debe se ser minimo de 6 caracteres')
                                  .required('Requerido'),
                                  
                    password2: Yup.string()
                                  .min(6, 'La contraseña debe se ser minimo de 6 caracteres')
                                  .required('Requerido')
                                  .oneOf([ Yup.ref('password1')], 'Las contraseñas no son iguales')
                })
            } 
        >
            { ({ handleReset }) => (
                 <Form>
                    <MyTextInput 
                        label='Nombre'
                        name='name'
                        type='text'
                        placeholder='Tu nombre'
                    />
                    <MyTextInput 
                        label='Email'
                        name='email'
                        type='email'
                        placeholder='usuario@correo.com'
                        />
                    <MyTextInput 
                        label='Contraseña'
                        name='password1'
                        type='password'
                        placeholder='contraseña'
                        />
                    <MyTextInput 
                        label=' '
                        name='password2'
                        type='password'
                        placeholder='repita su contraseña'
                        />

                    
                    <button type="submit">Create</button>
                    <button
                        type='reset' 
                        onClick={ handleReset }> Reset Form </button>

                 </Form>
            )

            }
            
                
        </Formik>

    </div>
  )
}
