import React from 'react';
import './DeliveryForm.scss';

import InputForm from '../InputForm/InputForm';

function DeliveryForm() {

  function handleSubmit(event) {
    console.log('submit form address')
    event.preventDefault();
  }

  return (
    <div className="delivery-form">      
      <h3 className="delivery-form_heading">Completa tus datos</h3>
      <form onSubmit={handleSubmit} className="delivery-form__form">
      <InputForm type="text" label="Nombre" name="name"/>
      <InputForm type="text" label="Apellido" name="lastName"/>
      <InputForm type="text" label="Dirección" name="address"/>
      <InputForm type="text" label="Piso" name="floor"/>
      <InputForm type="text" label="Departamento" name="apartment"/>
      <InputForm type="submit" name="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default DeliveryForm;
