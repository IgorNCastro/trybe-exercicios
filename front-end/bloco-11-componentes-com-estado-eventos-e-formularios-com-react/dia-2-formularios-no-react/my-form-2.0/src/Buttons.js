import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button type="submit" name="enviar">Enviar</button>
        <button type="submit" name="limpar">Limpar</button>
      </div>
    );
  }
}

export default Buttons;
