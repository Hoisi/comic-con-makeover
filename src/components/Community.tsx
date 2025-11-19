const Community = () => {
  return (
    <section className="py-12 bg-forest">
      <div className="container">
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block max-w-4xl mx-auto hover:opacity-90 transition-opacity"
        >
          <div className="bg-terracotta rounded-lg p-8 flex items-center gap-8 flex-col md:flex-row">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-white/10 rounded-lg flex items-center justify-center border-2 border-dashed border-white/30">
                <span className="text-white/60 text-center px-4">Add your Discord invite image here</span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Join Our Discord Community!
              </h2>
              <p className="text-xl text-white/90">
                Connect with fellow creators, share your work, and get exclusive updates
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Community;
