import { Inter } from 'next/font/google';
import { useSession, getSession } from 'next-auth/react';
import { AccountDetails } from '@/components/layout/AccountDetails';

const inter = Inter({ subsets: ['latin'] });

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>;
  }

  return (
    <main
      className={`flex min-h-screen w-full items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950 ${inter.className}`}
    >
      <AccountDetails />
    </main>
  );
}
