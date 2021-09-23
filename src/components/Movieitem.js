import React from 'react'

function movieitem({item}) {
    const baseurl = "https://image.tmbd.org/t/p/w500/"
    return (
        <div  className="card">
            <img src={`${baseurl}${item.poster_path}`} className="img-fluid" alt="Image" />
            <div className="cardbody">
                <h3>Rating:{item.vote_average}</h3>
                <h3>Voting:{item.vote_count}</h3>
            </div>
        </div>
    )
}

export default movieitem
