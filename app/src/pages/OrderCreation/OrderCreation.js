import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { HOST } from "../../api";
/* import { Route } from "react-router-dom"; */
import './OrderCreation.scss';

import Loading from "../../components/Loading/Loading";
import {
  Section,
  Column
} from "../../components/Layout/Layout";

import MenuList from '../../components/MenuList/MenuList'

/* import Image from "../../components/Image/Image";
import ShortDescription from "../../components/ShortDescription/ShortDescription";
import Button from "../../components/Button/Button";
import ProductDescription from "../../components/ProductDescription/ProductDescription"; */

function OrderCreation() {

  const { id } = useParams();

  const { data, loading, error } = useFetch(`${HOST}/api/restaurants/${id}`);

  const {menu_list} = data

  console.log(menu_list)

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <Section section="detail" styled="card" layout="two-cols">
        <Column> 
          <h2>Col left</h2>
          <MenuList menu={menu_list}/>
          {/* <Image picture={item.picture} block="detail" /> */}
        </Column>

        <Column>
        <h2>Col right</h2>
          {/* <ShortDescription description={item} /> */}
          {/* <Button typeAction="compra" styleButton="primary" itemData={item} /> */}
          
        </Column>
      </Section>
    </>
  );
}

export default OrderCreation;
