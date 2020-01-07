import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./DetailProduct.scss";
import { HOST } from "../../api";
import Loading from "../../components/Loading/Loading";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {
  SectionWrapper,
  Column
} from "../../components/SectionWrapper/SectionWrapper";
import Image from "../../components/Image/Image";
import ShortDescription from "../../components/ShortDescription/ShortDescription";
import Button from "../../components/Button/Button";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

function DetailProduct() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(`${HOST}/api/items/${id}`);

  const { item } = data;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <SectionWrapper>
        <Breadcrumb category={item.category} />
      </SectionWrapper>

      <SectionWrapper section="detail" styled="card" layout="two-cols">
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
      </SectionWrapper>
    </>
  );
}

export default DetailProduct;
