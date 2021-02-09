import React from 'react'
import { Link } from 'next'
export const test = () => {
    return (
        <div>
            Test page
            <Link href="/testwo">To homepage</Link>
        </div>
    )
}
