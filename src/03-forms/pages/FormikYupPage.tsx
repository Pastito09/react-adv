import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'


export const FormikYupPage = () => {


    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {//se dispara cuando se pasan las validaciones de "validationSchema"
            console.log(values)
        },
        validationSchema: Yup.object({// Los "key" de este objeto tienen que ser iguales con los del "initialValues" para que hagan match
            firstName: Yup.string()
                          .max(15, 'Debe de tener 15 caracteres o menos')
                          .required('Requerido'),
            lastName: Yup.string()
                         .max(10, 'Debe de tener 10 caracteres o menos')
                         .required('Requerido'),
            email: Yup.string()
                      .email('El correo no tiene un formato válido') 
                      .required('Requerido')                       
        })
    });


  return (
    <div>
        <h1>Formik Yup</h1>

        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                { ...getFieldProps('firstName')}//con el getFieldProps regresas un obj en el cual le coloca las props onBlur, onChange, value, y el name de el argumento que le pasas a la funcion
                />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}    

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                { ...getFieldProps('lastName') }
                />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }   
            <label htmlFor="email">Email Address</label>
            <input 
                type="email" 
                { ...getFieldProps('email') }
                />
            { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type='submit'>
                    Submit
                </button>
        </form>

    </div>
  )
}
