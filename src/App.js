import React, { Component } from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default () => <SwaggerUI url="./swagger.yaml" />