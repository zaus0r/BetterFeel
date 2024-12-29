import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Instagram, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import SEO from '../components/common/SEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import OptimizedImage from '../components/common/OptimizedImage';

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const mainContentRef = React.useRef<HTMLDivElement>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('E-postadress krävs');
      return false;
    }
    if (!email.includes('@')) {
      setEmailError('E-postadressen måste innehålla @');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Ogiltig e-postadress. Kontrollera formatet (exempel@domain.com)');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setFormData({ ...formData, email: newEmail });
    if (newEmail) {
      validateEmail(newEmail);
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!validateEmail(formData.email)) {
      return;
    }

    setStatus('loading');

    const portalId = '144805695';
    const formGuid = 'e8649e1c-a4c9-4ea0-afa0-d33d909c258e';

    const data = {
      fields: [
        {
          name: "firstname",
          value: formData.name
        },
        {
          name: "email",
          value: formData.email
        },
        {
          name: "telephone",
          value: formData.phone || ''
        },
        {
          name: "message",
          value: formData.message
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
      setStatusMessage('Tack för ditt meddelande! Vi återkommer till dig så snart som mjligt.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setStatusMessage('Ett fel uppstod. Vänligen försök igen eller kontakta oss via telefon.');
      console.error('Error:', error);
    }
  };

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Kontakta Oss | BetterFeel"
        description="Kontakta BetterFeel i Stockholm för frågor om våra behandlingar eller boka en tid. Vi finns här för att hjälpa dig på din resa mot bättre hälsa."
        keywords="kontakta betterfeel, boka tid, stockholm, kundservice, behandlingar"
        url="https://betterfeel.se/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Kontakt", item: "/kontakt" }
        ]}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src="/assets/images/hero/contact_hero.jpg"
              alt="Kontakta BetterFeel - Vi finns här för dig"
              isBackground
              priority
              className="absolute inset-0 w-full h-full"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative z-10 w-full text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-16 md:pt-32 pb-12 sm:pb-20 mt-[-12rem] sm:mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center mb-6"
              >
                <div className="h-px w-8 bg-rose-300 mr-4"></div>
                <span className="text-rose-200 uppercase tracking-wider text-base sm:text-lg font-medium" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Välkommen till oss</span>
                <div className="h-px w-8 bg-rose-300 ml-4"></div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
              >
                Kontakta BetterFeel
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
              >
                Vi finns här för att hjälpa dig på din resa mot bättre hälsa och välbefinnande
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <button
                  onClick={scrollToContent}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Kontakta oss
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section ref={mainContentRef} className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-b from-purple-50 via-white to-white backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-purple-900 mb-8 leading-tight">Besök oss</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                      <div>
                        <h3 className="text-2xl font-serif text-purple-900 mb-2">Adress</h3>
                        <p className="text-base text-gray-600 leading-relaxed">Kungstensgatan 59</p>
                        <p className="text-base text-gray-600 leading-relaxed">113 29 Stockholm</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                      <div>
                        <h3 className="text-2xl font-serif text-purple-900 mb-2">Telefon</h3>
                        <p className="text-base text-gray-600 leading-relaxed">073-714 08 60</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                      <div>
                        <h3 className="text-2xl font-serif text-purple-900 mb-2">E-post</h3>
                        <p className="text-base text-gray-600 leading-relaxed">info@betterfeel.se</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                      <div>
                        <h3 className="text-2xl font-serif text-purple-900 mb-2">Öppettider</h3>
                        <p className="text-base text-gray-600 leading-relaxed">Måndag - Fredag: 09:00 - 19:00</p>
                        <p className="text-base text-gray-600 leading-relaxed">Lördag - Söndag: Stängt</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 text-purple-400 mr-4 mt-1 flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif text-purple-900 mb-3">Sociala Medier</h3>
                        <div className="flex space-x-4">
                          <a
                            href="https://www.facebook.com/profile.php?id=61554186415765"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200"
                          >
                            <Facebook className="w-6 h-6" />
                            <span className="ml-2">Facebook</span>
                          </a>
                          <a
                            href="https://www.instagram.com/ubetterfeel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200"
                          >
                            <Instagram className="w-6 h-6" />
                            <span className="ml-2">Instagram</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-[300px] rounded-xl overflow-hidden shadow-lg"
                >
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=betterfeel+sverige+ab&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BetterFeel Location"
                    className="rounded-xl shadow-lg"
                  ></iframe>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-b from-purple-50 via-white to-white backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-purple-900 mb-8 leading-tight">Skicka meddelande</h2>
                
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Meddelande skickat!</h3>
                    <p className="text-gray-600">{statusMessage}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                        Namn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={status === 'loading'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                        E-post *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={status === 'loading'}
                        value={formData.email}
                        onChange={handleEmailChange}
                        className={`w-full px-4 py-2 rounded-lg border ${emailError ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-500'} focus:border-transparent transition-all duration-200 disabled:opacity-50`}
                      />
                      {emailError && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-600"
                        >
                          {emailError}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-2">
                        Telefon (valfritt)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        disabled={status === 'loading'}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                        Meddelande *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        disabled={status === 'loading'}
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-red-600"
                      >
                        <AlertCircle className="w-5 h-5" />
                        <span>{statusMessage}</span>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-colors duration-300 flex items-center justify-center text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Skicka meddelande
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start mb-6">
                  <Clock className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-serif text-purple-900 mb-3">Bokning & Avbokning</h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">
                      Du kan enkelt boka tid via vår online-bokning eller genom att ringa oss direkt. 
                      Vi hjälper dig gärna att hitta en tid som passar dig.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Vi ber dig att meddela eventuella ombokning eller avbokning senast 24 timmar innan din bokade tid. 
                      Vid senare avbokning debiteras full behandlingskostnad.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start mb-6">
                  <MapPin className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-serif text-purple-900 mb-3">Hitta Hit</h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">
                      Vi ligger centralt beläget på Kungstensgatan 59, bara en kort promenad från Odenplans tunnelbana och pendeltågsstation.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Det finns gatuparkering tillgänglig på Kungstensgatan och i närområdet.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;