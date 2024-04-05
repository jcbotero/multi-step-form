'use client' // next por default trabaja desde el lado del servidor y asi no me deja usar usestate... por eso con esta linea trabajo desde el lado del client

import React from "react";
import styles from "./page.module.css";
import YourInfo from "./yourInfo";
import SelectPlan from "./SelectPlan";
import { useState, useEffect } from "react";
import AddOns from "./addOns";
import FinishingUp from "./finishing";
import FinalC from "./finalC";


export default function Home() {


    const [ component, setComponent ] = useState( "Esce1" ) 
    
    const [ next, setnext ] = useState( {display : "none"} ) // usestate para darle un stylo oculto al principio al boton de next component
    const [ back, setback ] = useState( {display : "none"} ) 


    
    const [ precioVentaja, setPrecioV ] = useState(1) // estos usestate son para comunicar dos childs desde el parent.... aqui en el parent se declaran... a un child envio el hook y al otro child el state para cambiarlo
    const [ precioVentaja2, setPrecioV2 ] = useState(2) // estos son para cambiar precios de las ventajas del component addons
    const [ precioVentaja3, setPrecioV3 ] = useState(2)

    
    const [ plan , setPlan ] = useState ("/mo") // estos usestate son para comunicar dos childs desde el parent.... aqui en el parent se declaran... a un child envio el hook y al otro child el state para cambiarlo
                                                // estos son para cambiar el plan de "mo" meses a años y viceversa



     const [ total, setTotal ] = useState("(per month)") 
     const [ totalV, setTotalV ] = useState() 


     const [ planFi, setPlanFinish ] = useState("(Monthly)") 
     const [ planT, setPlanType ] = useState("Arcade") 
     const [ planP, setPlanP ] = useState(9)  




     const [ arrayVentajas, SetArrayV] = useState([{
                                                    name : "",
                                                    value : " "
                                                }]) // este state sera una array de objects que servira para incluir las ventajas que elija el usuario con sus campos y luego mapearla en el componente final
     
    
    
  let nextComponent = () => {
   
       if (component === "Esce2" &&  < SelectPlan />) {
         setComponent( "Esce3" ) 
       
      } else if (component === "Esce3" &&  < AddOns />) {
        setComponent( "Esce4" ) 
        setnext({display : "none"}) 
        setback({display : "none"})
     }

  }  // este hangleclick hace que al darle click al boton.. me cambie el componente a renderizarse segun el que esté actualmente

  let backComponent = () => {
   
    if (component === "Esce4" &&  < FinishingUp /> ) {
        setComponent( "Esce3" ) 
        setnext({display : "flex"}) 
    
      } else if (component === "Esce3" &&  < AddOns />) {
         setComponent( "Esce2" ) 

      } else if (component === "Esce2" &&  < SelectPlan />) {
        setComponent( "Esce1" ) 
        setback({display : "none"})
        setnext({display : "none"}) 
     }

  }  // este hangleclick hace lo mismo que la function anterior pero devolviendo los componentes hacia atras


  useEffect(() => {

    if (component === "Esce5" && < FinalC   />) {
      document.getElementById("menu").style.display = "none"
    
    }
  
     }) // con este loop en un useffect agarro todos los valores del array  arrayventajas.value, y los coloco dentro del usestate setsumatoria sumandolos al hook planP
   

  return (
    <main className={styles.main}>
         <section className={styles.menu} id="menu" >
            <article>
                  <div>
                      <button className={ component === "Esce1" ? styles.botonActual : styles.boton} >1</button> {/* asi uso un condicional para la classname dependiendo del componente renderizado... si un componente esta renderizado me pone una classname u otra */}
                  </div>
                  <div className={styles.steps}>
                      <h3>STEP 1</h3>
                      <h2>YOUR INFO</h2>
                  </div>
            </article>  
            <article>
                  <div>
                      <button className={ component === "Esce2" ? styles.botonActual : styles.boton} >2</button> {/* asi uso un condicional para la classname dependiendo del componente renderizado... si un componente esta renderizado me pone una classname u otra */}
                  </div>
                  <div className={styles.steps}>
                      <h3>STEP 2</h3>
                      <h2>SELECT PLAN</h2>
                  </div>
            </article>  
            <article>
                  <div>
                      <button className={ component === "Esce3" ? styles.botonActual : styles.boton} >3</button> {/* asi uso un condicional para la classname dependiendo del componente renderizado... si un componente esta renderizado me pone una classname u otra */}
                  </div>
                  <div className={styles.steps}>
                      <h3>STEP 3</h3>
                      <h2>ADD-ONS</h2>
                  </div>  
            </article>  
            <article>
                   <div>
                      <button className={ component === "Esce4" ? styles.botonActual : styles.boton} >4</button> {/* asi uso un condicional para la classname dependiendo del componente renderizado... si un componente esta renderizado me pone una classname u otra */}
                  </div>
                  <div className={styles.steps}>
                      <h3>STEP 4</h3>
                      <h2>SUMMARY</h2>
                  </div>
              </article>  
         </section>
         <section className={styles.componentes} >
         { component === "Esce1" && < YourInfo setComponent={setComponent}  setnext={setnext } setback={setback}  />} {/* aqui declaro todos los componente para decirle al hook componente que Esce1 es igual al escenario 1... Esce2 al escenario 2... y así  */}
         { component === "Esce2" && < SelectPlan setPrecioV={setPrecioV} setPrecioV2={setPrecioV2} setPrecioV3={setPrecioV3} setPlan={setPlan} setTotal={setTotal} plan={plan}  setPlanFinish={ setPlanFinish} setPlanType={setPlanType}  setPlanP={ setPlanP} />}
         { component === "Esce3" && < AddOns precioVentaja={precioVentaja} precioVentaja2={precioVentaja2}  precioVentaja3={precioVentaja3} plan={plan} SetArrayV={SetArrayV} arrayVentajas={arrayVentajas}/>}
         { component === "Esce4" && < FinishingUp total={total} plan={plan} setComponent={setComponent} setback={setback} setnext={setnext }   planFi={ planFi}  planT={planT} planP={planP} arrayVentajas={arrayVentajas}/>}
         { component === "Esce5" && < FinalC   />}
            <article className={styles.control}>
                <button id="back" className={styles.back} onClick={backComponent} style={back}>Go Back</button>
                <button id="next" className={styles.next} onClick={nextComponent} style={next} >Next Step</button>
            </article>
         </section>
    </main>
  );
}
