import React, { useState } from 'react'
import DeliveryListContext from './appContext'

const DeliveryListProvider = ({ children }) => {

    const removeItemDeliveryList = id => {
        setDeliveryList(prevState => {
            const itemsDelivery = prevState.itemsDelivery.filter(item => item.id !== id);
            return { ...prevState, itemsDelivery };
        })
    }

    const addItemDeliveryList = (id) => {
        setDeliveryList(prevState => ({
            ...prevState,
            itemsDelivery: [...prevState.itemsDelivery, { id: id, units: '1' }]
        }))
    }

    const modifyQuantityItemDeliveryList = (id, value) => {
        setDeliveryList(prevState => {
            const itemUpdate = prevState.itemsDelivery.find(element => element.id === id);
            itemUpdate.units = value;
            return { ...prevState, itemUpdate };
        })
    }

    const listState = {
        itemsDelivery: [
            /* {
                id: '5e163cb9b45b8c4b5241c7fc',
                units: '1'
            },
            {
                id: '5e163cb9aa94be116d113cc7',
                units: '1'
            },
            {
                id: '5e163cb97c2bb4cbce13a6aa',
                units: '1'
            },
            {
                id: '5e163cb99469111ba6c8ad02',
                units: '1'
            },
            {
                id: '5e163cb95672ff9c7314b309',
                units: '1'
            } */
        ],
        removeItemDeliveryList,
        addItemDeliveryList,
        modifyQuantityItemDeliveryList
    }

    const [deliveryList, setDeliveryList] = useState(listState)

    return <DeliveryListContext.Provider value={deliveryList}>{children}</DeliveryListContext.Provider>
};

export default DeliveryListProvider;