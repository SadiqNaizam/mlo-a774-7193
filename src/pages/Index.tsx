import * as React from 'react';

import LoginForm from '@/components/Authentication/LoginForm';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * IndexPage serves as the main entry point for user authentication.
 * It utilizes MainAppLayout to provide a centered, full-screen layout
 * and renders the LoginForm component for user interaction.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
