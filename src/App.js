import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CarritoCompras from "./imagenes/carrito de compras.ico"
import CartWidget from "./components/CartWidget";

function App(){
    return(
            <div>
                <NavBar brand="Electronic Sans" categoria1="Productos electrónicos" categoria2 ="Productos nuevos"/>
                    <CartWidget icono={CarritoCompras} notificacion="123"/>
                <ItemListContainer mensaje="Bienvenidos a Electronic Sans"/>
            </div>
    )
}

export default App;