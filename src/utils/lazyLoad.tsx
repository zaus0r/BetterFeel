import React, { Suspense } from 'react';

interface LoadingProps {
  message?: string;
}

const DefaultLoading = ({ message = 'Laddar...' }: LoadingProps) => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">{message}</p>
    </div>
  </div>
);

export const withLazyLoading = <P extends object>(
  Component: React.ComponentType<P>,
  LoadingComponent: React.ComponentType<LoadingProps> = DefaultLoading,
  loadingMessage?: string
) => {
  return function LazyLoadedComponent(props: P) {
    return (
      <Suspense fallback={<LoadingComponent message={loadingMessage} />}>
        <Component {...props} />
      </Suspense>
    );
  };
}; 