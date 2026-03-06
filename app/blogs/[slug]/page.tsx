'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, Heart, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

// Sample blog post data (in a real app, this would come from an API or database)
const blogPosts = {
  "modern-living-future-residential-spaces": {
    id: 1,
    title: "Modern Living: The Future of Residential Spaces",
    content: `
      <p>The landscape of residential living is undergoing a remarkable transformation, driven by technological advancements, changing lifestyle preferences, and a growing emphasis on sustainability. As we move further into the 21st century, the concept of home has evolved from mere shelter to a dynamic space that adapts to our needs, enhances our well-being, and connects us with our environment.</p>
      
      <h2>Smart Home Integration</h2>
      <p>One of the most significant trends shaping modern residential spaces is the integration of smart home technology. Today's homes are no longer just structures; they're intelligent ecosystems that learn from our habits and anticipate our needs. From voice-controlled lighting and temperature management to automated security systems and energy-efficient appliances, smart technology is making homes more convenient, secure, and sustainable.</p>
      
      <p>The Internet of Things (IoT) has revolutionized how we interact with our living spaces. Smart thermostats learn our schedule and adjust temperatures accordingly, while intelligent lighting systems can create the perfect ambiance for any occasion. These technologies not only enhance comfort but also contribute to significant energy savings, making modern homes both luxurious and environmentally responsible.</p>
      
      <h2>Sustainable Design Principles</h2>
      <p>Sustainability has become a cornerstone of modern residential design. Today's homeowners are increasingly aware of their environmental impact, and builders are responding with innovative solutions that minimize ecological footprint while maximizing living quality. Green building materials, energy-efficient systems, and water conservation features are no longer optional extras but essential components of contemporary home design.</p>
      
      <p>Passive design strategies, such as optimal orientation for natural light and ventilation, reduce the need for artificial lighting and mechanical cooling. Solar panels, rainwater harvesting systems, and greywater recycling are becoming standard features in forward-thinking residential developments. These sustainable approaches not only benefit the environment but also result in long-term cost savings for homeowners.</p>
      
      <h2>Flexible and Adaptive Spaces</h2>
      <p>The way we live and work has fundamentally changed, and our homes must adapt accordingly. Modern residential spaces are designed with flexibility in mind, featuring open floor plans, multi-functional areas, and modular furniture systems that can be easily reconfigured to meet changing needs.</p>
      
      <p>Home offices have become essential features, with dedicated spaces that support productivity while maintaining work-life balance. Living areas now seamlessly transition from entertainment zones to workout spaces, and kitchens have evolved into social hubs where families gather and connect. This adaptability ensures that homes remain relevant and functional as our lifestyles evolve.</p>
      
      <h2>Wellness-Centric Design</h2>
      <p>Modern homes are increasingly designed with a focus on occupant wellness. Biophilic design principles incorporate natural elements, such as indoor plants, natural materials, and views of nature, to create spaces that reduce stress and improve mental health. Air filtration systems, circadian lighting, and acoustic optimization contribute to physical well-being.</p>
      
      <p>Dedicated wellness spaces, including meditation rooms, yoga areas, and home gyms, are becoming standard features in luxury residences. These spaces recognize that home is not just a place to live but a sanctuary for holistic well-being.</p>
      
      <h2>Community and Connection</h2>
      <p>While individual homes are becoming more sophisticated, there's also a growing emphasis on community and social connection. Modern residential developments often include shared amenities such as coworking spaces, community gardens, recreational facilities, and social areas that foster neighbor interaction and create a sense of belonging.</p>
      
      <p>This community-focused approach recognizes that quality of life extends beyond the individual dwelling to include the broader neighborhood environment. Walkable communities, access to green spaces, and proximity to essential services contribute to a more connected and fulfilling lifestyle.</p>
      
      <h2>Looking to the Future</h2>
      <p>As we look to the future of residential living, several trends are likely to shape the next generation of homes. Artificial intelligence will make homes even more intuitive and responsive, while advances in materials science will enable more sustainable and durable construction methods. Virtual and augmented reality technologies may change how we design and experience our living spaces.</p>
      
      <p>The homes of tomorrow will be more than just places to live—they will be dynamic ecosystems that support our physical, mental, and social well-being while minimizing our environmental impact. As we continue to innovate and push the boundaries of residential design, one thing remains constant: the home will always be the foundation of our lives, a place where we can grow, connect, and thrive.</p>
    `,
    author: "Space Builder Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Design Trends",
    image: "/images/banner1.png",
    authorBio: "The Space Builder Team brings together expertise in architecture, design, and sustainable construction to create innovative living spaces that redefine modern residential living.",
    tags: ["Smart Home", "Sustainability", "Modern Design", "Wellness", "Technology"]
  },
  "sustainable-construction-building-tomorrow": {
    id: 2,
    title: "Sustainable Construction: Building for Tomorrow",
    content: `
      <p>The construction industry stands at a critical juncture where traditional practices must evolve to meet the challenges of climate change and resource depletion. Sustainable construction is no longer a niche approach but a fundamental necessity that's reshaping how we build, what materials we use, and how we think about the lifecycle of our structures.</p>
      
      <h2>The Environmental Imperative</h2>
      <p>Traditional construction methods have long been associated with significant environmental impact, from carbon emissions and resource depletion to waste generation and habitat destruction. The built environment accounts for approximately 40% of global energy consumption and 30% of greenhouse gas emissions. These staggering statistics have catalyzed a paradigm shift toward sustainable construction practices.</p>
      
      <p>Sustainable construction seeks to minimize environmental impact while maximizing efficiency and occupant well-being. This approach encompasses everything from material selection and energy efficiency to waste reduction and lifecycle assessment. It's a holistic methodology that considers not just how a building is constructed, but how it performs throughout its entire lifespan.</p>
      
      <h2>Innovative Materials and Technologies</h2>
      <p>The sustainable construction revolution is being driven by remarkable innovations in materials science and building technology. Traditional materials like concrete and steel are being reimagined with reduced carbon footprints, while entirely new materials are emerging from renewable sources.</p>
      
      <p>Engineered bamboo, cross-laminated timber, and recycled composites are increasingly replacing conventional materials in structural applications. These alternatives often offer superior strength-to-weight ratios, renewable sourcing, and carbon sequestration benefits. Advanced insulation materials, smart glass, and phase-change materials are dramatically improving building energy efficiency, reducing the operational carbon footprint of buildings throughout their lifecycle.</p>
      
      <h2>Energy Efficiency and Net-Zero Buildings</h2>
      <p>Energy efficiency lies at the heart of sustainable construction. Modern buildings are being designed to achieve net-zero energy consumption through a combination of passive design strategies, active systems, and renewable energy integration. Passive design includes optimal building orientation, natural ventilation, daylight harvesting, and thermal mass utilization to minimize energy requirements.</p>
      
      <p>Active systems include high-efficiency HVAC equipment, LED lighting, and energy management systems that optimize consumption based on occupancy and usage patterns. Renewable energy integration, primarily through solar panels and geothermal systems, enables buildings to generate their own clean energy, reducing reliance on grid power and minimizing carbon emissions.</p>
      
      <h2>Water Conservation and Management</h2>
      <p>Water scarcity is a growing global concern, making water conservation a critical component of sustainable construction. Modern buildings incorporate comprehensive water management strategies that reduce consumption, harvest rainwater, and recycle greywater for non-potable uses.</p>
      
      <p>Low-flow fixtures, water-efficient landscaping, and smart irrigation systems significantly reduce water consumption. Rainwater harvesting systems collect and store precipitation for various uses, while greywater recycling systems treat and reuse water from showers, sinks, and laundry for toilet flushing and irrigation. These approaches not only conserve water but also reduce the strain on municipal water systems.</p>
      
      <h2>Waste Reduction and Circular Economy</h2>
      <p>The construction industry has traditionally been one of the largest generators of waste, but sustainable practices are transforming this reality. Prefabrication and modular construction methods significantly reduce on-site waste while improving quality control and construction efficiency. These approaches allow for precise material calculations and factory-controlled conditions that minimize excess and errors.</p>
      
      <p>The circular economy principles are increasingly being applied to construction, with buildings designed for deconstruction and material recovery. This approach considers how materials can be reused, recycled, or repurposed at the end of a building's lifecycle, creating a closed-loop system that minimizes waste and maximizes resource efficiency.</p>
      
      <h2>Indoor Environmental Quality</h2>
      <p>Sustainable construction extends beyond environmental considerations to encompass the health and well-being of building occupants. Indoor environmental quality focuses on creating spaces that support physical health, mental well-being, and productivity through careful attention to air quality, lighting, acoustics, and thermal comfort.</p>
      
      <p>Advanced ventilation systems, low-VOC materials, and air filtration technologies ensure optimal indoor air quality. Natural lighting strategies, circadian rhythm lighting, and glare control create comfortable visual environments. Acoustic design and sound-absorbing materials minimize noise pollution, creating peaceful and productive spaces.</p>
      
      <h2>The Economic Case for Sustainability</h2>
      <p>While sustainable construction often requires higher initial investment, the long-term economic benefits are substantial. Energy-efficient buildings significantly reduce operational costs through lower utility bills and maintenance requirements. Healthier indoor environments improve occupant productivity and reduce absenteeism, providing tangible economic benefits for commercial buildings.</p>
      
      <p>Sustainable buildings also command higher property values and rental rates, attracting environmentally conscious tenants and buyers. As regulations become more stringent and carbon pricing becomes more widespread, the economic advantages of sustainable construction will continue to grow.</p>
      
      <h2>Looking Forward</h2>
      <p>The future of sustainable construction holds exciting possibilities. Emerging technologies like 3D printing with recycled materials, self-healing concrete, and energy-generating building materials promise to further revolutionize the industry. Artificial intelligence and building information modeling (BIM) are enabling more efficient design, construction, and operation of sustainable buildings.</p>
      
      <p>As we face the urgent challenges of climate change and resource depletion, sustainable construction offers a pathway to creating buildings that not only meet our needs but preserve the planet for future generations. It's a transformation that's not just necessary but inevitable, reshaping the built environment into one that's harmonious with nature and supportive of human flourishing.</p>
    `,
    author: "Design Team",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Sustainability",
    image: "/images/banner2.png",
    authorBio: "Our Design Team specializes in sustainable architecture and green building practices, creating innovative solutions that balance environmental responsibility with aesthetic excellence.",
    tags: ["Sustainability", "Green Building", "Energy Efficiency", "Innovation", "Environment"]
  }
};

