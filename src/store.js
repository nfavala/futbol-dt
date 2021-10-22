import { createStore } from "redux";

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Emiliano Martínez",
        foto: "https://s.hs-data.com/bilder/spieler/gross/192464.jpg?fallback=png"
    },
    {
        id: 2,
        nombre: "Nehuén Pérez",
        foto: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/07/02/15305441297975.jpg"
    },
    {
        id: 3,
        nombre: "Nicolás Tagliafico",
        foto: "https://img.a.transfermarkt.technology/portrait/big/131225-1513245039.jpg?lm=1"
    },
    {
        id: 4,
        nombre: "Walter Kannemann",
        foto: "https://www.analisisdigital.com.ar/sites/default/files/styles/noticias_front_desktop/public/imagenNoticiaDigital/kanne_0.jpg?itok=_enMzXd4"
    },
    {
        id: 5,
        nombre: "Lucas Ocampos",
        foto: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/Club-Atletico-de-Madrid-v-Sevilla-FC----La-Liga-4dba9d63868bfd3b9c221b7638506998.jpg"
    },
    {
        id: 6,
        nombre: "José Luis Palomino",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHF6kXWJjeUzxoRGmAf8MakAjageRrkRg1og&usqp=CAU"
    },
    {
        id: 7,
        nombre: "Emiliano Buendía",
        foto: "https://pbs.twimg.com/profile_images/1415631872164573185/p29pbDlr_400x400.jpg"
    },
    {
        id: 8,
        nombre: "Leandro Paredes",
        foto: "https://www.depo.com.ar/__export/1606497168108/sites/cronica/img/2020/11/27/leandro_paredes_2_crop1606497167577.jpg_792575817.jpg"
    },
    {
        id: 9,
        nombre: "Paulo Dybala",
        foto: "https://pbs.twimg.com/profile_images/1062767636180811776/-FBRcm-E.jpg"
    },
    {
        id: 10,
        nombre: "Alexis Mac Allister",
        foto: "https://www.depo.com.ar/__export/1625704655529/sites/cronica/img/2021/07/07/agencia-efe_multimedia_4168119_multimedia_photos_16217025_file.jpg_792575817.jpg"
    },
    {
        id: 11,
        nombre: "Eduardo Salvio",
        foto: "https://pbs.twimg.com/profile_images/1323458538614784004/fOsMYBrH.jpg"
    },
    {
        id: 12,
        nombre: "Sergio Agüero",
        foto: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Sergio_Ag%C3%BCero_2018.jpg"
    },
    {
        id: 13,
        nombre: "Ángel Di María",
        foto: "https://upload.wikimedia.org/wikipedia/commons/8/8c/NIG-ARG_%285%29.jpg"
    }
  ],

    titulares: [],
    suplentes: []
}

const reducer = (state = initialState, action) => {
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),                 //agrego al jugador al listado de titulares.
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id) //saco al jugador del listado de jugadores.
        }
    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return { 
            ...state,
            suplentes:state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    if(action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

return state;
}

 export default createStore(reducer);