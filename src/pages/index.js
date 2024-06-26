import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex flex-col min-h-[100dvh] ${inter.className}`}>
      <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32 p-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-gray-900 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Secure Banking for the Modern World
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                  Experience seamless banking with our cutting-edge technology and unparalleled security. Manage your
                  finances with ease.
                </p>
              </div>
              <Link href="/auth/signin">
                <Button className="w-fit">Sign In</Button>
              </Link>
            </div>
            <img
              alt="Hero Image"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              height="500"
              src="/bank.webp"
              width="500"
            />
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 p-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Your Banking Needs
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                Our bank offers a wide range of features to help you manage your finances with ease and confidence.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <CreditCardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="text-xl font-semibold">Mobile Banking</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Manage your accounts, make payments, and more on the go with our intuitive mobile app.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LockIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="text-xl font-semibold">Secure Transactions</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Rest assured that your financial data is protected with our industry-leading security measures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <WalletIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="text-xl font-semibold">Personalized Budgeting</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Take control of your finances with our intelligent budgeting tools and personalized insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32 p-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-gray-900 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Customers Say
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                Hear from our satisfied customers about their experience with our bank.
              </p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardContent className="space-y-4 mt-4">
                  <blockquote className="text-lg font-semibold leading-snug">
                    “I&apos;ve been a customer of this bank for years, and I couldn&apos;t be happier with the level of
                    service and security they provide.”
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">John Doe</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">Small Business Owner</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4 mt-4">
                  <blockquote className="text-lg font-semibold leading-snug">
                    “The mobile app is so easy to use, and I love the personalized budgeting features. It&apos;s really
                    helped me stay on top of my finances.”
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.svg" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Jane Appleseed</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">Freelance Designer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
