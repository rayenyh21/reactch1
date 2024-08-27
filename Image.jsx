import React from 'react';
import product from './product';

const Image =()=>{
    return <img src={product.imageUrl} alt={product.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />;
}

export default Image ;