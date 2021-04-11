import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'


export default function Home() {

  const [loading, setLoad] = useState(true)

  useEffect(() => {
    setLoad(false);
  }, [])

  return (
    <div className="bg-gradient-to-r margin-auto from-blue-400 to-indigo-500">
      <Head>
        <title>Piano con Diana</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <main className=" " >

        <div className=" h-screen flex flex-col py-16 sm:flex-row max-w-7xl mx-auto">

          <div className="flex-1 flex flex-col text-center justify-center items-center mx-auto px-8 py-5">
            <h2 className="text-sm text-indigo-200 font-semibold tracking-wide uppercase">Piano con Diana</h2>
            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-4xl">Coloque aqui un mensaje para motivar</h1>
            <p className="text-lg my-4 font-medium text-gray-100">
              Un subtitulo para acompañar a la invitacion
            </p>
            <Link href="/clase1" className="">
              <div className="cursor-pointer rounded-md lg:w-1/2 shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Ir a la Clase 1
            </div></Link>
          </div>

          <div className={`flex-1  flex justify-center lg:items-center `}>

            {loading ?
              <div className=" p-12">
                <div class=" rounded-full bg-light-blue-400 h-12 w-12">
                  <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div> :
              <iframe className={` h-1/2 w-full h-full px-2 py-4 lg:mx-4 lg:py-12 `} src="https://www.youtube.com/embed/E4aSkLk-GiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            }
          </div>
        </div>
      </main>


    </div>
  )
}
