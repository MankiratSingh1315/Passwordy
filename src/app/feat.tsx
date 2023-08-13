'use client'

import React from "react";
import { useEffect, useState } from "react";
import VanillaTilt from 'vanilla-tilt';
import styles from './page.module.css';
import { useRouter } from 'next/navigation'

interface feat{
    head:string,
    desc:string,
    cl:string
    }
// interface TiltContainerProps {
//   options?: VanillaTilt.Options;
// }
// const TiltContainer: React.FC<TiltContainerProps> = ({ children, options }) => {
//   const tiltRef = useRef<HTMLDivElement | null>(null);
//   useEffect(() => {
//     if (tiltRef.current) {
//       const vanillaTilt = new VanillaTilt(tiltRef.current, options);
//       vanillaTilt.addEventListeners();
      
//       return () => {
//         vanillaTilt.removeEventListeners();
//       };
//     }
//   }, [options]);

//   return <div ref={tiltRef}>{children}</div>;
// };

export function Feature({head,desc,cl}:feat){
  const [tiltEnabled, setTiltEnabled] = useState(true);

  const handleTiltChange = () => {
    setTiltEnabled(!tiltEnabled);
  };
    // useEffect(() => {
    //     const tiltElement = document.querySelector('.aboutTile');
    //     if (tiltElement instanceof HTMLElement) {
    //   VanillaTilt.init(tiltElement, {
    //     max: 15,
    //     speed: 200,
    //     glare: true,
    //     "max-glare": 1,
    //     });
    // }
    // }, [cl]);
    return <div className={styles.aboutTile} >
      <div className={`${styles.cl}`}>
      <h3 className={styles.head}>{head}</h3>
      <h5 className={styles.desc}>{desc}</h5>
    </div>
    </div>
  }

export function Buttons(){
  const router = useRouter();
  return (
    <div className={styles.buttons}>
          <button className={styles.button} onClick={()=>router.push('/signup')}>Sign Up</button>
          <button className={styles.button} >Login</button>
    </div>
  );
}