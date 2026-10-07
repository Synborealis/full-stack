import Link from 'next/link'
import type { Resource } from '@/lib/resources'

type Props = { resource: Resource; popular?: boolean }

export default function ResourceCard({ resource, popular }: Props) {

    return (

        <article className="rounded-lg border p-4">
            
            <h2 className="text-xl font-semibold">{resource.name}</h2>
            
            <p className="text-sm text-gray-600">
                {resource.type}
            </p>

            <p className="mt-2">
                Up to {resource.capacity} seats
            </p>
            
            {
                popular && <p>
                    Popular this week
                </p>
            }
            

            
            <Link 
                href={`/resources/${resource.id}`}
                className="mt-4 inline-block underline"
            >
                View resource
            </Link>
        </article>

    )

}​