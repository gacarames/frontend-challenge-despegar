import React from 'react';
import './DeliveryForm.scss';

function DeliveryForm() {

  return (

    <div className="delivery-form">
      <form /* onSubmit={this.handleSubmit} */>
        <div className="delivery-form__group">
          <label>Nombre:</label>
          <input type="text" />
        </div>
        <div className="form__group">
          <label>Apellido:</label>
          <input type="text" />
        </div>
        <div className="form__group">
          <label>Calle:</label>
          <input type="text" />
        </div>
        <div className="form__group">
          <label>Numero:</label>
          <input type="text" />
        </div>
        <div className="form__group">
          <label>Puerta:</label>
          <input type="text" />
        </div>
        <div className="form__group">
          <input type="submit" value="Submit" />
        </div>
      </form>

    </div>
  )
}

export default DeliveryForm;
