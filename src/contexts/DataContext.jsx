
import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Mock data
const initialData = {
  events: [
    {
      id: '1',
      title: 'AI & Machine Learning Workshop',
      description: 'Comprehensive workshop covering fundamentals of AI and ML with hands-on projects.',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Computer Lab A',
      type: 'workshop',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      registrationLink: '#',
      organizer: 'Technical Team'
    },
    {
      id: '2',
      title: 'IEEE Day Celebration 2024',
      description: 'Annual celebration of IEEE Day with technical presentations and networking.',
      date: '2024-10-01',
      time: '2:00 PM',
      location: 'Main Auditorium',
      type: 'celebration',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      registrationLink: '#',
      organizer: 'Management Team'
    },
    {
      id: '3',
      title: 'Coding Competition 2024',
      description: 'Inter-college coding competition with exciting prizes and recognition.',
      date: '2024-03-20',
      time: '9:00 AM',
      location: 'Computer Center',
      type: 'competition',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop',
      registrationLink: '#',
      organizer: 'Technical Team'
    }
  ],
  members: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Chapter President',
      department: 'Computer Science',
      year: '2024',
      team: 'management',
      status: 'active',
      email: 'sarah.johnson@college.edu',
      phone: '+1 234 567 8901',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      github: 'https://github.com/sarahjohnson',
      bio: 'Passionate about technology and leadership, leading the IEEE chapter towards innovation and excellence.',
      skills: ['Leadership', 'Project Management', 'Python', 'React'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      joinDate: '2022-08-15',
      slug: 'sarah-johnson'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Technical Lead',
      department: 'Electrical Engineering',
      year: '2024',
      team: 'technical',
      status: 'active',
      email: 'michael.chen@college.edu',
      phone: '+1 234 567 8902',
      linkedin: 'https://linkedin.com/in/michaelchen',
      github: 'https://github.com/michaelchen',
      bio: 'Expert in embedded systems and IoT, passionate about bridging the gap between hardware and software.',
      skills: ['Embedded Systems', 'IoT', 'C++', 'Arduino', 'PCB Design'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      joinDate: '2022-09-01',
      slug: 'michael-chen'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Marketing Head',
      department: 'Information Technology',
      year: '2025',
      team: 'marketing',
      status: 'active',
      email: 'emily.rodriguez@college.edu',
      phone: '+1 234 567 8903',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      github: 'https://github.com/emilyrodriguez',
      bio: 'Creative marketer with a passion for technology communication and community building.',
      skills: ['Digital Marketing', 'Content Creation', 'Social Media', 'Graphic Design'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      joinDate: '2023-01-15',
      slug: 'emily-rodriguez'
    },
    {
      id: '4',
      name: 'David Kim',
      role: 'Alumni Mentor',
      department: 'Computer Science',
      year: '2023',
      team: 'technical',
      status: 'alumni',
      email: 'david.kim@techcorp.com',
      phone: '+1 234 567 8904',
      linkedin: 'https://linkedin.com/in/davidkim',
      github: 'https://github.com/davidkim',
      bio: 'Software engineer at a leading tech company, mentoring current students in career development.',
      skills: ['Full Stack Development', 'Cloud Computing', 'Mentoring', 'System Design'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      joinDate: '2021-08-20',
      slug: 'david-kim'
    }
  ],
  blogPosts: [
    {
      id: '1',
      title: 'The Future of Artificial Intelligence in Engineering',
      excerpt: 'Exploring how AI is revolutionizing various engineering disciplines and what it means for future engineers.',
      content: 'Artificial Intelligence is transforming the engineering landscape...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tags: ['AI', 'Engineering', 'Technology'],
      slug: 'future-of-ai-in-engineering',
      featured: true
    },
    {
      id: '2',
      title: 'IEEE Student Chapter: Building Tomorrow\'s Engineers',
      excerpt: 'How our IEEE student chapter is preparing students for the challenges of tomorrow\'s engineering world.',
      content: 'Our IEEE student chapter has been at the forefront...',
      author: 'Michael Chen',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      tags: ['IEEE', 'Education', 'Students'],
      slug: 'building-tomorrows-engineers',
      featured: false
    }
  ],
  gallery: [
    {
      id: '1',
      title: 'AI Workshop 2024',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      category: 'workshop',
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'IEEE Day Celebration',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      category: 'event',
      date: '2023-10-01'
    },
    {
      id: '3',
      title: 'Technical Presentation',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop',
      category: 'presentation',
      date: '2024-01-20'
    },
    {
      id: '4',
      title: 'Team Building Activity',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      category: 'social',
      date: '2024-01-25'
    }
  ],
  formSubmissions: [
    {
      id: '1',
      type: 'contact',
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Inquiry about membership',
      message: 'I would like to know more about joining the IEEE chapter.',
      date: '2024-01-20',
      status: 'unread'
    },
    {
      id: '2',
      type: 'join',
      name: 'Jane Smith',
      email: 'jane.smith@college.edu',
      department: 'Computer Science',
      year: '2025',
      reason: 'I want to enhance my technical skills and network with like-minded peers.',
      date: '2024-01-18',
      status: 'reviewed'
    }
  ]
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('ieee-chapter-data');
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('ieee-chapter-data', JSON.stringify(data));
  }, [data]);

  const addEvent = (event) => {
    const newEvent = {
      ...event,
      id: Date.now().toString(),
    };
    setData(prev => ({
      ...prev,
      events: [...prev.events, newEvent]
    }));
  };

  const updateEvent = (id, updatedEvent) => {
    setData(prev => ({
      ...prev,
      events: prev.events.map(event => 
        event.id === id ? { ...event, ...updatedEvent } : event
      )
    }));
  };

  const deleteEvent = (id) => {
    setData(prev => ({
      ...prev,
      events: prev.events.filter(event => event.id !== id)
    }));
  };

  const addMember = (member) => {
    const newMember = {
      ...member,
      id: Date.now().toString(),
      slug: member.name.toLowerCase().replace(/\s+/g, '-'),
      joinDate: new Date().toISOString().split('T')[0]
    };
    setData(prev => ({
      ...prev,
      members: [...prev.members, newMember]
    }));
  };

  const updateMember = (id, updatedMember) => {
    setData(prev => ({
      ...prev,
      members: prev.members.map(member => 
        member.id === id ? { ...member, ...updatedMember } : member
      )
    }));
  };

  const deleteMember = (id) => {
    setData(prev => ({
      ...prev,
      members: prev.members.filter(member => member.id !== id)
    }));
  };

  const addBlogPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now().toString(),
      slug: post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      date: new Date().toISOString().split('T')[0]
    };
    setData(prev => ({
      ...prev,
      blogPosts: [...prev.blogPosts, newPost]
    }));
  };

  const updateBlogPost = (id, updatedPost) => {
    setData(prev => ({
      ...prev,
      blogPosts: prev.blogPosts.map(post => 
        post.id === id ? { ...post, ...updatedPost } : post
      )
    }));
  };

  const deleteBlogPost = (id) => {
    setData(prev => ({
      ...prev,
      blogPosts: prev.blogPosts.filter(post => post.id !== id)
    }));
  };

  const addGalleryItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    };
    setData(prev => ({
      ...prev,
      gallery: [...prev.gallery, newItem]
    }));
  };

  const deleteGalleryItem = (id) => {
    setData(prev => ({
      ...prev,
      gallery: prev.gallery.filter(item => item.id !== id)
    }));
  };

  const addFormSubmission = (submission) => {
    const newSubmission = {
      ...submission,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      status: 'unread'
    };
    setData(prev => ({
      ...prev,
      formSubmissions: [...prev.formSubmissions, newSubmission]
    }));
  };

  const updateFormSubmission = (id, updatedSubmission) => {
    setData(prev => ({
      ...prev,
      formSubmissions: prev.formSubmissions.map(submission => 
        submission.id === id ? { ...submission, ...updatedSubmission } : submission
      )
    }));
  };

  const value = {
    data,
    addEvent,
    updateEvent,
    deleteEvent,
    addMember,
    updateMember,
    deleteMember,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    addGalleryItem,
    deleteGalleryItem,
    addFormSubmission,
    updateFormSubmission
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
