import React, { Component, ErrorInfo } from 'react'
import { Link, Redirect} from '@reach/router'

class ErrorBoundary extends Component {
    public state = { hasError: false, redirected: false}
    public static getDerivedStateFromError() {
        return { hasError: true }; 
    }
    public componentDidUpdate(){
        if (this.state.hasError) {
            setTimeout(() => this.setState({redirected: true}), 5000);
        }
    }
    public componentDidCatch(error: Error, info:ErrorInfo) {
        console.error("ErrorBoundary caught an error", error, info);
      }
      public render() {
          if (this.state.redirected) {
              // eslint-disable-next-line react/jsx-no-undef
              return <Redirect to="/" />;
          }
        if (this.state.hasError) {
          return (<h1>Something went wrong.
              <Link to="/">Click here</Link>
              {""} to go back to the homepage.
          </h1>);
        }
    
        return this.props.children; 
      }
    }
export default ErrorBoundary;

  
