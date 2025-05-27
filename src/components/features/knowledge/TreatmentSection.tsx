import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TreatmentData } from '../../../types/treatment';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

interface TreatmentSectionProps {
  data: TreatmentData;
  searchQuery: string;
}

const TreatmentSection: React.FC<TreatmentSectionProps> = ({ data, searchQuery }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'overview' && !expandedSections.includes('overview')) {
      setExpandedSections(prev => [...prev, 'overview']);
    }
  }, [searchParams, expandedSections]);

  useEffect(() => {
    // If there's a search query, expand all sections to show matches
    if (searchQuery) {
      setExpandedSections(['overview', 'technical', 'sections', 'faqs']);
    }
  }, [searchQuery]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isExpanded = (sectionId: string) => expandedSections.includes(sectionId);

  const matchesSearch = (text: string | string[]) => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    if (Array.isArray(text)) {
      return text.some(item => item.toLowerCase().includes(query));
    }
    return text.toLowerCase().includes(query);
  };

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <mark key={i} className="bg-yellow-200 rounded px-1">{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const shouldShowOverview = () => {
    if (!searchQuery) return true;
    
    return (
      matchesSearch(data.overview.description) ||
      data.overview.scientificPrinciples.some(principle => 
        matchesSearch(principle.title) || matchesSearch(principle.content)
      ) ||
      data.overview.benefits.some(benefit => 
        matchesSearch(benefit.title) || matchesSearch(benefit.points)
      ) ||
      data.overview.process.some(proc => 
        matchesSearch(proc.title) || matchesSearch(proc.steps)
      )
    );
  };

  const shouldShowTechnical = () => {
    if (!searchQuery) return true;
    
    return (
      matchesSearch(data.technical.equipment) ||
      data.technical.parameters.some(param => 
        matchesSearch(param.title) || matchesSearch(param.details)
      ) ||
      data.technical.safetyProtocols.some(protocol => 
        matchesSearch(protocol.title) || matchesSearch(protocol.protocols)
      ) ||
      matchesSearch(data.technical.certifications)
    );
  };

  const shouldShowSections = () => {
    if (!searchQuery) return true;
    
    return data.sections.some(section => 
      matchesSearch(section.title) || matchesSearch(section.content)
    );
  };

  const renderFAQs = () => {
    return data.faqs.map((faq, index) => {
      if (searchQuery && !matchesSearch(faq.question) && !matchesSearch(faq.answer)) {
        return null;
      }

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="mb-4 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
        >
          <h4 className="text-lg font-medium text-purple-900 mb-2">
            {searchQuery ? highlightText(faq.question) : faq.question}
          </h4>
          <p className="text-gray-700">
            {searchQuery ? highlightText(faq.answer) : faq.answer}
          </p>
        </motion.div>
      );
    }).filter(Boolean);
  };

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      {shouldShowOverview() && (
        <section>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => toggleSection('overview')}
            className="w-full flex justify-between items-center bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-medium text-purple-900">Översikt</h2>
            {isExpanded('overview') ? (
              <ChevronUp className="w-6 h-6 text-purple-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-purple-600" />
            )}
          </motion.button>

          <AnimatePresence>
            {isExpanded('overview') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
                >
                  <div className="prose max-w-none">
                    <p className="text-gray-700 mb-6 whitespace-pre-line">
                      {searchQuery ? highlightText(data.overview.description) : data.overview.description}
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <h3 className="text-xl font-medium text-purple-900 mb-4">Vetenskapliga Principer</h3>
                      <div className="space-y-6">
                        {data.overview.scientificPrinciples.map((principle, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white/50 rounded-lg p-6"
                          >
                            <h4 className="text-lg font-medium text-purple-900 mb-2">{principle.title}</h4>
                            <p className="text-gray-700 whitespace-pre-line">{principle.content}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="mt-8"
                    >
                      <h3 className="text-xl font-medium text-purple-900 mb-4">Fördelar</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.overview.benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white/50 rounded-lg p-6"
                          >
                            <h4 className="text-lg font-medium text-purple-900 mb-2">{benefit.title}</h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {benefit.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="text-gray-700">{point}</li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="mt-8"
                    >
                      <h3 className="text-xl font-medium text-purple-900 mb-4">Behandlingsprocess</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.overview.process.map((process, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white/50 rounded-lg p-6"
                          >
                            <h4 className="text-lg font-medium text-purple-900 mb-2">{process.title}</h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {process.steps.map((step, stepIndex) => (
                                <li key={stepIndex} className="text-gray-700">{step}</li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}

      {/* Technical Section */}
      {shouldShowTechnical() && (
        <section>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => toggleSection('technical')}
            className="w-full flex justify-between items-center bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-medium text-purple-900">Tekniska Specifikationer</h2>
            {isExpanded('technical') ? (
              <ChevronUp className="w-6 h-6 text-purple-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-purple-600" />
            )}
          </motion.button>
          
          <AnimatePresence>
            {isExpanded('technical') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
                >
                  <div className="prose max-w-none">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-xl font-medium text-purple-900 mb-4">Utrustning</h3>
                      <p className="text-gray-700 mb-6 whitespace-pre-line">{data.technical.equipment}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="mt-8"
                    >
                      <h3 className="text-xl font-medium text-purple-900 mb-4">Behandlingsparametrar</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.technical.parameters.map((param, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white/50 rounded-lg p-6"
                          >
                            <h4 className="text-lg font-medium text-purple-900 mb-2">{param.title}</h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {param.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="text-gray-700">{detail}</li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="mt-8"
                    >
                      <h3 className="text-xl font-medium text-purple-900 mb-4">Säkerhetsprotokoll</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.technical.safetyProtocols.map((protocol, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white/50 rounded-lg p-6"
                          >
                            <h4 className="text-lg font-medium text-purple-900 mb-2">{protocol.title}</h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {protocol.protocols.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700">{item}</li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="mt-8"
                    >
                      <h3 className="text-xl font-medium text-purple-900 mb-4">Certifieringar</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {data.technical.certifications.map((cert, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="text-gray-700"
                          >
                            {cert}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}

      {/* Additional Sections */}
      {shouldShowSections() && (
        <section>
          {/* ... existing sections code ... */}
        </section>
      )}

      {/* FAQs Section */}
      {renderFAQs().length > 0 && (
        <section>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => toggleSection('faqs')}
            className="w-full flex justify-between items-center bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-medium text-purple-900">Vanliga Frågor</h2>
            {isExpanded('faqs') ? (
              <ChevronUp className="w-6 h-6 text-purple-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-purple-600" />
            )}
          </motion.button>
          
          <AnimatePresence>
            {isExpanded('faqs') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4 space-y-4"
              >
                {renderFAQs()}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}

      {/* No Results Message */}
      {searchQuery && !shouldShowOverview() && !shouldShowTechnical() && !shouldShowSections() && renderFAQs().length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <p className="text-lg text-gray-600">
            Inga resultat hittades för "{searchQuery}". Försök med andra sökord.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default TreatmentSection;