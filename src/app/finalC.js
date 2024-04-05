'use client' // next por default trabaja desde el lado del servidor y asi no me deja usar usestate... por eso con esta linea trabajo desde el lado del client

import React from "react";
import styles from "./page.module.css";
import { useState, useEffect } from "react";


export default function FinalC() {

    const [ ventajaSele, setVentaja ] = useState(true) 


  return (
    <div className={styles.Fcompo}>
        <section  id={styles.final}>
             <img src="/icon-thank-you.svg" />
             <h1>Thank you!</h1>
             <p>Thanks for confirming your subscription! We hope you have fun using our platform. If your ever need support, please feel free to email us at support@loremgaming.com</p>
       </section>
    </div>
  );
}
