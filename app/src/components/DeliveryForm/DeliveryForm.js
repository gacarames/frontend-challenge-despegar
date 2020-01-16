import React, { useState } from 'react';
import './DeliveryForm.scss';
import InputForm from '../InputForm/InputForm';

function DeliveryForm() {

  const formInitialState = {
    userId: '',
    name: '',
    lastName: '',
    address: '',
    floor: '',
    apartment: ''
  }

  const [formValues, setFormValues] = useState(formInitialState)

  function handleOnChange({ target: { name, value } }) {
    return setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const { userId, name, lastName, address, floor, apartment } = formValues

  function handleSubmit(event) {
    console.log('submit form address')
    event.preventDefault();
  }

  return (
    <div className="delivery-form">
      <h3 className="delivery-form_heading">Completa tus datos</h3>
      <form onSubmit={handleSubmit} className="delivery-form__form">

        <InputForm
          type="text"
          label="Nombre"
          name="name"
          value={name}
          onChange={handleOnChange}
        />
        <InputForm
          type="text"
          label="Apellido"
          name="lastName"
          value={lastName}
          onChange={handleOnChange}
        />
        <InputForm
          type="text"
          label="Dirección"
          name="address"
          value={address}
          onChange={handleOnChange}
        />
        <InputForm
          type="text"
          label="Piso"
          name="floor"
          value={floor}
          onChange={handleOnChange}
        />
        <InputForm
          type="text"
          label="Departamento"
          name="apartment"
          value={apartment}
          onChange={handleOnChange}
        />
        {/* <InputForm type="submit" name="submit" value="Enviar" /> */}
      </form>
    </div>
  )
}

export default DeliveryForm;
