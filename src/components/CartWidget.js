function CartWidget({icono, notificacion}){
    return(
        <div>
            <img src={icono}/>
            <h3>{notificacion}</h3>
        </div>
    )
}

export default CartWidget;