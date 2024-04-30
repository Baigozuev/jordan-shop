import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryKids } from '../../redux/AddCardSlice';
import BuyCard from '../Buynow/BuyCard';

const Kids = () => {
    const {kids} = useSelector((s) => s.addCard)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(categoryKids())
    },[])
    return (
        <div id='buy'>
        <div className="container">
            <div className="buy">
                {
                    kids.map((el) => <BuyCard el={el}/>)
                }
            </div>
        </div>
        
    </div>
    );
};

export default Kids;