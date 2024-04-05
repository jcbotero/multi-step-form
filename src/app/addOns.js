'use client' // next por default trabaja desde el lado del servidor y asi no me deja usar usestate... por eso con esta linea trabajo desde el lado del client

import React from "react";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";


export default function AddOns({precioVentaja, precioVentaja2,  precioVentaja3, plan, SetArrayV, arrayVentajas}) {

    const [ ventajaSele, setVentaja ] = useState(true) 
    const [ ventajaSele2, setVentaja2 ] = useState(true) 
    const [ ventajaSele3, setVentaja3 ] = useState(true) 

    const [ valorVentajas, setValorV ] = useState(0) // este me da la sumatoria del valor de las ventajas

    
    const venataSe1 = useRef()
    const venataSe2 = useRef()
    const venataSe3 = useRef()

   
    let ventajasFixed = [] ;


    useEffect(() => { // en este useffect voy añadiendo objects a una array, dependiendo de la classname de chequeado o no un boton

        if ( ventajaSele === false ) {

            ventajasFixed.push({
                name: venataSe1.current.value  ,
                value: precioVentaja
             })

         SetArrayV(ventajasFixed)

        }  else {
           
            SetArrayV([{
                name : "",
                value : " "
              }])
        }

        if ( ventajaSele2 === false ) {
            
            ventajasFixed.push({
                name: venataSe2.current.value  ,
                value: precioVentaja2
             })
         SetArrayV(ventajasFixed)
        }  

        if ( ventajaSele3 === false ) {
            
            ventajasFixed.push({
                name: venataSe3.current.value  ,
                value: precioVentaja3
             })
    
         SetArrayV(ventajasFixed)
        }  
    })




    let botonMarked = () => {
        const currentState = ventajaSele;
        setVentaja( !currentState );

    } /* esta fucntion se me dispara al darle click al boton , me hace cambiar el state theme, y por tanto la classname de ese div*/
      

    let botonMarked2 = () => {
        const currentState = ventajaSele2;
        setVentaja2( !currentState );

    } /* esta fucntion se me dispara al darle click al boton , me hace cambiar el state theme, y por tanto la classname de ese div*/
      
    let botonMarked3 = () => {        
        const currentState = ventajaSele3;
        setVentaja3( !currentState );


    } /* esta fucntion se me dispara al darle click al boton , me hace cambiar el state theme, y por tanto la classname de ese div*/
      


    // mirar como puedo mostrar la array de ejemplo que tengo al final para asi tener pistas sobre lo que estoy haciendo mal
// sino buscar .push object inside hook array y mirar ultimo fav


  return (
    <div className={styles.mainCompo}>
        <section className={styles.header}>
             <h1>Pick add-ons</h1>
             <p>Add-ons help enhance your gaming experience.</p>
        </section>
        <section className={styles.ons}>
             <article className={styles.ventaja}> 
                 <button  onClick={botonMarked} className={ ventajaSele ? styles.BtnSele : styles.BtnNoSele}></button>
                 <div>
                     <input ref={venataSe1} value="Online service" />
                     <p>Acces to multiplayer game</p>
                 </div>
                 <h4>+$<span>{precioVentaja}</span><span>{plan}</span></h4>
             </article>
             <article className={styles.ventaja}> 
                 <button onClick={botonMarked2} className={ ventajaSele2 ? styles.BtnSele : styles.BtnNoSele}></button>
                 <div>
                     <input ref={venataSe2} value="Larger storage" />
                     <p>Extra 1TB of cloud save</p>
                 </div>
                 <h4>+$<span>{precioVentaja2}</span><span>{plan}</span></h4>
             </article>
             <article className={styles.ventaja}> 
                 <button onClick={botonMarked3} className={ ventajaSele3 ? styles.BtnSele : styles.BtnNoSele} ></button>
                 <div>
                     <input ref={venataSe3}  value=" Customizable Profile" />
                     <p>Custom theme on your profile</p>
                 </div>
                 <h4>+$<span>{precioVentaja3}</span><span>{plan}</span></h4>
             </article>
        </section>
    </div>
  );
}
