import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Helper to generate a single optimized Unsplash URL
const generateOptimizedSrc = (baseUrl, width = 400) => {
    if (!baseUrl.includes('unsplash.com')) return baseUrl;
    const url = new URL(baseUrl);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', '75');
    url.searchParams.set('fm', 'webp');
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('auto', 'format');
    return url.toString();
};

// Helper to generate srcset for Unsplash images
const generateSrcSet = (baseUrl, widths = [400, 600]) => {
  if (!baseUrl.includes('unsplash.com')) return '';
  const url = new URL(baseUrl);
  url.searchParams.delete('w');
  url.searchParams.set('q', '75');
  url.searchParams.set('fm', 'webp');
  url.searchParams.set('fit', 'crop');
  url.searchParams.set('auto', 'format');

  return widths.map(width => {
    url.searchParams.set('w', width.toString());
    return `${url.toString()} ${width}w`;
  }).join(', ');
};

const NewsCard = ({ category, title, image }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const newsCardSizes = "(min-width: 768px) 33vw, 100vw";
  
  return (
    React.createElement('div', { className: "bg-neutral-100 border border-neutral-200 rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300" },
      React.createElement('div', { className: "w-full h-40 bg-neutral-200" },
        React.createElement('img', {
          src: generateOptimizedSrc(image, 400),
          srcSet: generateSrcSet(image),
          sizes: newsCardSizes,
          alt: title, 
          loading: "lazy", 
          onLoad: () => setIsLoaded(true),
          onError: (e) => { e.currentTarget.style.visibility = 'hidden'; },
          className: `w-full h-full object-cover group-hover:scale-105 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`
        })
      ),
      React.createElement('div', { className: "p-4" },
        React.createElement('span', { className: "text-sm font-bold text-primary mb-1 inline-block" }, category),
        React.createElement('h4', { className: "font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2 h-12" }, title)
      )
    )
  );
};


const NewsPreview = () => {
    const { t } = useTranslation();
    return (
    React.createElement('section', { className: "py-20 bg-white" },
        React.createElement('div', { className: "container mx-auto px-4" },
            React.createElement('h2', { className: "text-4xl font-bold text-center mb-12 text-text-primary" }, t('news.title')),
            React.createElement('div', { className: "grid md:grid-cols-3 gap-8" },
                React.createElement(NewsCard, { category: t('news.card1.category'), title: t('news.card1.title'), image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=60" }),
                React.createElement(NewsCard, { category: t('news.card2.category'), title: t('news.card2.title'), image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=60" }),
                React.createElement(NewsCard, { category: t('news.card3.category'), title: t('news.card3.title'), image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=60" })
            )
        )
    )
)};

export default NewsPreview;