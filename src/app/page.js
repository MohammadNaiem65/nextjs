import Link from 'next/link';

export default function Home() {
    return (
        <main className='min-h-screen mt-16'>
            <Link href='/products' className='block text-center text-2xl'>
                All Products
            </Link>
        </main>
    );
}
