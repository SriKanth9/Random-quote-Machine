import React from 'react'

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
  this.state = {error:null,erroinfo:null}
  }


componentDidCatch(error,errorInfo){
//you can also log the error to an error reporting service
//logErrorToMyservice(error,errorInfo);
  this.setState({
    error:error,
    errorInfo:errorInfo
  })
  }

  render(){
    if(this.state.errorInfo){
//you can render any custom fallback UI
return (
  <div>
  <h1>Something went wrong.</h1>
  <details style={{whiteSpace:'pre-wrap'}}>
    {this.state.error && this.state.error.toString()}
    <br/>
    {this.state.errorInfo.componentStack}
    </details>
    </div>
    )
    }
return this.props.children;
  }
}

export default ErrorBoundary;