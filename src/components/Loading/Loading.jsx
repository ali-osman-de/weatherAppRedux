import React from 'react'

function Loading() {
    return (
        <div className="d-flex justify-content-center m-5 p-5">
            <div className="spinner-border text-info" style={{ height: "75px", width: "75px" }} role="status">
                <span className="visually-hidden" >
                    Loading...
                </span>
            </div>
        </div>
    )
}

export default Loading