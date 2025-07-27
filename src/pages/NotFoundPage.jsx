
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found | IEEE Student Chapter</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-extrabold text-primary tracking-tighter">404</h1>
          <h2 className="text-4xl font-bold mt-4 mb-2">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <NavLink to="/">Go Back to Homepage</NavLink>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;
  