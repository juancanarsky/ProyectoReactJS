import ProfileCard from "./components/ProfileCard";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CarritoCompras from "./imagenes/carritodecompras.ico"
import CartWidget from "./components/CartWidget";
import JoystickAzul from "./imagenes/azul 2.webp"
import JoystickRojo from "./imagenes/rojo 2.webp"
import JoystickDorado from "./imagenes/dorado 2.webp"
import JoystickPlateado from "./imagenes/plateado 2.webp"

import "bulma/css/bulma.css";

function App(){
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">Electronic Sans</h1>
                </div>
            </section>

                        <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="columns is-4">
                            <NavBar brand="Electronic Sans" categoria1="Productos electrónicos" categoria2 ="Productos nuevos"/>
                        </div>
                        <div className="columns is-4">
                            <CartWidget icono={CarritoCompras} notificacion="123"/>
                        </div>
                        <div className="columns is-4">
                            <ItemListContainer mensaje="Bienvenidos a Electronic Sans"/>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="columns is-3">
                            <ProfileCard titulo="Joystick Dorado" arroba="@JoystickDorado" img={JoystickDorado}/>
                        </div>
                        <div className="columns is-3">
                            <ProfileCard titulo="Joystick Plateado" arroba="@JoystickPlateado" img={JoystickPlateado}/>
                        </div>
                        <div className="columns is-3">
                        <ProfileCard titulo="Joystick Azul" arroba="@JoystickAzul" img={JoystickAzul}/>
                        </div>
                        <div className="columns is-3">
                        <ProfileCard titulo="Joystick Rojo" arroba="@JoystickRojo" img={JoystickRojo}/>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default App;