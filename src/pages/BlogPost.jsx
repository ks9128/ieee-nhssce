
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2,
  BookOpen,
  Tag,
  ChevronRight,
  Heart,
  MessageCircle,
  Bookmark
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useData } from '@/contexts/DataContext';
import { useToast } from '@/components/ui/use-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const { data } = useData();
  const { toast } = useToast();

  const post = data.blogPosts.find(p => p.slug === slug);

  const handleShareClick = () => {
    toast({
      title: "🚧 Article sharing isn&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleLikeClick = () => {
    toast({
      title: "🚧 Article likes aren&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleCommentClick = () => {
    toast({
      title: "🚧 Comments aren&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleBookmarkClick = () => {
    toast({
      title: "🚧 Bookmarking isn&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Article Not Found</h1>
          <p className="text-muted-foreground">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

  // Related posts (same tags or author)
  const relatedPosts = data.blogPosts
    .filter(p => p.id !== post.id && (
      p.author === post.author || 
      (p.tags && post.tags && p.tags.some(tag => post.tags.includes(tag)))
    ))
    .slice(0, 3);

  // Extended content for demo
  const extendedContent = `
    ${post.content}
    
    ## Introduction
    
    In today's rapidly evolving technological landscape, understanding the fundamentals and staying updated with the latest trends is crucial for any engineer or technology enthusiast. This article explores the key concepts, practical applications, and future implications of the topics we're discussing.
    
    ## Key Concepts
    
    Let's dive into the core principles that form the foundation of this subject. These concepts are essential for building a solid understanding and applying the knowledge in real-world scenarios.
    
    ### Fundamental Principles
    
    The fundamental principles we'll explore include:
    
    - **Theoretical Foundation**: Understanding the underlying theory and mathematical models
    - **Practical Applications**: Real-world implementations and use cases
    - **Best Practices**: Industry-standard approaches and methodologies
    - **Common Pitfalls**: Mistakes to avoid and lessons learned from experience
    
    ## Implementation Details
    
    When implementing these concepts in practice, there are several important considerations to keep in mind. The following sections outline the step-by-step approach and provide practical guidance.
    
    ### Step-by-Step Guide
    
    1. **Planning Phase**: Define objectives and requirements
    2. **Design Phase**: Create detailed specifications and architecture
    3. **Implementation Phase**: Develop and test the solution
    4. **Deployment Phase**: Roll out and monitor the system
    5. **Maintenance Phase**: Ongoing support and improvements
    
    ## Case Studies
    
    To better illustrate these concepts, let's examine some real-world case studies that demonstrate successful implementations and the lessons learned from them.
    
    ### Case Study 1: Industry Application
    
    This case study examines how a leading technology company successfully implemented these principles to solve a complex engineering challenge. The results showed significant improvements in efficiency and performance.
    
    ### Case Study 2: Academic Research
    
    Academic institutions have also contributed valuable insights through research projects. This case study highlights innovative approaches and experimental results that advance our understanding of the field.
    
    ## Future Trends
    
    Looking ahead, several emerging trends are shaping the future of this field. Understanding these trends is crucial for staying competitive and preparing for upcoming challenges and opportunities.
    
    - **Artificial Intelligence Integration**: How AI is transforming traditional approaches
    - **Sustainability Considerations**: Environmental impact and green technology solutions
    - **Scalability Challenges**: Handling increasing complexity and scale
    - **Security Implications**: Protecting systems and data in an interconnected world
    
    ## Conclusion
    
    The concepts and principles discussed in this article provide a solid foundation for understanding and working in this field. As technology continues to evolve, staying informed and adapting to new developments will be key to success.
    
    We encourage readers to continue exploring these topics, engage with the community, and contribute to the ongoing advancement of knowledge in this exciting field.
  `;

  return (
    <>
      <Helmet>
        <title>{post.title} - IEEE Student Chapter Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover"
            alt={post.title}
           src={post.image} />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Link to="/blog">
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>

            {/* Tags */}
            {post.tags && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} className="bg-white/20 text-white border-white/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{getReadingTime(extendedContent)} min read</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary"
                onClick={handleShareClick}
              >
                <Share2 className="mr-2 w-4 h-4" />
                Share Article
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary"
                onClick={handleBookmarkClick}
              >
                <Bookmark className="mr-2 w-4 h-4" />
                Bookmark
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-8 lg:p-12">
                    {/* Article Excerpt */}
                    <div className="text-xl text-muted-foreground leading-relaxed mb-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                      {post.excerpt}
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                      <div className="text-foreground leading-relaxed space-y-6">
                        {extendedContent.split('\n\n').map((paragraph, index) => {
                          if (paragraph.startsWith('##')) {
                            return (
                              <h2 key={index} className="text-2xl font-bold text-foreground mt-12 mb-6">
                                {paragraph.replace('## ', '')}
                              </h2>
                            );
                          } else if (paragraph.startsWith('###')) {
                            return (
                              <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
                                {paragraph.replace('### ', '')}
                              </h3>
                            );
                          } else if (paragraph.startsWith('- **')) {
                            const items = paragraph.split('\n').filter(item => item.startsWith('- **'));
                            return (
                              <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                                {items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-muted-foreground">
                                    <span dangerouslySetInnerHTML={{
                                      __html: item.replace('- **', '<strong>').replace('**:', ':</strong>')
                                    }} />
                                  </li>
                                ))}
                              </ul>
                            );
                          } else if (paragraph.match(/^\d+\./)) {
                            const items = paragraph.split('\n').filter(item => item.match(/^\d+\./));
                            return (
                              <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
                                {items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-muted-foreground">
                                    <span dangerouslySetInnerHTML={{
                                      __html: item.replace(/^\d+\.\s\*\*(.*?)\*\*:/, '<strong>$1:</strong>')
                                    }} />
                                  </li>
                                ))}
                              </ol>
                            );
                          } else if (paragraph.startsWith('- ')) {
                            const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                            return (
                              <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                                {items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-muted-foreground">
                                    <span dangerouslySetInnerHTML={{
                                      __html: item.replace('- **', '<strong>').replace('**:', ':</strong>')
                                    }} />
                                  </li>
                                ))}
                              </ul>
                            );
                          } else if (paragraph.trim()) {
                            return (
                              <p key={index} className="text-muted-foreground leading-relaxed">
                                {paragraph}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>

                    {/* Article Footer */}
                    <div className="mt-12 pt-8 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Button variant="outline" onClick={handleLikeClick}>
                            <Heart className="mr-2 w-4 h-4" />
                            Like (42)
                          </Button>
                          <Button variant="outline" onClick={handleCommentClick}>
                            <MessageCircle className="mr-2 w-4 h-4" />
                            Comment (8)
                          </Button>
                        </div>
                        <Button variant="outline" onClick={handleShareClick}>
                          <Share2 className="mr-2 w-4 h-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>About the Author</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{post.author}</h4>
                        <p className="text-sm text-muted-foreground">IEEE Chapter Member</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {post.author} is an active member of our IEEE Student Chapter, contributing valuable insights 
                      and expertise to our community through articles and technical presentations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Article Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Article Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Published</span>
                      <span className="text-sm font-medium text-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Reading Time</span>
                      <span className="text-sm font-medium text-foreground">
                        {getReadingTime(extendedContent)} minutes
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Views</span>
                      <span className="text-sm font-medium text-foreground">1,234</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Likes</span>
                      <span className="text-sm font-medium text-foreground">42</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tags */}
              {post.tags && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Tag className="w-4 h-4" />
                        <span>Tags</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} className={getTagColor(tag)}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleBookmarkClick}
                    >
                      <Bookmark className="mr-2 w-4 h-4" />
                      Bookmark Article
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleShareClick}
                    >
                      <Share2 className="mr-2 w-4 h-4" />
                      Share Article
                    </Button>
                    <Link to="/blog" className="block">
                      <Button variant="outline" className="w-full">
                        <BookOpen className="mr-2 w-4 h-4" />
                        More Articles
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Related Articles
              </h2>
              <p className="text-xl text-muted-foreground">
                Continue reading with these related articles
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="blog-card h-full overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img  
                        className="w-full h-full object-cover"
                        alt={relatedPost.title}
                       src={relatedPost.image} />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{relatedPost.author}</span>
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="outline" className="w-full">
                          Read Article
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;
