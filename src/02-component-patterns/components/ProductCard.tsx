import styles from '../styles/styles.module.css';

import { useProducts } from '../hooks/useProduct';
import { CSSProperties, ReactElement, createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}


export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProducts();
    
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >

                { children }
                {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffe mug" />
                <img className={ styles.productImg } src={ noImage } alt="No Image" />
                <img className={ styles.productImg } src={ product.img ? product.img : noImage } alt="Coffe mug" />
                <ProductImage img={ product.img } />
                {/*<span className={ styles.productDescription }>{ product.title }</span>
                <ProductTitle title={ product.title } />
            {/* <div className={ styles.buttonsContainer }>
                    <button
                        className={ styles.buttonMinus } 
                        onClick={() => increaseBy( -1 )}>-</button>

                    <div className={ styles.countLabel }>{counter}</div>

                    <button
                        className={ styles.buttonAdd }
                        onClick={() => increaseBy( +1 )}>+</button>
                </div>
                <ProductButtons 
                    increaseBy={ increaseBy }
                    counter={ counter }}
            />*/}
            </div>
        </Provider>
    
  )
}

