import Footer from "../footer"
import Header from "../header"


export default function EcosystemPage({
    title,
    subtitle,
    heroImage,
    description,
    stats,
    imageGallery = [],
    children,
    ecosystem
  }) {
    return (
      <>
       <Header/>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="font-kapital-section-header">{title}</h1>
            {subtitle && <p className="mt-4 text-lg max-w-xl">{subtitle}</p>}
          </div>
        </section>
  
        {/* Description */}
        <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold mb-4">About the {title}</h2>
          <p className="font-body-copy leading-relaxed">{description}</p>
        </section>
  
        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <section className="py-8 px-6 max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold mb-4">Key Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded shadow text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}
  
        {/* Image Gallery */}
        {imageGallery.length > 0 && (
          <section className="py-10 px-6 max-w-6xl mx-auto">
            <h2 className="text-lg font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {imageGallery.map((src, idx) => (
                <img key={idx} src={src} alt={`Gallery ${idx}`} className="rounded shadow object-cover w-full h-48" />
              ))}
            </div>
          </section>
        )}
  
        {/* Additional Custom Content (e.g. charts, maps, etc.) */}
        {children && (
          <section className="py-10 px-6 max-w-6xl mx-auto">{children}</section>
        )}
      </div>
      <Footer/>
      </>
     
    );
  }
  