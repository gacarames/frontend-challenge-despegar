import React, { useContext, useState } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { HOST } from "../../api";
import './OrderDelivery.scss';
import Loading from "../../components/Loading/Loading";
import { Section, Column } from "../../components/Layout/Layout"
import DeliveryList from '../../components/DeliveryList/DeliveryList'
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm'
import GoBack from '../../components/GoBack/GoBack'
import Modal from '../../components/Modal/Modal';
import DeliveryListContext from "../../context/appContext";

function OrderDelivery() {

  const { itemsDelivery } = useContext(DeliveryListContext);

  const [userDeliveryData, setUserDeliveryData] = useState({})

  const [newOrder, setNewOrder] = useState({})

  const [showModal, setShowModal] = useState(false)

  const { id } = useParams();

  const { data, loading, error } = useFetch(`${HOST}/api/restaurants/${id}`);

  const { menu_list } = data

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  let filteredArray = menu_list.filter(array_el => {
    return (
      itemsDelivery.filter(anotherOne_el => {
        return anotherOne_el.id === array_el.id;
      }).length === 1
    );
  });

  let mergedArray = filteredArray.map((array_fil_el, index) => {
    return { ...array_fil_el, ...itemsDelivery[index] };
  });

  function CallbackFormValues(valueFromChild) {
    setUserDeliveryData(valueFromChild);
  }

  function handleSubmitData() {
    setNewOrder({
      ...newOrder,
      order: mergedArray,
      user: userDeliveryData
    })
    setShowModal(true)
  }



  return (
    <>
      <Section section="order-delivery" layout="two-cols">
        <Column styled="card bg-brand-color">
          <DeliveryForm GetFormValues={CallbackFormValues} />
        </Column>
        <Column styled="card">
          <DeliveryList delivery={{ mergedArray }} />
        </Column>
      </Section>
      <Section section="navigation">
        <Column styled="card juatify-end">
          <GoBack />
          <button
            onClick={handleSubmitData}
            className="button button--primary"
          >
            Enviar Orden
            </button>
        </Column>
      </Section>
      <Modal newOrder={newOrder} show={showModal} />
    </>
  );
}

export default OrderDelivery;
