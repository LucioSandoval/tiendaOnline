import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { rutaApi } from '../services/index';

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        loadProdutcs()

    }, [])

    async function loadProdutcs() {
        //llamar método que utiliza axios para consumir endpoint
        const response = await rutaApi('GET', 'lista');
        //asigna o modifica valor a propiedad products
        setProducts(response.data.products)
        setIsLoading(false)
    }

    if(isLoading){
      return  <Loading/>
    }

    if(products.length===0){
        return <h2 className="title has-text-centered">No hay productos agregue</h2>
    }
    return (
        
     'mostrar resultado'
    )
}

export default ListProducts;