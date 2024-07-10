import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Next.js Appdddddddd</h1>
      <Link href="/login">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
      </Link>
    </main>
  );
}
