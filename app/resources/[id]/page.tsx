import { notFound } from 'next/navigation'
import { getResource } from '@/lib/resources'

export default async function ResourcePage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params
    const resource = getResource(id)

    if (!resource) {
        notFound()
    }

    return (
        <article className="space-y-4">
            <h1 className="text-3xl font-bold">
                {resource.name}
            </h1>

            <p>{resource.name}</p>

            <p>
                Up to {resource.capacity} people
            </p>

            <a
                href="/resources"
                className="inline-block underline"
            >
                Back to resources
            </a>
        </article>
    )
}
