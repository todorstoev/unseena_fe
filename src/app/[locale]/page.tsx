'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Link } from '@/navigation';

export default function Page() {
  const t = useTranslations('Index');

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>{t('login')}</CardTitle>
          <CardDescription>{t('enter-your-email')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>{t('email')}</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>{t('password')}</Label>
                <Link href='#' className='ml-auto inline-block text-sm underline'>
                  {t('forgot-your-password')}
                </Link>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              {t('login')}
            </Button>
            <Button variant='outline' className='w-full'>
              {t('login-with-google')}
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            {t('dont-have-an-account')}
            <Link href='#' className='underline'>
              {t('sign-up')}
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
