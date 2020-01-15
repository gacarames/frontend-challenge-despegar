import React, {useContext} from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { HOST } from "../../api";
import './OrderDelivery.scss';
import Loading from "../../components/Loading/Loading";
import {
  Section,
  Column
} from "../../components/Layout/Layout"
import DeliveryList from '../../components/DeliveryList/DeliveryList'
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm'
import GoBack from '../../components/GoBack/GoBack'
import InputForm from '../../components/InputForm/InputForm';
import Modal from '../../components/Modal/Modal';

import DeliveryListContext from "../../context/appContext";

function OrderDelivery() {

  const { id } = useParams();

  const { data, loading, error } = useFetch(`${HOST}/api/restaurants/${id}`);

  const { menu_list } = data

// test level up state

const { itemsDelivery } = useContext(DeliveryListContext);

/* let filteredArray = menu_list.filter(function(array_el) {
  return (
    itemsDelivery.filter(function(anotherOne_el) {
      return anotherOne_el.id === array_el.id;
    }).length === 1
  );
});

let mergedArray = filteredArray.map((array_fil_el, index) => {
  if (array_fil_el.id === itemsDelivery[index].id) {
    return { ...array_fil_el, ...itemsDelivery[index] };
  }
});

let totalOrderCost = filteredArray.reduce(
  (total, item) => total + item.price,
  0
); */

console.log(menu_list)
console.log(itemsDelivery)

// fin test level up state

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <Section section="order-creation" styled="card" layout="two-cols">
        <Column>
          <DeliveryForm />
        </Column>
        <Column>
          <DeliveryList /* delivery={{filteredArray, totalOrderCost}} */ />
        </Column>
      </Section>
      <Section section="order-creation">
        <Column>
          <GoBack />
          {/* <Link to="/order-delivery" ></Link> */}
            <InputForm type="submit" name="submit" value="Enviar"/>
        </Column>
      </Section>
      <Modal/>
    </>
  );
}

export default OrderDelivery;
