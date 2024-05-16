import React from "react";
import "../course/Course.css"

function Course({course}) {

    const {id, title, description, price, image} = course;

    return(
        <div className="course" >
            <div>
                <img src={image} className="image" />
                <h4 className="courseTitle" >{title}</h4>
                <h5 className="courseText" >{description}</h5>
                <h3 className="priceText">{price}₺</h3>
            </div>
        </div>
    )
}

export default Course