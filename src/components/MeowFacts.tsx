'use client';

import React, { useEffect, useState } from 'react';
import styles from './MeowFacts.module.css';

export default function MeowFacts() {
  const [text, setText] = useState('Data Loadding...');

  useEffect(() =>{
    fetch('https://meowfacts.herokuapp.com')
    .then((res) => res.json())
    .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}

