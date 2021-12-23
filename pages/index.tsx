import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import animeb from '../animeb.json'

interface images {
  url:string[];
  thumbnailUrl:string;
}

export const makeThumbnail = () => {
  const url = animeb.map((item) => item.url);
  console.log('url',url);
  const thumbnailUrl = url.forEach(item => `https://capture.heartrails.com/350x250/shorten?${item}`);
  console.log('thumbnailUrl',thumbnailUrl);
  return thumbnailUrl;
}

const Home: NextPage = () => {

  return (
    <>
    {makeThumbnail()}
    <p>aaaaaaaaaaa</p>
    </>
  )
}

export default Home
