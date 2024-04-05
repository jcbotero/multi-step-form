'use client' // next por default trabaja desde el lado del servidor y asi no me deja usar usestate... por eso con esta linea trabajo desde el lado del client

import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
import { Validator } from "react";

export default function YourInfo({setComponent, setnext, setback }) {


    const [ name , setName ] = useState({display : "none"}) // usestate para que muestre o no el mensaje de error de los inputs en la form
    const [ mail , setMail ] = useState({display : "none"}) 
    const [ phone , setPhone ] = useState({display : "none"}) 


    let nameInvalid = () => {

     let input1 = document.getElementById("name")
     const validityState = input1.validity;

     if (validityState.valueMissing || validityState.typeMismatch  ) { // este code valida si hay texto ingresado por el usuario o no y que sea del tipo del input
        input1.setCustomValidity("  "); // para hacer que el mensaje de error no se muestre o quede vacío, pordría colocarlo directamente en onInvalid pero debo tambien colocar el code de abajo
        setName({display : "flex"})
      } else {
        setName({display : "none"})
      }
    
      input1.reportValidity();
    
    } // asi personalizo el mensaje de error de un input
        
    
   let mailInvalid = () => {
     
    let input2 = document.getElementById("mail")
    const validityState = input2.validity;

    if (validityState.typeMismatch || validityState.valueMissing ) { // este code valida si el texto ingresado por el usuario es congruente con el tipo del input
       input2.setCustomValidity("  "); // para hacer que el mensaje de error no se muestre o quede vacío, pordría colocarlo directamente en onInvalid pero debo tambien colocar el code de abajo
       setMail({display : "flex"})
     } else {
      setMail({display : "none"})  
     }
   
     input2.reportValidity();
   
   } // asi personalizo el mensaje de error de un input

   let phoneInvalid = () => {
     
    let input3 = document.getElementById("phonee")
    const validityState = input3.validity;

    if (validityState.valueMissing) {
       input3.setCustomValidity("  "); // para hacer que el mensaje de error no se muestre o quede vacío, pordría colocarlo directamente en onInvalid pero debo tambien colocar el code de abajo
       setPhone({display : "flex"})
     } else {
      setPhone({display : "none"})
     }
   
     input3.reportValidity();
   
   } // asi personalizo el mensaje de error de un input


    const mailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}" ;

   let submit = () => {

    let input1 = document.getElementById("name")
    const validityState = input1.validity;

    let input2 = document.getElementById("mail")
    const validityState2 = input2.validity;

    let input3 = document.getElementById("phonee")
    const validityState3 = input3.validity;


   if ( validityState.valueMissing || validityState2.valueMissing  || validityState3.valueMissing || validityState.typeMismatch || validityState2.typeMismatch ) {
       
   } else {
    setComponent("Esce2")
    setnext({display : "flex"}) 
    setback({display : "flex"})
   }

  }  // aqui chequeo de nuevo la validez de los inputs, para que si son validos, me despliuegue el segundo escenario y me muestre los botones para continuar con los demas

  return (
    <div className={styles.mainCompo}>
        <section className={styles.header}>
             <h1>Personal Info</h1>
             <p>Please provide your name, email address, and phone number</p>
        </section>
        <section className={styles.form}>
             <form id="form">
                <div>
                    <h4>Name <span style={name} >This field is required</span></h4>  
                    <input id="name" type="text"  placeholder="e.g. Stepehn King"  onInvalid= {nameInvalid}  required></input>
                </div> 
                <div>
                    <h4>Email Address <span  id="email" style={mail} >This field is required</span></h4>  
                    <input id="mail" placeholder="e.g. StephenKing@lorem.com" onInvalid={mailInvalid} type="email" pattern={mailPattern} required ></input>
                </div> 
                <div>
                    <h4>Phone Number <span id="phone" style={phone} >This field is required</span></h4>  
                    <input id="phonee" onInvalid={phoneInvalid}  type="number" placeholder="e.g. + 1 234 567 890" required></input>
                </div> 
                <div className={styles.subContainer}>
                    <input id={styles.submit} className={styles.submit} type="submit" onClick={submit} value="Next step"></input> 
                </div> 
            </form>        
        </section>
    </div>
  );
}
