import React from 'react';
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


function OrderCreation() {

  const { id } = useParams();

  const { data, loading, error } = useFetch(`${HOST}/api/restaurants/${id}`);

  const { menu_list } = data

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
          <MenuList menu={menu_list} />
        </Column>
        <Column>
          <DeliveryList delivery={menu_list} />
        </Column>
        <Column>
          <GoBack />
          <Link to={`/order-delivery/${id}`} >
            <button>Continuar</button>
          </Link>
        </Column>
      </Section>
    </>
  );
}

export default OrderCreation;
