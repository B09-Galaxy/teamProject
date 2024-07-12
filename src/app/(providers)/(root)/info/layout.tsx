import { PropsWithChildren, Suspense } from 'react';

function InfoLayout({ children }: PropsWithChildren) {
  return <Suspense>{children}</Suspense>;
}

export default InfoLayout;
