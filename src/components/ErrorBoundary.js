import { useRouteError } from "react-router-dom";
import "../App.css";
import React, { Component } from 'react';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here or send it to an error tracking service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundary/>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
