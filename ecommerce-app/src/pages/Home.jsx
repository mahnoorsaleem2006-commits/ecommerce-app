import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';

const featured = products.filter(p => p.badge === 'Best Seller' || p.badge === 'New').slice(0, 4);

const categoryIcons = {
  Electronics: '💻',
  Fashion: '👗',
  'Home & Garden': '🏠',
  Books: '📚',
  Sports: '⚽',
};

const bannerSlides = [
  {
    title: 'Latest Electronics',
    subtitle: 'Up to 30% off on top brands',
    cta: 'Shop Electronics',
    category: 'Electronics',
    bg: 'from-blue-600 to-indigo-700',
    emoji: '🎧',
  },
  {
    title: 'Fashion Forward',
    subtitle: 'New arrivals — summer collection',
    cta: 'Explore Fashion',
    category: 'Fashion',
    bg: 'from-rose-500 to-pink-600',
    emoji: '👗',
  },
];

export default function Home() {
  return (
    <div className="pb-16">

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Week 01 Project — ShopNest
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
                Shop Smarter,<br />
                <span className="text-amber-300">Live Better</span>
              </h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-md">
                Discover thousands of products from top brands. Fast delivery, easy returns, and unbeatable prices.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/products">
                  <Button size="lg" variant="primary" className="bg-white text-primary-700 hover:bg-blue-50 shadow-lg">
                    Shop Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Browse Categories
                  </Button>
                </Link>
              </div>
              <div className="flex gap-8 mt-10">
                {[['10K+', 'Products'], ['50K+', 'Customers'], ['99%', 'Satisfaction']].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-2xl font-bold">{n}</div>
                    <div className="text-blue-200 text-sm">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-white/10 rounded-3xl rotate-6"></div>
                <div className="absolute inset-0 bg-white/10 rounded-3xl -rotate-3"></div>
                <div className="relative bg-white/20 rounded-3xl h-full flex items-center justify-center text-9xl">
                  🛍️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {categories.filter(c => c !== 'All').map(cat => (
              <Link
                key={cat}
                to={`/products?category=${cat}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-primary-50 hover:text-primary-700 text-gray-700 rounded-xl text-sm font-medium transition-all whitespace-nowrap border border-gray-200 hover:border-primary-200"
              >
                <span>{categoryIcons[cat]}</span>
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-primary-600 text-sm font-semibold uppercase tracking-wide mb-1">Handpicked for you</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Products</h2>
          </div>
          <Link to="/products" className="text-sm text-primary-600 font-medium hover:underline flex items-center gap-1">
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Promo Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid sm:grid-cols-2 gap-5">
          {bannerSlides.map(b => (
            <div key={b.title} className={`bg-gradient-to-r ${b.bg} text-white rounded-2xl p-8 flex items-center justify-between`}>
              <div>
                <h3 className="text-xl font-bold mb-1">{b.title}</h3>
                <p className="text-white/80 text-sm mb-4">{b.subtitle}</p>
                <Link
                  to={`/products?category=${b.category}`}
                  className="inline-block bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {b.cta}
                </Link>
              </div>
              <div className="text-6xl opacity-80">{b.emoji}</div>
            </div>
          ))}
        </div>
      </section>

      {/* All Products Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-primary-600 text-sm font-semibold uppercase tracking-wide mb-1">Our collection</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Popular Items</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/products">
            <Button size="lg" variant="outline">
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '🚚', title: 'Free Shipping', sub: 'On orders over $50' },
            { icon: '🔄', title: 'Easy Returns', sub: '30-day return policy' },
            { icon: '🔒', title: 'Secure Payment', sub: '100% safe & secure' },
            { icon: '💬', title: '24/7 Support', sub: 'Always here to help' },
          ].map(item => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
