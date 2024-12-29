import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const portalId = '144805695';
    const formGuid = 'aa7646b4-dd1a-43fb-999c-33ce879afcee';

    const data = {
      fields: [
        {
          name: "email",
          value: email
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
      setMessage('Tack för din prenumeration! Du kommer snart få ett bekräftelsemail.');
      setEmail('');
      // Reset success state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Ett fel uppstod. Vänligen kontrollera din e-postadress och försök igen.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-50 to-transparent opacity-30 rounded-bl-full"></div>
          
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Prenumeration bekräftad!</h3>
              <p className="text-gray-600">{message}</p>
            </motion.div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nyfiken på mer?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-sage-400 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Prenumerera på vårt nyhetsbrev för att få de senaste uppdateringarna om 
                frekvensbehandlingar, hälsotips och specialerbjudanden.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Din e-postadress"
                    required
                    disabled={status === 'loading'}
                    className={`flex-1 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all duration-300 bg-white/90 disabled:opacity-50 ${
                      status === 'error' ? 'border-red-300' : 'border-purple-200'
                    }`}
                    aria-label="E-postadress för nyhetsbrev"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#064e3b] hover:bg-[#043927] text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Prenumerera
                      </>
                    )}
                  </motion.button>
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 mt-4 text-red-600"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{message}</span>
                  </motion.div>
                )}
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
