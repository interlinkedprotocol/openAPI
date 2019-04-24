import React, { Component } from 'react';
import SwaggerUi, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

export default class App extends Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: '#swaggerContainer',
      url: `./swagger.yaml`,
      presets: [presets.apis],
    });
  }


  render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}