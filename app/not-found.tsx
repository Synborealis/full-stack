import Link from "next/link"

export default function NotFound() {
    return (
        <main className="flex min-h-[50vh] flex-col items-center text-center">
            <h1 className="text-4xl font-bold">404</h1>

            <p className="mt-2 text-gray-600">
                Sorry, we couldn't find that resource.
            </p>

            <Link
                href="/resources"
                className="mt-6 underline"
            >
                Back to resources
            </Link>
        </main>
    )
}