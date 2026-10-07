

import ResourceCard from './resource-card'

import { resources } from '@/lib/resources'

export const metadata = {

    title: 'Resources',

}

export default function ResourcesPage() {

    return (

        <section className="flex">

            {resources.map((r) => (

                <ResourceCard

                    key={r.id}

                    resource={r}

                    popular={r.capacity > 20}

                />

            ))}

        </section>

    )

}​