import * as Yup from 'yup';


import '../styles/styles.css';
import { useFormik } from 'formik';



export const RegisterFormikPato = () => {

    const { resetForm, errors, touched, handleSubmit, getFieldProps } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password1: '',
            password2: '',
        },
        onSubmit: ( values ) => {
            console.log(values);
        },
        validationSchema: Yup.object({
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
                          
            })
       
    });


    
  return (
    <div>
        <h1>Register Formik Page x Pato</h1>

        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                { ...getFieldProps('name') }
            />
                {
                    touched.name && errors.name && <span>{ errors.name }</span>
                }
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                { ...getFieldProps('email') }
            />
                {
                    touched.email && errors.email && <span>{ errors.email }</span>
                }
            <label htmlFor="password1">Contraseña</label>
            <input 
                type="password"
                { ...getFieldProps('password1') }
            />
                {
                    touched.password1 && errors.password1 && <span>{ errors.password1 }</span>
                }
            <label htmlFor="password2">Repita la contraseña</label>
            <input 
                type="password"
                { ...getFieldProps('password2')}
            />
            

            <button type="submit">Create</button>
            <button
                type='reset' 
                onClick={ () => resetForm()}> Reset Form </button>
        
        </form>

    </div>
  )
}
