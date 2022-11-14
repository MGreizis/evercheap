import Head from 'next/head'

export default function About() {
    return (
        <>
        <Head>
            <title>About</title>
            <meta name="description" content="About page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <main>
            <h1 className='font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600'>About page</h1>
            <p>This is a test page</p>
        </main>
        </>
    )
    }