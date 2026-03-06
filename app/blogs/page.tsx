'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Modern Living: The Future of Residential Spaces",
    excerpt: "Explore how innovative design and smart technology are reshaping the way we think about modern homes and communities.",
    author: "Space Builder Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Design Trends",
    image: "/images/banner1.png",
    slug: "modern-living-future-residential-spaces"
  },
  {
    id: 2,
    title: "Sustainable Construction: Building for Tomorrow",
    excerpt: "Discover the latest eco-friendly materials and practices that are making construction more sustainable and environmentally responsible.",
    author: "Design Team",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Sustainability",
    image: "/images/banner2.png",
    slug: "sustainable-construction-building-tomorrow"
  },
  {
    id: 3,
    title: "Luxury Amenities That Define Premium Living",
    excerpt: "From state-of-the-art fitness centers to serene meditation spaces, learn about the amenities that set luxury properties apart.",
    author: "Lifestyle Experts",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Luxury Living",
    image: "/images/banner.png",
    slug: "luxury-amenities-premium-living"
  },
  {
    id: 4,
    title: "The Art of Perfect Home Layouts",
    excerpt: "Understanding the principles of space planning and how to create functional, beautiful layouts that enhance daily living.",
    author: "Architectural Team",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Architecture",
    image: "/images/Frame 47.png",
    slug: "art-perfect-home-layouts"
  },
  {
    id: 5,
    title: "Investment Guide: Real Estate in 2024",
    excerpt: "Expert insights into the current real estate market trends, investment opportunities, and what to expect in the coming year.",
    author: "Investment Advisors",
    date: "February 20, 2024",
    readTime: "10 min read",
    category: "Investment",
    image: "/images/cta.png",
    slug: "investment-guide-real-estate-2024"
  }
];

const categories = ["All", "Design Trends", "Sustainability", "Luxury Living", "Architecture", "Investment"];

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Insights, trends, and stories from the world of premium real estate and modern living
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{post.author}</span>
                      </div>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Subscribe to our newsletter for the latest articles and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;