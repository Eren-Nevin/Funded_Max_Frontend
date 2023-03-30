import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

    return (
        <>
            <Head>
                <title>Funded Max</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="grid grid-cols-1">
                <div className="text-center mb-5">
                    <h1 className="h1">Access to Profile</h1>
                </div>
                <Link href="/login">
                    <button
                        className="btn border w-full rounded-lg py-1 bg-blue-300 text-black mt-5"
                    >
                        Login
                    </button>
                </Link>
            </div>
        </>
    )
}
