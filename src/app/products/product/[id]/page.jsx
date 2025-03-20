import Link from 'next/link';

export default function page({ params: { id } }) {
    return (
        <section className='mt-20 px-10'>
            <h1 className='text-3xl'>Product {Number(id)}:</h1>

            <div className='mt-5 flex flex-col gap-2'>
                {/* Product details */}
                <p>Details of product {Number(id)}</p>

                {/* Checkout */}
                <Link href={`/products/product/${id}/checkout`}>Checkout</Link>
            </div>
        </section>
    );
}
