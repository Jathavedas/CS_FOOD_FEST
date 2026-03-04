import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { foodItems, type FoodItem } from '@/data/foodItems';
import { Search, Filter, Info, X, Leaf, Activity, ChefHat } from 'lucide-react';

const FoodItems = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedFood) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFood]);

  const categories = ['All', ...Array.from(new Set(foodItems.map(item => item.category)))];

  const filteredItems = foodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });



  return (
    <section id="food-items" className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <ChefHat className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white/80">Our Menu</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
              Delicious Offerings
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Savor every bite of our carefully curated menu, crafted with passion by the CS Department
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-10"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search food items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <Filter className="w-5 h-5 text-white/40 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Food Grid */}

        <motion.div
          layout // Added layout for smooth grid re-sizing
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                // 1. Removed variants={itemVariants}
                // 2. Added explicit animation states below:
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 flex flex-col h-full">
                  
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white/80 border border-white/10">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="px-4 py-2 rounded-full text-lg font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white/50 mb-4 line-clamp-2 flex-grow">
                      {item.description}
                    </p>

                    {/* View Details Button */}
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedFood(item)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 bg-white/10 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 border border-white/10 hover:border-transparent mt-auto relative z-20"
                    >
                      <Info className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-4">
              <Search className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No items found</h3>
            <p className="text-white/50">Try adjusting your search or filter</p>
          </motion.div>
        )}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedFood && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedFood(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl hide-scrollbar"
            >
              <button
                onClick={() => setSelectedFood(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-80 w-full">
                <img
                  src={selectedFood.image}
                  alt={selectedFood.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-3 inline-block">
                    {selectedFood.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                      {selectedFood.name}
                    </h2>
                    <span className="text-2xl font-bold text-cyan-400">
                      ₹{selectedFood.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Description */}
                <div>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {selectedFood.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Ingredients */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Leaf className="w-5 h-5 text-green-400" />
                      <h3 className="text-xl font-semibold text-white">Ingredients</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedFood.ingredients.map((ingredient, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Nutrition */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Activity className="w-5 h-5 text-purple-400" />
                      <h3 className="text-xl font-semibold text-white">Nutrition Value</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Calories</p>
                        <p className="text-white font-semibold">{selectedFood.nutrition.calories} kcal</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Protein</p>
                        <p className="text-white font-semibold">{selectedFood.nutrition.protein}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Carbs</p>
                        <p className="text-white font-semibold">{selectedFood.nutrition.carbs}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Fat</p>
                        <p className="text-white font-semibold">{selectedFood.nutrition.fat}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FoodItems;