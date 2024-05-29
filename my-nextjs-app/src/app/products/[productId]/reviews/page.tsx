
export default function Page({ params, searchParams }: { params: { productId: string }, searchParams: any }) {
    console.log(params);
    console.log(searchParams);
    return <h1>All reviews for product {params.productId}</h1>
}