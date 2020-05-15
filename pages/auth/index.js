import React from 'react';
import Link from 'next/link';
import User from '../../components/User';

const authIndexPage =() => (
    <div>
        <h1>The Auth Index Page</h1>
        <p>Go to <Link href="/"><a>MainPage</a></Link> </p>
        <User name="Manpreet" age={25} />
    </div>
);

export default authIndexPage;