import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <RouterProvider router={router} /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
