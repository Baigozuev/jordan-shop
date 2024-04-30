import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuyCard from '../Buynow/BuyCard';
import { categoryMan } from '../../redux/AddCardSlice';

const Man = () => {
    const {man} = useSelector((s) => s. addCard)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(categoryMan())
    },[])
    return (
        <div id='buy'>
            <div className="container">
                <div className="buy">
                    {
                        man.map((el) => <BuyCard el={el}/>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Man;