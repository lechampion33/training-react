import * as React from 'react'
// import ReactDOM  from 'react-dom'

function Error(){
    return(
        <div role='alert'>
            <City />
            <Country />
        </div>
    )
}

function ErrorHandling({error}){
    return(
    <>
        <p>An error occurred</p>
        <pre>{error.message}</pre>
    </>
    )
}

function City({name}){
    try{
        return <div>hi anantha vijay{name.toUpperCase()}</div>
    }
    catch (error){
        return <ErrorHandling error={error} />
    }
}

function Country(name){
    try{
        return<div>HI ANANTHA VIJAY{name.toLowerCase()}</div>
    }
    catch(error){
        return <ErrorHandling error={error}/>
    }

}

export default Error;