'use client'

import React from "react";
import { useEffect, useState, useRef } from "react";
import VanillaTilt from 'vanilla-tilt';
import styles from './page.module.css';
import { useRouter } from 'next/navigation'
interface TiltedDivProps {
  children: React.ReactNode;
}

export const TiltedDiv: React.FC<TiltedDivProps> = ({ children }) => {
  const tiltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = tiltRef.current;

    if (currentRef) {
      VanillaTilt.init(currentRef, {
        max: 18,
        speed: 30,
        glare: true,
        'max-glare': 0.9,
      });
    }

    return () => {
      if (currentRef) {
        currentRef.style.transform = ''; // Reset the transformation
        currentRef.style.willChange = ''; // Reset will-change property
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className={styles.tilt}>
      {children}
    </div>
  );
};

export function Buttons(){
  const router = useRouter();
  return (
    <div className={styles.buttons}>
          <button className={styles.button} onClick={()=>router.push('/signup')}>Sign Up</button>
          <button className={styles.button} >Login</button>
    </div>
  );
}