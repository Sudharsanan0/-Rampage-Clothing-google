
import React from 'react';

const productData = [
  { 
    name: "Skirts", 
    imageUrl: "https://img.freepik.com/premium-photo/three-girls-school-uniforms-are-standing-row_1034986-121674.jpg" 
  },
  { 
    name: "Ties", 
    imageUrl: "https://imgproxy.johnhenric.com/preset:sharp/resize:fit:1250/gravity:nowe/quality:80/aHR0cHM6Ly9qb2huaGVucmljLmNlbnRyYWNkbi5uZXQvY2xpZW50L2R5bmFtaWMvaW1hZ2VzLzE0NjNfMDlmYWU0MzdmZS1hMDE0ODUtMDMtMS1vcmlnaW5hbC5qcGc=" 
  },
  { 
    name: "Kids Uniforms", 
    imageUrl: "https://myclothing.com/cdn/shop/files/AS2_2952.jpg?format=pjpg&v=1757593457&width=1024" 
  },
  { 
    name: "Hoodies", 
    imageUrl: "https://static.bershka.net/assets/public/c276/c8a2/0f8a47508218/c0f14ae9cc17/07368498721-p/07368498721-p.jpg?ts=1719397868260&w=800" 
  },
  { 
    name: "Socks", 
    imageUrl: "https://blackberrys.com/cdn/shop/files/Cotton_Black_Printed_Socks_Toyo-SC000284N1-image1_1600x.jpg?v=1731415396" 
  },
  { 
    name: "Sweaters", 
    imageUrl: "https://shopdressup.com/cdn/shop/files/shopdressup_blue_striped_oversized_sweater-14.jpg?v=1736364216&width=1500" 
  },
  { 
    name: "Kids Lowers", 
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/6/SU/MK/XH/116820769/ajog-zoom-leg-grip-lower-500x500.jpg" 
  },
  { 
    name: "Caps", 
    imageUrl: "https://img01.ztat.net/article/spp-media-p1/3f55974a3032403aad8a0e66bd91cb40/4df1188036604bca8f9866875eef40db.jpg?imwidth=1800&filter=packshot" 
  }
];

const ProductsPage: React.FC = () => {
  return (
    <section className="py-20 pt-32 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">We Manufacture & Export</h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            A showcase of the custom apparel we produce with quality and care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData.map((item, index) => (
            <div key={index} className="bg-brand-accent rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <img src={item.imageUrl} alt={item.name} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-dark">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;