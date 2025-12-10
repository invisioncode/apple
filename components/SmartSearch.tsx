
import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ChevronRight } from 'lucide-react';

interface SmartSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const SmartSearch: React.FC<SmartSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) {
        setQuery('');
        setHasSearched(false);
        setIsLoading(false);
    }
  }, [isOpen]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    
    // Simulate network delay for realistic feel
    setTimeout(() => {
        setIsLoading(false);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 z-[110] flex flex-col bg-white/95 backdrop-blur-xl animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="smart-search-title"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 max-w-4xl mx-auto w-full border-b border-gray-200/50">
        <div className="flex items-center gap-2 text-gray-500">
           <Search className="w-5 h-5" aria-hidden="true" />
           <span id="smart-search-title" className="font-semibold text-apple-dark">Tìm kiếm</span>
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
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-2xl mx-auto mt-10 md:mt-20 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-apple-dark tracking-tight">
                Tìm kiếm trên Apple.com
            </h2>

            <form onSubmit={handleSearch} className="relative w-full group" role="search">
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tìm iPhone, Mac, iPad..."
                    className="w-full text-lg md:text-2xl p-4 md:p-6 pr-12 md:pr-16 bg-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-apple-blue/20 transition-all placeholder:text-gray-400"
                    aria-label="Search Query"
                />
                <button 
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-apple-blue text-white rounded-xl hover:bg-apple-blue-hover disabled:opacity-50 disabled:hover:bg-apple-blue transition-all"
                    aria-label="Send Query"
                >
                    {isLoading ? (
                        <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    ) : (
                        <Search className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                    )}
                </button>
            </form>

            {/* Quick Links Suggestions (Pre-search) */}
            {!hasSearched && (
                 <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Liên kết nhanh</p>
                    <div className="flex flex-wrap gap-2">
                        {['Tìm cửa hàng', 'Phụ kiện', 'AirPods', 'AirTag'].map((suggestion) => (
                            <button 
                                type="button"
                                key={suggestion}
                                onClick={() => {
                                    setQuery(suggestion);
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

            {/* Results (Post-search) */}
            {hasSearched && !isLoading && (
                <div className="animate-fade-in space-y-6" aria-live="polite">
                    <h3 className="text-xl font-semibold text-gray-900">Kết quả cho "{query}"</h3>
                    
                    <div className="grid grid-cols-1 gap-4">
                        {/* Mock Result 1 */}
                        <div className="p-4 md:p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group">
                             <span className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Khám phá</span>
                             <div className="flex items-center justify-between">
                                 <div>
                                     <h4 className="text-lg font-semibold text-apple-dark group-hover:text-apple-blue transition-colors">iPhone 16 Pro</h4>
                                     <p className="text-sm text-gray-500">Tìm hiểu thêm về sản phẩm mới nhất.</p>
                                 </div>
                                 <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-apple-blue" />
                             </div>
                        </div>

                         {/* Mock Result 2 */}
                         <div className="p-4 md:p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group">
                             <span className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Hỗ trợ</span>
                             <div className="flex items-center justify-between">
                                 <div>
                                     <h4 className="text-lg font-semibold text-apple-dark group-hover:text-apple-blue transition-colors">Hỗ trợ Apple</h4>
                                     <p className="text-sm text-gray-500">Nhận trợ giúp về {query}.</p>
                                 </div>
                                 <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-apple-blue" />
                             </div>
                        </div>
                        
                        {/* Mock Result 3 */}
                        <div className="p-4 md:p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all cursor-pointer group">
                             <span className="text-xs font-semibold text-gray-500 uppercase mb-1 block">Cửa hàng</span>
                             <div className="flex items-center justify-between">
                                 <div>
                                     <h4 className="text-lg font-semibold text-apple-dark group-hover:text-apple-blue transition-colors">Mua {query}</h4>
                                     <p className="text-sm text-gray-500">Xem các tùy chọn mua hàng có sẵn.</p>
                                 </div>
                                 <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-apple-blue" />
                             </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SmartSearch;
