import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuyCard from '../Buynow/BuyCard';
import { categoryWoman } from '../../redux/AddCardSlice';

const Woman = () => {
    const {woman} = useSelector((s) => s.addCard)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(categoryWoman())
    },[])
    return (
        <div id='buy'>
            <div className="container">
                <div className="buy">
                    {
                        woman.map((el) => <BuyCard el={el}/>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Woman;