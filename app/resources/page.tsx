

import ResourceCard from './resource-card'
import { resources } from '@/lib/resources'

export const metadata = {

    title: 'Resources',

}

export default function ResourcesPage() {

    return (

        <main className = "space-y-6">
            <h1 className = "text-3xl font-bold">Resources</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                    <ResourceCard
                        key={resource.id}
                        resource={resource}
                    />
                ))}
            </div>
        </main>
    )
}​