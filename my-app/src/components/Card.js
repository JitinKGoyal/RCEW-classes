import React from 'react'

function Card(props) {

    // console.log(e.title);

    return (
        <>

            {/* {e.imgSrc &&
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={e.imgSrc} />
                    <div className="card-body">
                        <h5 className="card-title">{e.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            }
            {!e.imgSrc && <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="https://dlcdnrog.asus.com/rog/media/1610705538274.webp" />
                <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>} */}


            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={props?.data?.imgSrc ? props?.data?.imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAc7kkJUrozIpazRcQvS5A3BIngi6pIRcgFxINRsc&s"} />
                <div className="card-body">
                    <h5 className="card-title">{props?.data?.title}</h5>
                    <p className="card-text">{props?.data?.desc}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </>
    )
}

export default Card