import { Suspense } from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import logo  from '../logo.svg';

import { routes } from './routes';
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";



export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> } >
        <BrowserRouter >
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="logo" />
                <ul>
                        {
                        routes.map( route => (
                            <li key={route.to}>
                                <NavLink 
                                to={route.to} 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                    {route.name}
                                </NavLink>
                            </li>
                        ))
                        }
                    
                {/*<li>
                    <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
    </li>*/}
                </ul>
                </nav>

                <Routes>
                    {
                        routes.map( route => (
                            <Route 
                                key={route.path} 
                                path={route.path} 
                                element={ <route.Component /> } 
                            />
                        ))
                    }
                    {/*
                        <Route path="lazy1" element={ <LazyPage1 /> }/>
                        <Route path="lazy2" element={ <LazyPage2 /> } />
                        <Route path="lazy3" element={ <LazyPage3 /> } />
                    */}

            
                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                
                    
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
    
  )
}
