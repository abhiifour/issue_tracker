"use client"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export function QueryClientWrapperProvider({ children }: { children: React.ReactNode }) {

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
