import { notFound } from "next/navigation";

export default function Page({ 
    params 
}: {
    params: {
        slug: string[]
    }
}) {
    console.log(params.slug);

    if (params.slug?.length > 2) {
        notFound();
    } else if (params.slug?.length === 2) {
        return <h1>docs page for feature {params.slug[0]} concept {params.slug[1]}</h1>
    } else if (params.slug?.length === 1) {
        return <h1>docs page for feature {params.slug[0]}</h1>
    } else {
        return <h1>docs homepage</h1>
    }
}