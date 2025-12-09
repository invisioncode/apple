import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Sparkles, Send } from 'lucide-react';
import { queryAppleSpecialist } from '../services/geminiService';

interface SmartSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const SmartSearch: React.FC<SmartSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) {
        setQuery('');
        setResponse('');
        setHasSearched(false);
    }
  }, [isOpen]);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    setResponse(''); // Clear previous response

    const result = await queryAppleSpecialist(query);
    setResponse(result);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-xl animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="smart-search-title"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 max-w-4xl mx-auto w-full border-b border-gray-200/50">
        <div className="flex items-center gap-2 text-gray-500">
           <Sparkles className="w-5 h-5 text-apple-blue" aria-hidden="true" />
           <span id="smart-search-title" className="font-semibold text-apple-dark">Apple Intelligence Support</span>
        </div>
        <button 
            type="button"
            onClick={onClose} 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close search"
        >
          <X className="w-6 h-6 text-gray-500" aria-hidden="true" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto mt-20 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-apple-dark tracking-tight">
                Tìm kiếm. <span className="text-gray-400">Thông minh hơn.</span>
            </h2>

            <form onSubmit={handleSearch} className="relative w-full group" role="search">
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Hỏi về iPhone, so sánh Mac, hoặc tìm cửa hàng..."
                    className="w-full text-xl md:text-2xl p-6 pr-16 bg-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-apple-blue/20 transition-all placeholder:text-gray-400"
                    aria-label="Search Query"
                />
                <button 
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-apple-blue text-white rounded-xl hover:bg-apple-blue-hover disabled:opacity-50 disabled:hover:bg-apple-blue transition-all"
                    aria-label="Send Query"
                >
                    {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    ) : (
                        <Send className="w-6 h-6" aria-hidden="true" />
                    )}
                </button>
            </form>

            {/* Suggestions */}
            {!hasSearched && (
                 <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Gợi ý câu hỏi</p>
                    <div className="flex flex-wrap gap-2">
                        {['So sánh iPhone 15 và 16', 'MacBook Air M3 giá bao nhiêu?', 'Apple Watch nào pin trâu nhất?', 'Tìm cửa hàng gần đây'].map((suggestion) => (
                            <button 
                                type="button"
                                key={suggestion}
                                onClick={() => {
                                    setQuery(suggestion);
                                    // small timeout to allow state update before trigger
                                    setTimeout(() => handleSearch(), 0); 
                                }}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-apple-blue hover:text-apple-blue transition-colors shadow-sm"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                 </div>
            )}

            {/* Results */}
            {hasSearched && (
                <div className="animate-fade-in space-y-6" aria-live="polite">
                   {isLoading ? (
                       <div className="space-y-3 animate-pulse" aria-label="Loading response">
                           <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                           <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                           <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                       </div>
                   ) : (
                       <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-2xl ring-1 ring-black/5">
                           <div className="flex items-start gap-4">
                               <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white shrink-0" aria-hidden="true">
                                   <Sparkles className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-lg">Câu trả lời từ Chuyên gia:</h3>
                                    <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
                                        {response}
                                    </p>
                                </div>
                           </div>
                           <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                               <a href="#" className="text-apple-blue hover:underline text-sm font-medium" aria-label="View product details">
                                   Xem chi tiết sản phẩm ›
                               </a>
                           </div>
                       </div>
                   )}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SmartSearch;