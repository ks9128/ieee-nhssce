
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found - IEEE Student Chapter</title>
        <meta name="description" content="The page you are looking for could not be found. Please return to the homepage." />
      </Helmet>
      <div className="error-page">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
              className="text-8xl md:text-9xl font-extrabold tracking-tighter"
              style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
            >
              404
            </motion.h1>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Oops! Page Not Found
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              It seems you&apos;ve ventured into uncharted territory. The page you&apos;re looking for might have been moved, deleted, or never existed.
            </p>

            <Link to="/">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Home className="mr-2 w-5 h-5" />
                Return to Homepage
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;