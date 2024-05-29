import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { RouterSwitch } from './routes/routes'
//import Header from './pages/Header';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <RouterSwitch/>
    </QueryClientProvider>
  );
}

export default App;
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