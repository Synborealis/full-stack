import { notFound } from 'next/navigation'
import { getResource } from '@/lib/resources'

export default async function ResourcePage(
    props: PageProps<'/resources/[id]'>)
    {
        const {id} = await props.params //'g12'
        const resource = getResource(id)
        if (!resource) notFound() >
        return <h1>{resource.name}</h1>
    }
