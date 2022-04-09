import React from 'react';
import Text from './Text';
import Textbox from './Textbox';
import Curr from './Curr';
import Buttons from './Buttons';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      textarea: '',
      cidade: '',
      estado: '',
      rate: '',
      resumo: '',
      cargo: '',
      descricao: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Curriculum Vitae</h1>
        <fieldset>
          <Text handleChange={this.handleChange} />
          <Textbox handleChange={this.handleChange}/>
        </fieldset>
        <fieldset>
          <Curr handleChange={this.handleChange}/>
        </fieldset>
        <Buttons />
      </div>
      
    );
  }
}

export default App;
