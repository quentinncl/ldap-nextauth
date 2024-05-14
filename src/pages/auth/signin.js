import { signIn } from 'next-auth/react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const SignIn = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (!result.error) {
      // Rediriger vers la page sécurisée ou rester sur la page actuelle
      window.location.href = '/compte-bancaire-sensible';
    } else {
      // Gérer l'erreur d'authentification
      console.error(result.error);
    }
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between font-mono text-sm lg:flex">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-4">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="text-center">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
