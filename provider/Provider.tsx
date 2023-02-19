import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import React from "react";
import { RecoilRoot } from "recoil";

type ProviderProps = {
  children: React.ReactNode;
};

function Provider({ children }: ProviderProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true, // stale 상태일 경우 윈도우 포커싱 될 때 마다 refetch
        refetchOnMount: false, //  stale 상태일 경우 마운트 시 마다 refetch
      },
    },
  });
  return (
    <ThemeProvider enableSystem={true} defaultTheme="light">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default Provider;
