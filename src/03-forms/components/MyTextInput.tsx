import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [ x: string ]: any; //comodin recibe cualquier llave y el valor es any (para agregas mas Props)

}

export const MyTextInput = ( { label, ...props }: Props) => {

    const [ field ] = useField(props);
    

  return (
    <>
        <label htmlFor={ props.id || props.name } > { label } </label>
        <input className='text-input' { ...field } { ...props } />
        <ErrorMessage name={ props.name } component="span"  />

    </>
  )
}
