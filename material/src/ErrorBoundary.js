import React from "react";

export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={error: null,errorInfo: null};
    }
    componentDidCatch(error,errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo

        })
    }
    render(){
        if (this.state.errorInfo){
            return(
                <>
                <h2>an error occured</h2>
                <details>
                    {this.state.error && this.state.error.toString()}
                    <br/>
                    {this.state.errorInfo.ComponentStack}
                </details>
                </>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;