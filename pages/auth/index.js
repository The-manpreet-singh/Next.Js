import React from 'react';
import Link from 'next/link'

const authIndexPage =() => (
    <div>
        <h1>The Auth Index Page</h1>
        <p>Go to <Link href="/"><a>MainPage</a></Link> </p>
    </div>
);

export default authIndexPage;