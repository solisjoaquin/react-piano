import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Navbar } from '../../components/Navbar'
import { Piano } from '../../components/Piano'
import { Table } from '../../components/Table'

export default function Home() {

    const [loading, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false);
        }, 500)

    }, [])

    return (
        <div className="flex flex-col justify-center bg-gradient-to-r from-blue-400 to-indigo-600 ">
            <Head>
                <title>Clase 1</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div>

            </div>
            <main className="main">
                <h2 className="text-3xl font-bold leading-7 text-white py-4 mb-8 sm:text-4xl">Clase 1</h2>

                <div className="flex flex-col">
                    {loading ?
                        <div className=" p-28 max-w-xs animate-spin text-white ">

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>


                        </div> :
                        <div className="">
                            <iframe src="https://www.youtube-nocookie.com/embed/oubisChfUTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    }
                    <div className="px-2 mx-auto">
                        <h4 className="text-2xl text-center py-3 font-bold leading-7 text-white mt-3 sm:truncate">Ejercicios para practicar</h4>

                        <Table />
                    </div>
                </div>





                <Piano />
                <div className="px-3 py-2 text-gray-200 text-center lg:hidden">
                    <p>Prueba la version de escritorio para practicar con un piano mas grande (:</p>
                </div>


            </main>
            <style jsx>{`


  
  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
                      
             
                iframe {
                    width: 350px;
                    height: 200px;
                    
                }
                
                @media (min-width: 600px) {
                    iframe {
                        width: 800px;
                        height:415px;
                    }
                }
  
            `}
            </style>
        </div>
    )
}
