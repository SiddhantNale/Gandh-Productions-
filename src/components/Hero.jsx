import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero relative">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg-dark"></div>
      </div>

      <div className="hero-content relative">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary font-semibold tracking-widest uppercase mb-4 block"
        >
          Established Tradition
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title font-bold text-white leading-tight"
        >
          Fragrance that <br />
          <span className="text-primary italic">Heals the Soul</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle mx-auto"
        >
          Premium incense sticks, dhoop, and pure divine fragrances manufactured with love from Gandh Productions. Experience the essence of tradition.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md-flex items-center justify-center gap-4"
        >
          <a href="#products" className="btn btn-primary">
            Explore Collection
          </a>
          <a href="#wholesale" className="btn btn-outline">
            Wholesale Inquiry
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
