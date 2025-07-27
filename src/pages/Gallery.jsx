
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Download,
  Share2,
  Calendar,
  Tag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useData } from '@/contexts/DataContext';
import { useToast } from '@/components/ui/use-toast';

const Gallery = () => {
  const { data } = useData();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['all', 'workshop', 'event', 'presentation', 'social', 'competition'];
  const years = ['all', '2024', '2023', '2022'];

  const filteredImages = useMemo(() => {
    return data.gallery.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const itemYear = new Date(item.date).getFullYear().toString();
      const matchesYear = selectedYear === 'all' || itemYear === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [data.gallery, searchTerm, selectedCategory, selectedYear]);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % filteredImages.length
      : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const handleDownloadClick = () => {
    toast({
      title: "🚧 Image download isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleShareClick = () => {
    toast({
      title: "🚧 Image sharing isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      workshop: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      event: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      presentation: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      social: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      competition: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  return (
    <>
      <Helmet>
        <title>Gallery - IEEE Student Chapter</title>
        <meta name="description" content="Explore our photo gallery showcasing workshops, events, competitions, and memorable moments from our IEEE Student Chapter activities." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Capturing moments of innovation, learning, and community from our IEEE Student Chapter events and activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Total Photos', value: data.gallery.length, color: 'text-blue-600' },
              { label: 'Categories', value: [...new Set(data.gallery.map(i => i.category))].length, color: 'text-green-600' },
              { label: 'Events Covered', value: '25+', color: 'text-purple-600' },
              { label: 'Years of Memories', value: '6+', color: 'text-orange-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="stats-counter">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search photos by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filters:</span>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </Button>
                ))}
              </div>

              {/* Year Filter */}
              <div className="flex flex-wrap gap-2">
                {years.map(year => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedYear(year)}
                  >
                    {year === 'all' ? 'All Years' : year}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-muted-foreground">
                Showing {filteredImages.length} of {data.gallery.length} photos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 mx-auto text-muted-foreground mb-4">📷</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No photos found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="gallery-item cursor-pointer"
                  onClick={() => openLightbox(item, index)}
                >
                  <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
                    <img  
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      alt={item.title}
                     src={item.image} />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                      <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                        <div className="flex items-center justify-between">
                          <Badge className={`${getCategoryColor(item.category)} text-xs`}>
                            {item.category}
                          </Badge>
                          <span className="text-xs opacity-90">
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img  
                  className="max-w-full max-h-[80vh] object-contain"
                  alt={lightboxImage.title}
                 src={lightboxImage.image} />
                
                {/* Close Button */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                  onClick={closeLightbox}
                >
                  <X className="w-4 h-4" />
                </Button>

                {/* Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      onClick={() => navigateLightbox('prev')}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      onClick={() => navigateLightbox('next')}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{lightboxImage.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-white/80">
                        <div className="flex items-center space-x-1">
                          <Tag className="w-4 h-4" />
                          <Badge className={getCategoryColor(lightboxImage.category)}>
                            {lightboxImage.category}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(lightboxImage.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleDownloadClick}
                        className="bg-white/20 hover:bg-white/30 text-white"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleShareClick}
                        className="bg-white/20 hover:bg-white/30 text-white"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                  
                  {filteredImages.length > 1 && (
                    <div className="text-center text-sm text-white/60">
                      {lightboxIndex + 1} of {filteredImages.length}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 ieee-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our IEEE Student Chapter and create memories that will last a lifetime. 
              Be featured in our next gallery showcase!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Join Our Chapter
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
                View Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
