import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from 'next-auth/react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    console.log(result);

    if (!result.error) {
      // Rediriger vers la page sécurisée ou rester sur la page actuelle
      window.location.href = '/compte-bancaire-sensible';
    } else {
      // Gérer l'erreur d'authentification
      console.error(result.error);
    }
  };

  return (
    <main
      className={`flex min-h-screen w-full items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950 ${inter.className}`}
    >
      <div className="w-full max-w-md space-y-4">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>Enter your email and password to access your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Identifiant</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="text-sm font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" required type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" onClick={handleSubmit}>
              Sign in
            </Button>
          </CardFooter>
        </Card>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Don&apos;t have an account?
          <Link
            className="font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}
