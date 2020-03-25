import React, { Component } from 'react'
import { Link} from '@reach/router'

class ErrorBoundary extends Component {
    state = { hasError: false}
    static getDerivedStateFromError() {
        return { hasError: true, redirected: false }; 
    }
    componentDidUpdate(){
        if (this.state.hasError) {
            setTimeout(() => this.setState({redirected: true}), 5000);
        }
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
      }
      render() {
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

  
