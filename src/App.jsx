
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { DataProvider } from '@/contexts/DataContext';

// Public Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Events from '@/pages/Events';
import EventDetail from '@/pages/EventDetail';
import Gallery from '@/pages/Gallery';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import JoinUs from '@/pages/JoinUs';
import Members from '@/pages/Members';
import MemberProfile from '@/pages/MemberProfile';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

// Admin Pages
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminLayout from '@/pages/admin/AdminLayout';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminEvents from '@/pages/admin/AdminEvents';
import AdminBlog from '@/pages/admin/AdminBlog';
import AdminGallery from '@/pages/admin/AdminGallery';
import AdminMembers from '@/pages/admin/AdminMembers';
import AdminSettings from '@/pages/admin/AdminSettings';
import AdminForms from '@/pages/admin/AdminForms';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ProtectedRoute from '@/components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DataProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground">
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route 
                  path="/admin/*" 
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <Routes>
                          <Route path="dashboard" element={<AdminDashboard />} />
                          <Route path="events" element={<AdminEvents />} />
                          <Route path="blog" element={<AdminBlog />} />
                          <Route path="gallery" element={<AdminGallery />} />
                          <Route path="members" element={<AdminMembers />} />
                          <Route path="forms" element={<AdminForms />} />
                          <Route path="settings" element={<AdminSettings />} />
                        </Routes>
                      </AdminLayout>
                    </ProtectedRoute>
                  } 
                />
                
                {/* Public Routes */}
                <Route 
                  path="/*" 
                  element={
                    <>
                      <Navbar />
                      <main>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/events" element={<Events />} />
                          <Route path="/events/:id" element={<EventDetail />} />
                          <Route path="/gallery" element={<Gallery />} />
                          <Route path="/blog" element={<Blog />} />
                          <Route path="/blog/:slug" element={<BlogPost />} />
                          <Route path="/join" element={<JoinUs />} />
                          <Route path="/members" element={<Members />} />
                          <Route path="/members/:slug" element={<MemberProfile />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </main>
                      <Footer />
                      <BackToTop />
                    </>
                  } 
                />
              </Routes>
              <Toaster />
            </div>
          </Router>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
