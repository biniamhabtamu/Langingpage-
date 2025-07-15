import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X, ChevronDown, Sun, Moon, Search, User, ShoppingCart, Bell, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const [notificationCount, setNotificationCount] = useState(3);
  const [cartCount, setCartCount] = useState(2);
  const [messagesCount, setMessagesCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Handle clicks outside search bar
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { 
      name: "Products", 
      href: "#products", 
      submenu: [
        { name: "Web Development", href: "#web-dev", icon: "💻" },
        { name: "Mobile Apps", href: "#mobile", icon: "📱" },
        { name: "UI/UX Design", href: "#design", icon: "🎨" },
        { name: "AI Solutions", href: "#ai", icon: "🤖" },
        { name: "Cloud Services", href: "#cloud", icon: "☁️" }
      ],
      megaMenu: true
    },
    { 
      name: "Solutions", 
      href: "#solutions", 
      submenu: [
        { name: "For Startups", href: "#startups" },
        { name: "For Enterprises", href: "#enterprises" },
        { name: "For Education", href: "#education" }
      ]
    },
    { 
      name: "Resources", 
      href: "#resources", 
      submenu: [
        { name: "Blog", href: "#blog" },
        { name: "Documentation", href: "#docs" },
        { name: "Tutorials", href: "#tutorials" },
        { name: "Webinars", href: "#webinars" }
      ]
    },
    { name: "Pricing", href: "#pricing" },
    { name: "About Us", href: "#about" }
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery('');
    setSearchOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 text-sm">
        🎉 Special Offer: Get 30% off on all annual plans! Limited time only. <a href="#offer" className="font-bold underline ml-2">Claim Now →</a>
      </div>
      
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'} ${darkMode ? 'dark' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex-shrink-0 flex items-center">
                <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400 transition-transform hover:rotate-12" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Bright Mind
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Bar (collapsible) */}
              <div className="relative" ref={searchRef}>
                {searchOpen ? (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 200 }}
                    exit={{ opacity: 0, width: 0 }}
                    className="relative"
                  >
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-1 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                        autoFocus
                      />
                      <button 
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Search className="h-4 w-4" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <button 
                    onClick={() => setSearchOpen(true)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                )}
              </div>

              {/* Main Navigation Links */}
              <div className="flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    <button
                      onClick={() => link.submenu ? toggleSubmenu(index) : null}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors group"
                    >
                      {link.name}
                      {link.submenu && (
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''} group-hover:rotate-180`} />
                      )}
                    </button>
                    
                    {link.submenu && (
                      <AnimatePresence>
                        {activeSubmenu === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute left-0 mt-2 rounded-md shadow-lg py-1 z-50 ${link.megaMenu ? 'w-[600px] grid grid-cols-2 gap-4 p-4 bg-white dark:bg-gray-800' : 'w-48 bg-white dark:bg-gray-800'}`}
                          >
                            {link.megaMenu ? (
                              <>
                                <div>
                                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                                    Development
                                  </h3>
                                  {link.submenu.slice(0, 3).map((subItem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href={subItem.href}
                                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                      <span className="mr-2">{subItem.icon}</span>
                                      {subItem.name}
                                    </a>
                                  ))}
                                </div>
                                <div>
                                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                                    Advanced Solutions
                                  </h3>
                                  {link.submenu.slice(3).map((subItem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href={subItem.href}
                                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                      <span className="mr-2">{subItem.icon}</span>
                                      {subItem.name}
                                    </a>
                                  ))}
                                  <a
                                    href="#all-products"
                                    className="block px-4 py-2 mt-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                  >
                                    View all products →
                                  </a>
                                </div>
                              </>
                            ) : (
                              link.submenu.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                  {subItem.name}
                                </a>
                              ))
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* Icons for user actions */}
              <div className="flex items-center space-x-2 ml-4">
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
                  <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  {notificationCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </button>
                
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
                  <MessageSquare className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  {messagesCount > 0 && (
                    <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {messagesCount}
                    </span>
                  )}
                </button>
                
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
                  <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
                
                <div className="relative group">
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">Your Profile</a>
                    <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">Settings</a>
                    <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">Sign out</a>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-md hover:from-blue-700 hover:to-blue-600 transition-all flex items-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ChevronDown className="ml-1 h-4 w-4 transform rotate-90" />
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                aria-expanded="false"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-50 dark:bg-gray-800 px-4 py-2"
            >
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-800 shadow-lg overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                <div className="flex items-center justify-between px-3 py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                      <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Welcome back!</span>
                  </div>
                  <button 
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {darkMode ? (
                      <Sun className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <Moon className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                </div>
                
                {navLinks.map((link, index) => (
                  <div key={index}>
                    <button
                      onClick={() => link.submenu ? toggleSubmenu(index) : setMobileMenuOpen(false)}
                      className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <a href={!link.submenu ? link.href : undefined}>{link.name}</a>
                      {link.submenu && (
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    
                    {link.submenu && activeSubmenu === index && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-2 space-y-2">
                  <a
                    href="#login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Sign In
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-center text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;