const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            About Our Studio
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p className="text-lg leading-relaxed">
              Hyde Hermit Studio was founded on the belief that art and imagination should be accessible to everyone. 
              What started as a small workshop has blossomed into a vibrant creative space where unique handcrafted 
              items come to life.
            </p>
            <p className="text-lg leading-relaxed">
              Every piece we create is made with passion and attention to detail. From miniature fantasy creatures 
              to custom dice sets and enchanting dioramas, we pour our hearts into each creation. We believe that 
              handmade items carry a special magic that mass-produced goods simply cannot replicate.
            </p>
            <p className="text-lg leading-relaxed">
              Our studio is more than just a business—it's a community of creative souls who share a love for 
              craftsmanship and imagination. Whether you're a collector, a gamer, or simply someone who appreciates 
              the beauty of handmade art, we invite you to explore our world and become part of our story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
