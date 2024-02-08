function ProfileCard({titulo, arroba, img}){
    return (
        <div>
            <img src={img}/>
            <h3>{titulo}</h3>
            <p>{arroba}</p>
        </div>
    )
}

export default ProfileCard;