import QueryProvider from '@/providers/QueryProvider';
import { PropsWithChildren } from 'react';

function ProvidersLayout({ children }: PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}

export default ProvidersLayout;
