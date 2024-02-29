import {useState} from "react";

function ProfileCard({titulo, arroba, img}){

    function handleClick(){
        setCount(count + 1);
    }

    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={img} alt="imagen"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title">{titulo}</h3>
                    <p className="subtitle">{arroba}</p>
                    <button onClick={handleClick} className="button is-succes is-fullwidth">+</button>
                    <p>Camtodad: {count}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;