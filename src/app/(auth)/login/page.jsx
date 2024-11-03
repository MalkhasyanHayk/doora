import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export const metadata = {
  title: 'Sign In',
}

export default function Login() {
  return (
    <AuthLayout
      title="Anmeldung für bestehende Benutzer"
      subtitle={
        <>
          Sie haben noch kein Konto?{' '}
          <Link href="/register" className="text-cyan-600" style={{color: "var(--primary)"}}>
            Anmeldung
          </Link>{' '}
        </>
      }
    >
      <form>
        <div className="space-y-6">
          <TextField
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <Button type="submit"  color="cyan" className="mt-8 w-full" style={{backgroundColor: "var(--primary)"}}>
          Anmelden
        </Button>
      </form>
    </AuthLayout>
  )
}
