import "@assets/main.css"
import type { AppProps /*, AppContext */ } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { useRef } from "react"
import { SelectedInformationContextProvider } from "@contexts/selected-name.context"
import { InformationByAverageAgeContextProvider } from "@contexts/information-by-average-age.context"
import { UIProvider } from "@contexts/ui.context"
import { SelectedAgeIntervalFilterContextProvider } from "@contexts/selected-age-filter.context"

export default function CustomApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<any>(null)
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <UIProvider>
        <SelectedInformationContextProvider>
          <InformationByAverageAgeContextProvider>
            <SelectedAgeIntervalFilterContextProvider>
              <Component {...pageProps} />
            </SelectedAgeIntervalFilterContextProvider>
          </InformationByAverageAgeContextProvider>
        </SelectedInformationContextProvider>
      </UIProvider>
    </QueryClientProvider>
  )
}
