import React, { useState } from 'react';
import './DeliveryForm.scss';
import InputForm from '../InputForm/InputForm';

function DeliveryForm(props) {

  const formInitialState = {
    name: '',
    lastName: '',
    address: '',
    floor: '',
    apartment: ''
  }

  const [formValues, setFormValues] = useState(formInitialState)

  function handleOnChange({ target: { name, value } }) {
    setFormValues({
      ...formValues,
      [name]: value
    });
    props.GetFormValues(formValues)
  }

  const { name, lastName, address, floor, apartment } = formValues

  return (
    <div className="delivery-form">
      <h3 className="delivery-form__heading">Completa tus datos:</h3>
      <form className="delivery-form__form">
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
      </form>
    </div>
  )
}

export default DeliveryForm;
