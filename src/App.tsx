import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Shield, Droplet, Hammer, Ruler, Link as LinkIcon, Zap, Drill, MapPin, ChevronRight, Phone, MessageCircle } from "lucide-react";
import heroImg from "./assets/images/hardware_tools_hero_1779215918659.png";
import storeImg from "./assets/images/store_front_view_1779216254653.png";
import toolsImg from "./assets/images/tools_close_up_1779216273215.png";
import { ReactNode, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { catalogItems, CatalogItem } from "./lib/catalogData";

function CategoryCard({ title, icon, description, onClick }: { title: string, icon: ReactNode, description: string, onClick?: () => void }) {
  return (
    <Card className="hover:border-primary/50 transition-colors cursor-pointer group" onClick={onClick}>
      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("Hand Tools");
  const [selectedProduct, setSelectedProduct] = useState<CatalogItem | null>(null);
  
  const handleCategoryClick = (category: string) => {
    setActiveTab(category);
    document.getElementById("catalog-details")?.scrollIntoView({ behavior: "smooth" });
  };
  
  const categories = ["Hand Tools", "Power Tools", "Plumbing", "Gardening", "Security", "Measuring", "Fastening", "Electrical"];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
              <Wrench size={24} className="-rotate-45" />
            </div>
            <span className="font-bold text-xl tracking-tight uppercase">Gachami's Gen Store</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#catalog" className="transition-colors hover:text-primary">Catalog</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#location" className="transition-colors hover:text-primary">Find Store</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+254721343571" className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <Phone size={16} />
              <span>Call Us</span>
            </a>
            <a href="https://wa.me/254721343571" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default" }), "bg-green-600 hover:bg-green-700 text-white")}>
              <MessageCircle size={16} className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-slate-950 overflow-hidden h-[600px] md:h-[700px]">
        <div className="absolute inset-0 z-0">
          <Carousel 
            className="w-full h-full"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent className="-ml-0 h-full">
              {[heroImg, storeImg, toolsImg].map((imgSrc, index) => (
                <CarouselItem key={index} className="pl-0 basis-full h-full">
                  <div className="relative w-full h-[600px] md:h-[700px]">
                    <img
                      src={imgSrc}
                      alt={`Gachami's Gen Store hardware showcase ${index + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
        </div>
        
        <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center">
          <div className="max-w-2xl space-y-6 text-slate-50">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Tools & Supplies to Get the <span className="text-slate-300">Job Done Right</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              From small home repairs to major construction projects, Gachami's Gen Store provides top-quality hardware, tools, and supplies in Nanyuki.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#catalog" className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90")}>
                Explore Catalog
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#location" className={cn(buttonVariants({ size: "lg" }), "bg-white text-slate-950 hover:bg-slate-200")}>
                Find Our Store
                <MapPin className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Catalog */}
      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Extensive Catalog</h2>
            <p className="text-muted-foreground text-lg">We stock a wide variety of tools and supplies tailored for professionals and DIY enthusiasts alike.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <CategoryCard 
              title="Hand Tools" 
              icon={<Hammer size={32} />} 
              description="High-quality hammers, screwdrivers, pliers, and more." 
              onClick={() => handleCategoryClick("Hand Tools")}
            />
            <CategoryCard 
              title="Power Tools" 
              icon={<Drill size={32} />} 
              description="High-performance cutting and sanding tools like polishers."
              onClick={() => handleCategoryClick("Power Tools")} 
            />
            <CategoryCard 
              title="Plumbing" 
              icon={<Droplet size={32} />} 
              description="Pipes, fittings, wrenches, and plumbing accessories." 
              onClick={() => handleCategoryClick("Plumbing")}
            />
            <CategoryCard 
              title="Gardening" 
              icon={<div className="font-bold text-2xl">🌱</div>} 
              description="Spades, shears, rakes, and landscaping essentials." 
              onClick={() => handleCategoryClick("Gardening")}
            />
             <CategoryCard 
              title="Security" 
              icon={<Shield size={32} />} 
              description="Padlocks, chains, heavy-duty locks, and safety gear." 
              onClick={() => handleCategoryClick("Security")}
            />
             <CategoryCard 
              title="Measuring" 
              icon={<Ruler size={32} />} 
              description="Tapes, levels, calipers, and precise measurement devices." 
              onClick={() => handleCategoryClick("Measuring")}
            />
             <CategoryCard 
              title="Fastening" 
              icon={<LinkIcon size={32} />} 
              description="Nails, screws, bolts, anchors, and adhesives." 
              onClick={() => handleCategoryClick("Fastening")}
            />
             <CategoryCard 
              title="Electrical" 
              icon={<Zap size={32} />} 
              description="Light electrical tools, testers, wires, and switches." 
              onClick={() => handleCategoryClick("Electrical")}
            />
          </div>

          {/* Detailed Item Catalog */}
          <div id="catalog-details" className="pt-12 scroll-mt-24 border-t">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex flex-wrap w-full h-auto gap-2 justify-center bg-transparent mb-8">
                {categories.map(cat => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat} 
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6 py-2 border transition-colors shadow-sm"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map(cat => (
                <TabsContent key={cat} value={cat} className="focus-visible:outline-none">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {catalogItems
                      .filter((item) => item.category === cat)
                      .map((item) => (
                        <Card 
                          key={item.id} 
                          className="overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer flex flex-col h-full"
                          onClick={() => setSelectedProduct(item)}
                        >
                          <div className="aspect-square w-full overflow-hidden bg-muted">
                            <img 
                              src={item.imageUrl} 
                              alt={item.name} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <CardContent className="p-4 bg-card text-center flex flex-col justify-between flex-grow gap-3">
                            <h4 className="font-medium text-sm text-card-foreground leading-tight line-clamp-2">{item.name}</h4>
                            <div className="pt-2 mt-auto border-t border-muted">
                              <span className="text-xs font-semibold text-primary uppercase tracking-wide flex items-center justify-center gap-1 group-hover:text-primary/80 transition-colors">
                                Inquire Now
                                <ChevronRight className="w-3 h-3" />
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl w-11/12 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="rounded-lg overflow-hidden bg-muted flex items-center justify-center relative aspect-square md:aspect-auto">
            {selectedProduct && (
              <img 
                src={selectedProduct.imageUrl} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
          <div className="flex flex-col space-y-4 justify-center">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                  {selectedProduct?.category}
                </span>
                <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  In Stock
                </span>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight">
                {selectedProduct?.name}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              {selectedProduct?.description}
            </DialogDescription>
            <div className="pt-6 mt-auto flex flex-col sm:flex-row gap-3">
              <a 
                href={`https://wa.me/254721343571?text=Hi, I'm inquiring about the ${selectedProduct?.name}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(buttonVariants({ size: "lg" }), "w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white")}
              >
                <MessageCircle size={18} className="mr-2" />
                Message on WhatsApp
              </a>
              <a 
                href="tel:+254721343571" 
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full cursor-pointer")}
              >
                <Phone size={18} className="mr-2" />
                Call Store
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Location Section */}
      <section id="location" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-2">
              <MapPin size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Visit Our Store</h2>
            <p className="text-lg text-muted-foreground w-full max-w-md leading-relaxed">
              We are conveniently located along Nanyuki-Marura road, at the Container House 2024. Come and explore our full range of products.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-muted-foreground">X2VW+47G Nanyuki<br/>+47 G Nanyuki</p>
                </div>
              </div>
            </div>
            <Button className="mt-4">Get Directions</Button>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 bg-slate-200">
               {/* Embed Google Maps with basic Q param */}
               <iframe 
                src="https://maps.google.com/maps?q=X2VW%2B47G%20Nanyuki&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Gachami's Gen Store Location"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-lg flex items-center justify-between gap-6 border">
              <div>
                <b className="block text-sm uppercase tracking-wider text-muted-foreground mb-1">Status</b>
                <span className="text-lg font-bold flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500 block"></span> Open Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white pb-2">
              <div className="bg-white text-slate-950 p-1 rounded-sm">
                <Wrench size={20} className="-rotate-45" />
              </div>
              <span className="font-bold text-lg tracking-tight uppercase">Gachami's Gen Store</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Providing Nanyuki with the best hardware, tools, and construction supplies for any project.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#catalog" className="hover:text-white transition-colors">Catalog</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Store Location</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+254721343571" className="hover:text-white transition-colors">+254 721 343 571</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} />
                <a href="https://wa.me/254721343571" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              </li>
              <li className="pt-2">X2VW+47G Nanyuki</li>
              <li>Container House 2024</li>
              <li>Nanyuki - Marura Road</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Gachami's Gen Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
