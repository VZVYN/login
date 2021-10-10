import React from 'react'
import ReactJson from 'react-json-view'
import "./View.css"
function View({data}) {
    return (
        <div className="view">
        <h1 className="view__title">User Data:</h1>
        <ReactJson className="view__content" name="user-data" enableClipboard={false} src={data}/>
        </div>
    )
}

export default View
