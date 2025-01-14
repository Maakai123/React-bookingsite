
import { BrowserRouter, Navigate, Route, Routes} from 
"react-router-dom";
import GlobalStyles from './styles/GlobalStyle'
import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Settings  from "./pages/Settings"
import Account from "./pages/Account";
import Login from "./pages/Login"
import PageNotFound  from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
     <Routes>

      {/*W want every Route to be inside the AppLayout except Login and page not found 
      It does not have a part prop*/}
      <Route element={<AppLayout/>}>
      {/*I want my dashboard to be my default page */}
      <Route index element={<Navigate replace to="dashboard" />}/>
      <Route path="dashboard" element={<Dashboard />}/>
      <Route path="bookings" element={<Bookings />}/>
      <Route path="cabins" element={<Cabins />}/>
      <Route path="users" element={<Users />}/>
      <Route path="setting" element={<Settings />}/>
      <Route path="account" element={<Account/>}/>
      <Route path="login" element={<Login />}/>
      <Route path="dashboard" element={<Dashboard />}/>
      <Route path="*" element={<PageNotFound />}/>
      </Route>
     </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
