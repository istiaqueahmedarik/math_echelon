import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Echelon form generator </title>
        <meta name="description" content="Echelon form generator " />
        
<meta name="title" content="Echelon form generator "/>
<meta name="description" content="Easily create Echelon equation "/>


<meta property="og:type" content="website"/>
<meta property="og:url" content="https://mathechelon.vercel.app/"/>
<meta property="og:title" content="Echelon form generator"/>
<meta property="og:description" content="Easily create Echelon equation"/>
<meta property="og:image" content="https://og-image.vercel.app/Echelon%20form%20generator%20.jpeg?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc3%2FPython-logo-notext.svg%2F800px-Python-logo-notext.svg.png"/>

<meta property="twitter:card" content="Echelon form generator"/>
<meta property="twitter:url" content="https://mathechelon.vercel.app/"/>
<meta property="twitter:title" content="Easily create Echelon equation"/>
<meta property="twitter:description" content="Easily create Echelon equation - Gaussian Elimination method"/>
<meta property="twitter:image" content="https://og-image.vercel.app/Echelon%20form%20generator%20.jpeg?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc3%2FPython-logo-notext.svg%2F800px-Python-logo-notext.svg.png"/>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div className='home__container'>
        <Main/>
        <div className='home_image'>
        <Image src="/main.svg" width={1024} height={1224} alt="main_svg"/>

        </div>
      </div>

      
    </div>
  )
}
