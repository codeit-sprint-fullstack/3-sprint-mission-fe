import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext"; // AuthProvider를 가져옵니다.
import "@/styles/globals.css";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider> {/* AuthProvider로 애플리케이션을 감쌉니다. */}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthProvider>
  );
}