// Related posts data
const getRelatedPosts = (currentSlug: string, currentCategory: string) => {
  const allPosts = Object.entries(blogPosts).map(([slug, post]) => ({ ...post, slug }));
  return allPosts
    .filter(post => post.slug !== currentSlug && post.category === currentCategory)
    .slice(0, 3);
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  const relatedPosts = post ? getRelatedPosts(params.slug, post.category) : [];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Featured Image */}
      <section className="relative h-96 md:h-[500px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <Link 
            href="/blogs"
            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-lg hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-16">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            
            {/* Author Info and Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{post.author}</h3>
                  <p className="text-sm text-gray-600">{post.authorBio}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isLiked 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  
                  {showShareMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                      >
                        <Facebook className="w-4 h-4 text-blue-600" />
                        Facebook
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                      >
                        <Twitter className="w-4 h-4 text-blue-400" />
                        Twitter
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                      >
                        <Linkedin className="w-4 h-4 text-blue-700" />
                        LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare('email')}
                        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                      >
                        <Mail className="w-4 h-4 text-gray-600" />
                        Email
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 font-bold mb-12 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="group cursor-pointer"
                  >
                    <Link href={`/blogs/${relatedPost.slug}`}>
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{relatedPost.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {relatedPost.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 text-blue-600 font-semibold">
                            Read More
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Subscribe to our newsletter for more insights and updates
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
}