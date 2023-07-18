import { ChangeEvent, useState } from "react";


                //la T es "generico" significa dependiendo del tipo de dato que recibo, es el tipo de dato que recibe en "initState"
export const useForm = <T>( initState: T ) => {

    const [ formData, setFormData ] = useState( initState );

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData( prev => ({
            ...prev,
            [event.target.name]: event.target.value            
        }));
    }   

    const resetForm = () => {
        setFormData({ ...initState })
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,
        formData,
        onChange,
        resetForm,
        isValidEmail
    }
}