'use client';

import LanguageChanger from '@/components/languague-changer';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Button>{t('clickMe')}</Button>
      <LanguageChanger />
    </div>
  );
}
