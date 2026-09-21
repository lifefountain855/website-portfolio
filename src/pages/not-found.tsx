import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-center px-5 py-12 tracking-wider sm:px-12 sm:py-20">
      <title>404 — Asappy</title>
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-primary-400">error / 404</p>
      <h1 className="font-['Economica'] text-7xl font-normal leading-none tracking-tight text-white sm:text-8xl">lost page</h1>
      <p className="my-8 max-w-md font-light tracking-normal text-neutral-400">The page you are looking for does not exist or has moved.</p>
      <Link className="flex w-fit items-center gap-2 text-xs tracking-[0.08em] text-neutral-400 no-underline transition duration-200 hover:text-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400" to="/">
        <ArrowLeft size={16} aria-hidden="true" />
        return home
      </Link>
    </main>
  );
}
