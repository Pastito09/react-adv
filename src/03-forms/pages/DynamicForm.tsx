import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';


const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for ( const input of formJson ) {
    initialValues[ input.name ] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string();

     for (const rule of input.validations ) {
        if ( rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        } 

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `Debe tener minimo ${(rule as any).value || 2 } caracteres` )
        }

        if ( rule.type === 'email' ) {
            schema = schema.email("El correo no es válido")
        }

     }

     requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
        <h1>DynamicForm</h1>
        
        <Formik
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ (values) => {
                console.log(values)
            }}
            >
            {
                (formik) => (
                    <Form>
                          {
                            formJson.map( ({ type, name, placeholder, label, options }) => {

                                if ( type === 'input' || type === ' password' || type === 'email') {
                                    return <MyTextInput 
                                            label={label} 
                                            name={name} 
                                            placeholder={placeholder} 
                                            type={(type) as any } 
                                            key={ name }
                                            />
                                } else if ( type === 'select' ) {
                                    return (
                                        <MySelect 
                                            key={ name }
                                            label={ label } 
                                            name={ name }
                                        >
                                            <option value=""> Select an opcion</option>
                                            {
                                                options?.map( opt => (
                                                    <option key={ opt.id } value={ opt.id } >{ opt.label }</option>
                                                ) )
                                            }
                                        </MySelect>
                                    )
                                }
                                throw new Error(`El type ${ type } no es soportado`);
                            
                            } )
                          }

                          <button
                            type='submit'
                            >
                            Submit
                            </button>
                    </Form>
                  
                )
            }
        </Formik>

        </div>
  )
}
