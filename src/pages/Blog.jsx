
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock,
  Tag,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useData } from '@/contexts/DataContext';

const Blog = () => {
  const { data } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  // Get all unique tags from blog posts
  const allTags = useMemo(() => {
    const tags = new Set();
    data.blogPosts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => tags.add(tag));
      }
    });
    return ['all', ...Array.from(tags)];
  }, [data.blogPosts]);

  const filteredPosts = useMemo(() => {
    return data.blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag === 'all' || (post.tags && post.tags.includes(selectedTag));

      return matchesSearch && matchesTag;
    });
  }, [data.blogPosts, searchTerm, selectedTag]);

  const featuredPost = data.blogPosts.find(post => post.featured) || data.blogPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const getTagColor = (tag) => {
    const colors = [
      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    ];
    const index = tag.length % colors.length;
    return colors[index];
  };

  return (
    <>
      <Helmet>
        <title>Blog - IEEE Student Chapter</title>
        <meta name="description" content="Read the latest articles, insights, and updates from our IEEE Student Chapter community. Discover technical tutorials, industry trends, and member stories." />
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
              IEEE Chapter Blog
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Insights, tutorials, and stories from our community of engineers and innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, label: 'Total Articles', value: data.blogPosts.length, color: 'text-blue-600' },
              { icon: User, label: 'Contributors', value: [...new Set(data.blogPosts.map(p => p.author))].length, color: 'text-green-600' },
              { icon: Tag, label: 'Topics Covered', value: allTags.length - 1, color: 'text-purple-600' },
              { icon: TrendingUp, label: 'Monthly Readers', value: '2.5K+', color: 'text-orange-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="stats-counter">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-12"
            >
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Article</h2>
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-xl text-muted-foreground">
                Don&apos;t miss our most popular and insightful content
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="blog-card overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square overflow-hidden">
                    <img  
                      className="w-full h-full object-cover"
                      alt={featuredPost.title}
                     src={featuredPost.image} />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{getReadingTime(featuredPost.content)} min read</span>
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {featuredPost.title}
                    </h3>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    {featuredPost.tags && (
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map((tag, index) => (
                          <Badge key={index} className={getTagColor(tag)}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button size="lg" className="btn-ieee">
                        Read Full Article
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles by title, content, or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by topic:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className="capitalize"
                  >
                    {tag === 'all' ? 'All Topics' : tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-muted-foreground">
                Showing {filteredPosts.length} articles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center space-y-4 mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Latest Articles
                </h2>
                <p className="text-xl text-muted-foreground">
                  Stay updated with our latest insights and tutorials
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="blog-card h-full overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img  
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          alt={post.title}
                         src={post.image} />
                      </div>
                      <CardContent className="p-6 space-y-4">
                        {/* Post Meta */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>

                        {/* Post Title */}
                        <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Post Excerpt */}
                        <p className="text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        {post.tags && (
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge key={tagIndex} className={`${getTagColor(tag)} text-xs`}>
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 3 && (
                              <Badge className="text-xs bg-gray-100 text-gray-600">
                                +{post.tags.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Reading Time & Read More */}
                        <div className="flex items-center justify-between pt-4">
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{getReadingTime(post.content)} min read</span>
                          </div>
                          <Link to={`/blog/${post.slug}`}>
                            <Button variant="outline" size="sm">
                              Read More
                              <ChevronRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Never Miss an Article
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Subscribe to our newsletter and get the latest articles, tutorials, and insights 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input flex-1"
              />
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/70">
              Join 2,500+ engineers who read our weekly newsletter
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
