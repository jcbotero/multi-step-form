'use client' // next por default trabaja desde el lado del servidor y asi no me deja usar usestate... por eso con esta linea trabajo desde el lado del client

import React from "react";
import styles from "./page.module.css";
import { useState, useEffect } from "react";


export default function SelectPlan({setPrecioV, setPrecioV2, setPrecioV3, setPlan, setTotal, plan,  setPlanFinish, setPlanType, setPlanP }) {



    const [ valuePlan, setValuePlan] = useState(9)
    const [ valuePlan2, setValuePlan2] = useState(12)
    const [ valuePlan3, setValuePla3] = useState(15)
 


let plan1 = () => {
    document.getElementById("plan1").style.border = " 0.07cm solid hsl(243, 100%, 62%)"
    document.getElementById("plan2").style.border = "0.05cm solid gray"
    document.getElementById("plan3").style.border = "0.05cm solid gray"
    setPlanType("Arcade")
    setPlanP(valuePlan)
   
}

let plan2 = () => {
    document.getElementById("plan1").style.border = "0.05cm solid gray"
    document.getElementById("plan2").style.border = " 0.07cm solid hsl(243, 100%, 62%)"
    document.getElementById("plan3").style.border = "0.05cm solid gray"
    setPlanType("Advanced")
    setPlanP(valuePlan2)
  
}
let plan3 = () => {
    document.getElementById("plan1").style.border = "0.05cm solid gray"
    document.getElementById("plan2").style.border = "0.05cm solid gray"
    document.getElementById("plan3").style.border = " 0.07cm solid hsl(243, 100%, 62%)"
    setPlanType("Pro")
    setPlanP(valuePlan3)
} // estos tres son para cambar el border del los planes segun en el cual se haga click

   

let input2 = () => {
   document.getElementById("one").style.backgroundColor = "hsl(223, 31%, 20%)"
   document.getElementById("two").style.backgroundColor = "hsl(0, 9%, 96%)"
   document.getElementById("year").style.color =  " hsl(213, 96%, 18%)"
   document.getElementById("month").style.color =  " hsl(231, 11%, 63%)"
   setValuePlan(90)
   setValuePlan2(120)
   setValuePla3(150)
   setPrecioV(10)
   setPrecioV2(20)
   setPrecioV3(20)
   setPlan("/yr")
   setTotal("(per year)")
   setPlanFinish("(Yearly)")
   document.getElementById("plan1").style.border = "0.05cm solid gray"
   document.getElementById("plan2").style.border = "0.05cm solid gray"
   document.getElementById("plan3").style.border = "0.05cm solid gray"
  
}

let input1 = () => {
    document.getElementById("one").style.backgroundColor = "hsl(0, 9%, 96%)"
    document.getElementById("two").style.backgroundColor =  "hsl(223, 31%, 20%)"
    document.getElementById("year").style.color =  " hsl(231, 11%, 63%)"
    document.getElementById("month").style.color =  " hsl(213, 96%, 18%)" 
    setValuePlan(9)
   setValuePlan2(12)
   setValuePla3(15)
   setPrecioV(1)
   setPrecioV2(2)
   setPrecioV3(2)
   setPlan("/mo")
   setTotal("(per month)")
   setPlanFinish("(Monthly)")
   document.getElementById("plan1").style.border = "0.05cm solid gray"
   document.getElementById("plan2").style.border = "0.05cm solid gray"
   document.getElementById("plan3").style.border = "0.05cm solid gray"
} // estos ultimos dos son para cambiar los colores del toggle button dependiendo donde de click




  return (
    <div className={styles.mainCompo}>
         <section className={styles.header}>
             <h1>Select your plan</h1>
             <p>You have the option of monthly or year billing</p>
        </section>
        <section className={styles.plan}>
             <article style={{ border : " 0.07cm solid blue"}} onClick={plan1} id="plan1">
                  <img src="./icon-arcade.svg" />
                  <div>
                      <h3>Arcade</h3>
                      <p>$<span>{valuePlan}</span><span>{plan}</span></p>
                  </div>
             </article>
             <article style={{ border : " 0.05cm solid gray"}} onClick={plan2} id="plan2">
                  <img src="./icon-advanced.svg" />
                  <div>
                      <h3>Advanced</h3>
                      <p>$<span>{valuePlan2}</span><span>{plan}</span></p>
                  </div>
             </article>
             <article style={{ border : " 0.05cm solid gray"}} onClick={plan3} id="plan3">
                  <img src="./icon-pro.svg" />
                  <div>
                      <h3>Pro</h3>
                      <p>$<span>{valuePlan3}</span><span>{plan}</span></p>
                  </div>
             </article>
        </section>
        <section className={styles.moYe}>
                <h4 style={{color : " hsl(213, 96%, 18%)"}} id="month" >Monthly</h4>
                <div className={styles.toggle} id="toggle">
                      <input onClick={input1}  type="radio" name="toggle" id="one" className={styles.one} />
                      <input onClick={input2} style={{backgroundColor : "hsl(223, 31%, 20%)" }} id="two" type="radio" name="toggle" className={styles.two}  />
               </div> 
                <h4 id="year" style={{color : " hsl(231, 11%, 63%)"}} >Yearly</h4>
        </section>
    </div>
  );
}
