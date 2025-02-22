'use client';

import { Button } from '@/components/ui/button';
import initTranslations from '../i18n';
import LanguageChanger from '@/components/languague-changer';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

const i18nNamespaces = ['test', 'default'];

type HomeProps = {
  params: {
    locale: string;
  };
};

export default async function Home(props: HomeProps) {
  const { locale } = await props.params;
  // const { t } = await initTranslations(locale, i18nNamespaces);

  // return (
  //   <main className="flex items-center justify-center mt-200 gap-20">
  //     <Button>{t('default:clickMe')}</Button>
  //     <LanguageChanger />
  //   </main>
  // );

  // const session = await auth();

  // if (!session?.user) {
  // return redirect('/');
  // } else {
  redirect(`/dashboard/overview`);
  // }
}
