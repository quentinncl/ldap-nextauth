import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import { PowerIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';

export function AccountDetails() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <header className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
        <div className="space-y-2">
          <h1 className="text-gray-900 text-3xl font-bold">Bank Accounts</h1>
          <p className="text-gray-500 dark:text-gray-400">View and manage your bank account details.</p>
        </div>
        <Button variant="outline" onClick={() => signOut({ callbackUrl: 'http://localhost:3000/auth/signin' })}>
          <PowerIcon className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Checking Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="checking-account-number">Account Number</Label>
                <Input id="checking-account-number" readOnly value="123456789" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="checking-routing-number">Routing Number</Label>
                <Input id="checking-routing-number" readOnly value="987654321" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="checking-account-balance">Account Balance</Label>
              <Input id="checking-account-balance" readOnly value="$5,234.56" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="checking-account-holder">Account Holder</Label>
              <Input id="checking-account-holder" readOnly value="John Doe" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Savings Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="savings-account-number">Account Number</Label>
                <Input id="savings-account-number" readOnly value="987654321" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="savings-routing-number">Routing Number</Label>
                <Input id="savings-routing-number" readOnly value="123456789" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="savings-account-balance">Account Balance</Label>
              <Input id="savings-account-balance" readOnly value="$10,987.65" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="savings-account-holder">Account Holder</Label>
              <Input id="savings-account-holder" readOnly value="Jane Smith" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Investment Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="investment-account-number">Account Number</Label>
                <Input id="investment-account-number" readOnly value="456789123" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="investment-routing-number">Routing Number</Label>
                <Input id="investment-routing-number" readOnly value="321654987" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="investment-account-balance">Account Balance</Label>
              <Input id="investment-account-balance" readOnly value="$50,000.00" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="investment-account-holder">Account Holder</Label>
              <Input id="investment-account-holder" readOnly value="Michael Johnson" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-between">
        <Button variant="outline">Transactions</Button>
        <Button>Transfer Funds</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Account</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-04-15</TableCell>
                <TableCell>Paycheck Deposit</TableCell>
                <TableCell>$2,500.00</TableCell>
                <TableCell>Checking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-12</TableCell>
                <TableCell>Grocery Purchase</TableCell>
                <TableCell>-$125.43</TableCell>
                <TableCell>Checking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-10</TableCell>
                <TableCell>Rent Payment</TableCell>
                <TableCell>-$1,200.00</TableCell>
                <TableCell>Checking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-05</TableCell>
                <TableCell>ATM Withdrawal</TableCell>
                <TableCell>-$50.00</TableCell>
                <TableCell>Checking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-01</TableCell>
                <TableCell>Interest Earned</TableCell>
                <TableCell>$12.34</TableCell>
                <TableCell>Savings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-03-28</TableCell>
                <TableCell>Online Purchase</TableCell>
                <TableCell>-$79.99</TableCell>
                <TableCell>Checking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-03-25</TableCell>
                <TableCell>Utility Bill Payment</TableCell>
                <TableCell>-$150.00</TableCell>
                <TableCell>Checking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-03-20</TableCell>
                <TableCell>Paycheck Deposit</TableCell>
                <TableCell>$2,500.00</TableCell>
                <TableCell>Checking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-03-15</TableCell>
                <TableCell>Subscription Renewal</TableCell>
                <TableCell>-$9.99</TableCell>
                <TableCell>Checking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-03-10</TableCell>
                <TableCell>Dining Out</TableCell>
                <TableCell>-$42.75</TableCell>
                <TableCell>Checking</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
