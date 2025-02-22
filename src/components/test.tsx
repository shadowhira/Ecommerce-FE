import React from 'react';
import { useTranslation } from 'react-i18next';

const TestComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('clickMe')}</h1>
    </div>
  );
};

export default TestComponent;
