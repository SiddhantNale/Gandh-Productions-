import React from 'react';
import { motion } from 'framer-motion';
import incenseImg from '../assets/hero.png';
import cupDhoopImg from '../assets/cup-dhoop.png';
import lobanImg from '../assets/loban.png';
import kapoorImg from '../assets/kapoor.png';
import perfumesImg from '../assets/perfumes.png';

const products = [
  {
    category: 'Incense Sticks',
    name: 'Royal Gandh Agarbatti',
    desc: 'Premium hand-rolled sticks with natural essential oils for a divine atmosphere.',
    image: incenseImg
  },
  {
    category: 'Cup Dhoop',
    name: 'Mystic Sambrani Cups',
    desc: 'Charcoal-based dhoop cups that release thick, purifying smoke.',
    image: cupDhoopImg
  },
  {
    category: 'Loban',
    name: 'Pure Natural Loban',
    desc: 'Original frankincense resin for spiritual cleansing and meditation.',
    image: lobanImg
  },
  {
    category: 'Kapoor',
    name: 'Divine Camphor Tablets',
    desc: 'White, pure camphor for ritual purification and fresh air.',
    image: kapoorImg
  },
  {
    category: 'Perfumes',
    name: 'Ethereal Attars',
    desc: 'Concentrated perfume oils inspired by traditional Indian fragrances.',
    image: perfumesImg
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="products-section">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            Our Sacred Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Handcrafted with devotion to bring peace and divinity to your space.
          </motion.p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div 
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="product-card"
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name text-white">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <a href="#contact" className="text-primary font-bold hover:underline">Inquire Now →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
