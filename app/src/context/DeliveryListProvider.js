import React, { useState } from 'react'
import DeliveryListContext from './appContext'

const DeliveryListProvider = ({ children }) => {

    const removeItemDeliveryList = id => {
        setDeliveryList(prevState => {
            const itemsDelivery = prevState.itemsDelivery.filter(item => item !== id);
            return { ...prevState, itemsDelivery };
        })
    }

    const addItemDeliveryList = (id) => {

        setDeliveryList(prevState => ({
            ...prevState,
            itemsDelivery: [...prevState.itemsDelivery, id]
        }))

    }

    const listState = {
        itemsDelivery: [
            /* '5e163cb9b45b8c4b5241c7fc',
            '5e163cb9aa94be116d113cc7',
            '5e163cb97c2bb4cbce13a6aa',
            '5e163cb99469111ba6c8ad02',
            '5e163cb95672ff9c7314b309' */
        ],
        removeItemDeliveryList,
        addItemDeliveryList
    }

    const [deliveryList, setDeliveryList] = useState(listState)

    return <DeliveryListContext.Provider value={deliveryList}>{children}</DeliveryListContext.Provider>
};

export default DeliveryListProvider;