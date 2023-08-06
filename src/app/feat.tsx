'use client'

import React from "react";
import { useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';
import styles from './page.module.css';

interface feat{
    head:string,
    desc:string,
    cl:string
    }

export function Feature({head,desc,cl}:feat){
    useEffect(() => {
        const tiltElement = document.querySelector('.aboutTile');
        if (tiltElement instanceof HTMLElement) {
      VanillaTilt.init(tiltElement, {
        max: 15,
        speed: 200,
        glare: true,
        "max-glare": 1,
        });
    }
    }, [cl]);
    return <div className={styles.aboutTile}>
      <div className={styles.hello}>
      <h3 className={styles.head}>{head}</h3>
      <h5 className={styles.desc}>{desc}</h5>
    </div>
    </div>
  }