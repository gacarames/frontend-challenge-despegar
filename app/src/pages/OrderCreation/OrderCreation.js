import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { HOST } from "../../api";
import { Route } from "react-router-dom";
import './OrderCreation.scss';

import Loading from "../../components/Loading/Loading";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {
  Section,
  Column
} from "../../components/Layout/Layout";
import Image from "../../components/Image/Image";
import ShortDescription from "../../components/ShortDescription/ShortDescription";
import Button from "../../components/Button/Button";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

function OrderCreation() {

  const { id } = useParams();

  const { data, loading, error } = useFetch(`${HOST}/api/restaurants/${id}`);

  const { item } = data;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <Section>
        <Breadcrumb category={item.category} />
      </Section>

      <Section section="detail" styled="card" layout="two-cols">
        <Column>
          <Image picture={item.picture} block="detail" />
        </Column>

        <Column>
          <ShortDescription description={item} />
          <Button typeAction="compra" styleButton="primary" itemData={item} />
        </Column>

        <Column>
          <ProductDescription content={item.description} />
        </Column>
      </Section>
    </>
  );
}

OrderCreation.propTypes = {};

OrderCreation.defaultProps = {};

export default OrderCreation;
