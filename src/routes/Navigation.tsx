import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import logo  from '../logo.svg';
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents,  FormikAbstraction, RegisterFormikPage, DynamicForm  } from "../03-forms/pages";
import { RegisterFormikPato } from "../03-forms/pages/RegisterFormikPage(resuelto por mi)";


export const Navigation = () => {
  return (
    <BrowserRouter >
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="logo" />
            <ul>
                <li>
                    <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }> Register Page</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-abstraction" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstraction</NavLink>
                </li>
                <li>
                    <NavLink to="/register-formik-page" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Regiter Formik Page</NavLink>
                </li>
                <li>
                    <NavLink to="/register-formik-pato" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Regiter Formik Page x Pato</NavLink>
                </li>
                <li>
                    <NavLink to="/dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                </li>
                
            </ul>
            </nav>

            <Routes>
                <Route path="register" element={ <RegisterPage /> }/>
                <Route path="formik-basic" element={ <FormikBasicPage /> } />
                <Route path="formik-yup" element={ <FormikYupPage /> } />
                <Route path="formik-components" element={ <FormikComponents /> } />
                <Route path="formik-abstraction" element={ <FormikAbstraction /> } />
                <Route path="register-formik-page" element={ <RegisterFormikPage /> } />
                <Route path="register-formik-pato" element={ <RegisterFormikPato /> } />
                <Route path="dynamic-form" element={ <DynamicForm /> } />
                <Route path="home" element={ <h1>Home Page</h1>} />

                <Route path="/*" element={ <Navigate to="/home" replace /> } />
                
            </Routes>
        </div>
    </BrowserRouter>
  )
}
