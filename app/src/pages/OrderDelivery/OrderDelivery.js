import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { HOST } from "../../api";
import { Link } from "react-router-dom";
import './OrderDelivery.scss';
import Loading from "../../components/Loading/Loading";
import {
  Section,
  Column
} from "../../components/Layout/Layout"
import DeliveryList from '../../components/DeliveryList/DeliveryList'
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm'
import GoBack from '../../components/GoBack/GoBack'

function OrderDelivery() {

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
          <DeliveryForm />
        </Column>
        <Column>
          <DeliveryList delivery={menu_list} />
        </Column>
      </Section>
      <Section section="order-creation">
        <Column>
          <GoBack />
          <Link to="/order-delivery" >
            <button>Continuar</button>
          </Link>
        </Column>
      </Section>
    </>
  );
}

export default OrderDelivery;
