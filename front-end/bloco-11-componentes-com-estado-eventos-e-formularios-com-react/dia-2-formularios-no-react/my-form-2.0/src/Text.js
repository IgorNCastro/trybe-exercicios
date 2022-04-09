import React from 'react';

class Text extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <form>
        Dados Pessoais:
        <br />
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          maxLength="40"
          onChange={handleChange}>
        </input>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          maxLength="50"
          onChange={handleChange}>
        </input>
        <br />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          maxLength="11"
          onChange={handleChange}>
        </input>
      </form>
    );
  }
}

export default Text;
