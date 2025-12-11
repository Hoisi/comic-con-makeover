import { Instagram } from "lucide-react";
const InstagramFeed = () => {
  // Instagram posts - replace with actual feed data
  const instagramPosts = [{
    id: 1,
    image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=400&h=400&fit=crop"
  }, {
    id: 2,
    image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=400&h=400&fit=crop"
  }, {
    id: 3,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop"
  }, {
    id: 4,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=400&fit=crop"
  }, {
    id: 5,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop"
  }, {
    id: 6,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop"
  }, {
    id: 7,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop"
  }, {
    id: 8,
    image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=400&h=400&fit=crop"
  }, {
    id: 9,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=400&fit=crop"
  }];
  return <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-90" style={{
      backgroundImage: 'url(/images/pixel-moai-pattern.jpg)',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      backgroundSize: '50%'
    }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/80"></div>
      <div className="container relative z-10 max-w-5xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Follow Us on Instagram</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            @hydehermitstudio - Check out our latest updates and behind-the-scenes content
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 mb-6">
          {instagramPosts.map(post => <a key={post.id} href="https://instagram.com/hydehermit" target="_blank" rel="noopener noreferrer" className="relative aspect-square overflow-hidden group bg-muted">
              <img src={post.image} alt={`Instagram post ${post.id}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>)}
        </div>

        <div className="text-center">
          <a href="https://instagram.com/hydehermit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
            <Instagram className="w-5 h-5" />
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>
    </section>;
};
export default InstagramFeed;