
export default function Page({ params, searchParams }: 
    { 
        params: { 
            productId: string, 
            reviewId: string 
        }, 
        searchParams: any 
    }
) {
    console.log(params);
    console.log(searchParams);
    return <h1>Review {params.reviewId} for product {params.productId}</h1>
}