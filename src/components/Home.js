import React, { useEffect, useState } from 'react'
import { JOKES_URL } from '../utils/config';

function Home() {


    const [jokes, setJokes] = useState("");

    useEffect(() => {
        getJoke()
    }, [])

    async function getJoke() {
        const data = await fetch(JOKES_URL);
        const json = await data.json();
        setJokes(json)
    }

    return (
        <div className='flex flex-col h-[520px] justify-center items-center ' >
            <div className='w-[600px] h-auto'>
                <p className='text-4xl mb-2'>Q: {jokes.setup}</p>
                <p className='text-4xl'>😁😁: {jokes.punchline}</p>
            </div>
            <div className='mt-5 w-[600px] '>
                <button className=' cursor-pointer text-cyan-800 underline rounded-md' onClick={() => getJoke()}>New Joke!</button>
            </div>
        </div>

    )
}

export default Home