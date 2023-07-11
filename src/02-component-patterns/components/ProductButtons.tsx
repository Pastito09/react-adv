import styles from '../styles/styles.module.css';
import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
                    
                    
                    
                    
                    {/*interface ProductButtonProps {
                        increaseBy: ( value: number ) => void;
                        counter: number;
                    }*/}
    {/* { counter, increaseBy }: ProductButtonProps */}

    export interface Props {
        className?: string;
        style?: CSSProperties;
    }

    export const ProductButtons = ( { className, style }: Props ) => {

        const { increaseBy, counter } = useContext(ProductContext)
    
    
        return (
            <div 
                className={ ` ${ styles.buttonsContainer } ${ className }` }
                style={ style }   
            >
                <button
                    className={ styles.buttonMinus } 
                    onClick={() => increaseBy( -1 )}>-</button>
                
                <div className={ styles.countLabel }>{counter}</div>
                
                <button
                    className={ styles.buttonAdd }
                    onClick={() => increaseBy( +1 )}>+</button>
            </div>
        )
    }