import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Wholesale from './components/Wholesale';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, CheckCircle, XCircle } from 'lucide-react';

function App() {
  const [isSending, setIsSending] = React.useState(false);
  const [status, setStatus] = React.useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/siddhantnale96@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <Hero />
        <ProductShowcase />
        <Wholesale />
        
        {/* About Section */}
        <section id="about" className="about-section bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">The Essence of GANDH</h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              Founded on the principles of purity and tradition, Gandh Productions has been a pioneer in the manufacturing of high-quality incense products. Our mission is to preserve the ancient art of fragrance making while using the finest natural ingredients harvested from sustainable sources.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container mx-auto px-4">
            <div className="section-title">
              <h2 className="text-white">Get in Touch</h2>
              <p>For inquiries, bulk orders, or partnership opportunities.</p>
            </div>
            
            <div className="grid md-grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="contact-info space-y-8">
                <a href="tel:+919890834249" className="contact-link">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold transition-colors">Call Us</h4>
                    <p className="text-text-muted">+919890834249 / +919657409480</p>
                  </div>
                </a>
                
                <a href="mailto:contact@gandhproductions.com" className="contact-link">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold transition-colors">Email</h4>
                    <p className="text-text-muted">contact@gandhproductions.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Gandh+Productions+Astagaon+Maharashtra" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold transition-colors">Visit Us</h4>
                    <p className="text-text-muted">Gandh Productions, Nale Vasti, Rahata-Shrirampur Road, Astagaon - 423107, Tal - Rahata, Dist - Ahilyanagar, Maharashtra</p>
                  </div>
                </a>
              </div>

              <div className="contact-form bg-glass p-8 rounded-3xl border border-glass-border">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New Website Inquiry - Gandh Productions" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div>
                    <label className="block text-sm text-text-muted mb-2">Full Name</label>
                    <input name="name" required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-muted mb-2">Email Address</label>
                    <input name="email" required type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-muted mb-2">Message</label>
                    <textarea name="message" required rows="4" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  {status === 'success' && (
                    <div className="feedback-message feedback-success">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="feedback-message feedback-error">
                      <XCircle className="w-5 h-5" />
                      <span>Something went wrong. Please check your EmailJS configurations or try again later.</span>
                    </div>
                  )}

                  <button 
                    disabled={isSending}
                    type="submit" 
                    className={`w-full btn btn-primary py-4 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-text-muted hover:text-primary"><Instagram /></a>
            <a href="#" className="text-text-muted hover:text-primary"><Facebook /></a>
          </div>
          <p className="text-text-muted text-sm">© 2026 Gandh Productions. All Rights Reserved. Built with passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
