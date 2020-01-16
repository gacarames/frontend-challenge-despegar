import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { HOST } from "../../api";
import { Link } from "react-router-dom";
import './OrderCreation.scss';
import Loading from "../../components/Loading/Loading";
import {
  Section,
  Column
} from "../../components/Layout/Layout";
import MenuList from '../../components/MenuList/MenuList'
import DeliveryList from '../../components/DeliveryList/DeliveryList'
import GoBack from '../../components/GoBack/GoBack'
import DeliveryListContext from "../../context/appContext";


function OrderCreation() {

  const { itemsDelivery } = useContext(DeliveryListContext);

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
    //if (array_fil_el.id === itemsDelivery[index].id) {
    return { ...array_fil_el, ...itemsDelivery[index] };
    //}
  });

  return (
    <>
      <Section section="order-creation" styled="card" layout="two-cols">
        <Column>
          <MenuList menu={menu_list} />
        </Column>
        <Column>
          <DeliveryList delivery={{ mergedArray }} />
        </Column>
        <Column>
          <GoBack />
          <Link to={`/order-delivery/${id}`} >
            <button className="order-creation__button">Continuar</button>
          </Link>
        </Column>
      </Section>
    </>
  );
}

export default OrderCreation;
