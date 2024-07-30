
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import Dashboard from './pages/user/UserDashboard';
import PrivateRoute from './routes/Private';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRoute from './routes/AdminRoute';
import PrivateEvent from './pages/PrivateEventRequest';
import { Toaster } from 'react-hot-toast';
import PrivateQuotation from './pages/admin/PrivateQuotation';
import PublicQuotation from './pages/admin/PublicQuotation';

import SchedulePrivateEvents from './pages/user/SchedulePrivateEvents';
import PublicEventRequest from './pages/PublicEventRequest'
import QuotationResponse from './pages/admin/QuotationResponse';
import ScheduledPrivateEvent from './pages/admin/ScheduledPrivateEvent';
import UserQuotationResponse from './pages/user/UserQuotationResponse';

function App() {
  return (
    <>
    <Toaster position='top-right'/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Pagenotfound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={< Register/>} />
      <Route path="/events/corporate" element={<Events category="Corporate" />} />
        <Route path="/events/wedding" element={<Events category="Wedding" />} />
        <Route path="/events/birthdays" element={<Events category="Birthdays" />} />
        <Route path="/events/public" element={<Events />} />
        <Route path="/dashboard" element={<PrivateRoute/>}>
            <Route path="user" element={<Dashboard/>}/>
            <Route path='user/private-quotation/response' element={<UserQuotationResponse eventType="Private"/>}/>
            <Route path='user/public-quotation/response' element={<UserQuotationResponse eventType="Public"/>}/>
            <Route path='user/private/schedule-events' element={<SchedulePrivateEvents/>}/>
            
        </Route>
        <Route path="/dashboard" element={<AdminRoute/>}>
            <Route path="admin" element={<AdminDashboard/>}/>
            <Route path="admin/private-quotation" element={<PrivateQuotation/>}/>
            <Route path="admin/public-quotation" element={<PublicQuotation/>}/>
            <Route path="admin/private-quotation/response/:id" element={<QuotationResponse eventtype="Private"/>}/>
            <Route path="admin/public-quotation/response/:id" element={<QuotationResponse eventtype="Public"/>}/>
            <Route path="admin/schedule-private-events" element={<ScheduledPrivateEvent/>}/>

            
            
        </Route>
        <Route path="/event" element={<PrivateRoute/>}>
        <Route path="private-quotation" element={<PrivateEvent/>}/>
        <Route path="public-quotation" element={<PublicEventRequest/>}/>
        </Route>
       

       
    </Routes>
    </>
  );
}

export default App;
