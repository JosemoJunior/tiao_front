import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import RouteSwitch from './routes/routes'
import Header from './pages/Header';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Header />
        <RouteSwitch/>
    </QueryClientProvider>
  );
}
/**
 * 
<ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  pauseOnHover
/>
 */

export default App;