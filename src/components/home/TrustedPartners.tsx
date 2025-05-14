
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    id: 1,
    name: "Аэрофлот",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Aeroflot_logo_%28en%29.svg"
  },
  {
    id: 2,
    name: "S7 Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg"
  },
  {
    id: 3,
    name: "UTair",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/UTair_Aviation_logo.svg"
  },
  {
    id: 4,
    name: "Победа",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pobeda_Airlines_logo.svg"
  },
  {
    id: 5,
    name: "Turkish Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Turkish_Airlines_logo.svg"
  },
  {
    id: 6,
    name: "Emirates",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
  }
];

const TrustedPartners = () => {
  return (
    <section className="my-12 py-8 bg-gray-50 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-medium text-gray-600 mb-8">
          Нам доверяют ведущие авиакомпании
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map(partner => (
            <Card key={partner.id} className="border-none shadow-none bg-transparent">
              <CardContent className="flex items-center justify-center p-4 h-20">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
