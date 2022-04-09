import React from 'react';

class Textbox extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <form>
        Endereço:
        <br />
        <textarea
          name="textarea"
          placeholder="Rua, número e complemento"
          maxLength="200"
          onChange={handleChange}>
        </textarea>
        <br />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          maxLength="28"
          onChange={handleChange}>
        </input>
        <br />
        <select name="estado" onChange={handleChange}>
          <option></option>
          <option>São Paulo</option>
          <option>Minas Gerais</option>
          <option>Mato Grosso do Sul</option>
          <option>Rio de Janeiro</option>
          <option>Ceará</option>
        </select>
        <div>
          Tipo imóvel:
          <br />
          <label htmlFor="rate1">
            <input
              type="radio"
              id="rate1"
              name="rate"
              value="Casa"
              onChange={handleChange}
              required />Casa
          </label>
          <label htmlFor="rate2">
            <input
              type="radio"
              id="rate2"
              name="rate"
              value="Apartamento"
              onChange={handleChange}
              required />Apartamento
          </label>
        </div>
      </form>
    );
  }
}

export default Textbox;
