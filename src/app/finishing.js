'use client' // next por default trabaja desde el lado del servidor y asi no me deja usar usestate... por eso con esta linea trabajo desde el lado del client

import React from "react";
import styles from "./page.module.css";
import { useState, useEffect } from "react";


export default function FinishingUp({setComponent, setback, setnext, total,plan , planFi,  planT, planP, arrayVentajas  }) {

   
  const [ sumatoria, setSumatoria ] = useState(0) 

  useEffect(() => {
     
 for (let i = 0; i < arrayVentajas.length ; i++) {

      setSumatoria( planP += arrayVentajas[i].value )

    }

  }) // con este loop en un useffect agarro todos los valores del array  arrayventajas.value, y los coloco dentro del usestate setsumatoria sumandolos al hook planP



let back = () => {
   setComponent("Esce3")
   setnext({display : "flex"}) 
   setback({display : "flex"}) 
}


let confirm = () => {
  setComponent("Esce5")
}

  return (
    <div className={styles.mainCompo} >
       <section className={styles.header}>
             <h1>Finishing Up</h1>
             <p>Double-check everything looks OK before confirming.</p>
        </section>
        <section>
               <article className={styles.Fplan} >
                   <h2>{planT}   { planFi}</h2>
                   <h2>{"$" + planP}{plan}</h2>
               </article>           
               {arrayVentajas?.map( ( ventajas, i ) =>
                 <article className={styles.Fservicios}>
                      <h4 key={i} >{ventajas.name}</h4>
                      <p> <span>+$</span> {ventajas.value} {plan}</p>
      
                  </article>
               )}
    
        </section>
        <section className={styles.Ftotal}>
              <p>total<span>{total}</span></p>
              <h2>{sumatoria}<span>{plan}</span></h2>
        </section>
        <section className={styles.Fbotones}>
               <button  className={styles.back} onClick={back}>Go Back</button>
                <button  className={styles.confirm} onClick={confirm}  >Confirm</button>
        </section>
    </div>
  );
}
