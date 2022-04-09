import React from 'react';

class Curr extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <form>
        Resumo do currículo
        <br />
        <textarea
          name="resumo"
          placeholder="Digite aqui..."
          maxLength="1000"
          onChange={handleChange}>
        </textarea>
        <br />
        Cargo
        <br />
        <textarea
          name="cargo"
          placeholder="Digite aqui..."
          maxLength="40"
          onChange={handleChange}>
        </textarea>
        <br />
        Descrição do cargo
        <br />
        <textarea
          name="descricao"
          placeholder="Digite aqui..."
          maxLength="500"
          onChange={handleChange}>
        </textarea>
      </form>
    );
  }
}

export default Curr;
