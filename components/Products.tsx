import React from 'react';


const products = [
  { 
    title: "School & Organisational Uniforms",
    description: "High-quality school uniforms designed for comfort and durability",
    imageUrl: "https://www.nordangliaeducation.com/-/media/corporate/news-events/thebenefitsofschoolsuniformsandwhyschoolshavethem/nais-al-khor_qatar_2020_021_jpg.jpg?rev=0ef7cdf8fc33473ca2841e1b6aa9ec1b&hash=0896D231A2FFD0BEC48965FC97428B93",
    
  },
  { 
    title: "Industrial Clothing Manufacturing",
    description: "Professional workwear and safety clothing for various industries",
    imageUrl: "https://unito.co.in/wp-content/uploads/2024/07/a-striking-photo-showcasing-various-types-of-indus-ewKTxRoYRW-B8r9mML4puw-ZRjM9KxrQ8-5TlcpbhJ5_Q-1.jpeg",
    
  },
  { 
    title: "Fashionable Clothing Manufacturing", 
    description: "Contemporary fashion pieces with quality craftsmanship",
    imageUrl: "https://img.freepik.com/premium-photo/portrait-cool-caucasian-youth-wearing-trendy-clothes-outfit-fashionable-men-women-stylish-wear-models-posing-camera_183219-3985.jpg",
  
  },
  { 
    title: "Embroidery & Fabric Printing",
    description: "Custom branding and design solutions for your garments",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSxIWrv7PoKbzeZlaau8CqNiDdTH_aGIxGA&s",
  
  },
];

const manufacturedItems = [
  "Skirts", "Ties", "Kids Uniforms", "Hoodies", "Socks", "Sweaters", "Kids Lowers", "Caps"
];

// FIX: Removed the `icon` prop as it was not being provided and caused a type error.
const ProductCard: React.FC<{ title: string; description: string; imageUrl: string; }> = ({ title, description, imageUrl }) => (
  <div className="bg-brand-accent rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
    <img src={imageUrl} alt={title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-brand-text-light text-base">{description}</p>
    </div>
  </div>
);

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Services & Product Range</h2>
          <p className="text-lg text-brand-text-light max-w-3xl mx-auto">
            Comprehensive manufacturing solutions for schools, corporations, and fashion brands
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              title={product.title} 
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-brand-accent rounded-xl shadow-md max-w-4xl mx-auto p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-brand-dark mb-6">We Manufacture & Export</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {manufacturedItems.map(item => (
                <span key={item} className="bg-brand-white text-brand-text-light font-medium py-2 px-5 rounded-lg cursor-default transition-all duration-300 hover:bg-brand-dark hover:text-brand-white hover:shadow-lg transform hover:-translate-y-1 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;