
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import SearchForm from '@/components/flight/SearchForm';
import PopularDestinations from '@/components/flight/PopularDestinations';
import TrustedPartners from '@/components/home/TrustedPartners';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroBanner />
        
        <div className="container mx-auto px-4 -mt-10 relative z-10 mb-8">
          <SearchForm />
        </div>
        
        <div className="container mx-auto px-4">
          <PopularDestinations />
          
          <TrustedPartners />
          
          {/* Преимущества сервиса */}
          <section className="my-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Почему выбирают нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 inline-flex mb-4">
                    <Icon name="Search" className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Удобный поиск</h3>
                  <p className="text-gray-600">
                    Ищите и сравнивайте билеты сотен авиакомпаний в один клик, экономя время и силы.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-full bg-green-100 p-3 inline-flex mb-4">
                    <Icon name="PiggyBank" className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Лучшие цены</h3>
                  <p className="text-gray-600">
                    Мы работаем напрямую с авиакомпаниями и предлагаем самые выгодные тарифы без скрытых комиссий.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="rounded-full bg-purple-100 p-3 inline-flex mb-4">
                    <Icon name="Shield" className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Надежная поддержка</h3>
                  <p className="text-gray-600">
                    Наши специалисты готовы помочь вам с бронированием и ответить на все вопросы 24/7.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Подписка на новости */}
          <section className="my-16 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Не упустите выгодные предложения</h2>
              <p className="text-gray-600 mb-6">
                Подпишитесь на нашу рассылку и получайте эксклюзивные предложения, 
                скидки и информацию о распродажах первыми
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2"
                >
                  Подписаться
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
