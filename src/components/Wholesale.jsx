import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Briefcase, Award, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Custom Branding',
    desc: 'We offer white-labeling and private branding options for large orders.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Quality Assurance',
    desc: 'Batch-tested products ensuring consistent fragrance and burn time.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Fast Logistics',
    desc: 'Efficient supply chain for timely delivery across the country.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Wholesale Rates',
    desc: 'Competitive pricing tiers for retailers, distributors, and exporters.'
  }
];

const Wholesale = () => {
  return (
    <section id="wholesale" className="wholesale-section bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md-flex items-center gap-12">
          <div className="wholesale-text flex-1">
            <h2 className="text-5xl font-bold text-white mb-6">Partner With Us</h2>
            <p className="text-xl text-text-muted mb-8">
              Grow your business with Gandh Productions. We cater to bulk requirements for temples, ashrams, hotels, and retail chains. Our manufacturing capacity ensures scalability without compromising on the authentic fragrance.
            </p>
            
            <div className="wholesale-grid grid md-grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="benefit-item flex items-start gap-4"
                >
                  <div className="benefit-icon text-primary mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{benefit.title}</h4>
                    <p className="text-text-muted text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <a href="#contact" className="btn btn-primary">Become a Partner</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;
