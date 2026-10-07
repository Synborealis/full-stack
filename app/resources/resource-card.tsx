import Link from 'next/link'

import type { Resource } from '@/lib/resources'



type Props = { resource: Resource; popular?: boolean }



export default function ResourceCard({ resource, popular }: Props) {

    return (

        <article className="card border-1 p-8">
            <h2>{resource.name}</h2>
            <p>{resource.capacity} seats</p>
            {popular && <p>Popular this week</p>}
            <Link href={`/resources/${resource.id}`}>View</Link>
        </article>

    )

}​