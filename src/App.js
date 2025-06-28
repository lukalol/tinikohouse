import React, { useState, useEffect } from 'react';
import { ChevronDown, Wifi, Bath, Home, MapPin, Phone, Mail, Globe, ChevronLeft, ChevronRight, X, Users, Wind, Tv, Snowflake, Waves } from 'lucide-react';



const TinikoGuestHouse = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isFooterLanguageDropdownOpen, setIsFooterLanguageDropdownOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentRoomImage, setCurrentRoomImage] = useState(0);

  
  const galleryImages = [
  'img/gal/front.jpg',
  'img/gal/yard.jpg',
  'img/gal/kitchen.jpg',  
  'img/gal/plants.jpg' ,  
  'img/gal/inside.jpg' ,
  'img/gal/sea.jpg'  
];

  // Sample room images
   const roomImageSets = {
    1: [
      'img/1/1_1.jpg',
      'img/1/1_2.jpg',
      'img/1/1_3.jpg'
      
    ],
    2: [
      'img/2/2_1.jpg',
      'img/2/2_2.jpg',
      'img/2/2_3.jpg',
      'img/2/2_4.jpg',
    ],
    3: [
      'img/3/3_1.jpg',
      'img/3/3_2.jpg',
      'img/3/3_4.jpg',
      'img/3/3_5.jpg'
    ],
    4: [
      'img/4/4_1.jpg',
      'img/4/4_2.jpg',
      'img/4/4_3.jpg',
      'img/4/4_4.jpg',
      'img/4/4_5.jpg'
    ],
    5: [
      'img/5/5_1.jpg',
      'img/5/5_2.jpg',
      'img/5/5_3.jpg',
      'img/5/5_4.jpg'
    ],
    6: [
      'img/6/6_1.jpg',
      'img/6/6_2.jpg',
      'img/6/6_3.png'
    ]
  };

   const translations = {
    en: {
      rooms: 'Rooms',
      map: 'Map',
      contact: 'Contact',
      language: 'Language',
      welcomeTitle: 'Tiniko Guest House',
      welcomeSubtitle: 'Your comfortable stay in Ureki',
      roomsTitle: 'Our Rooms',
      roomNumber: 'Room',
      floor: 'Floor',
      amenities: 'Amenities',
      wifi: 'Free WiFi',
      bathroom: 'Private Bathroom',
      balcony: 'Balcony',
      aircon: 'Air Conditioning',
      tv: 'TV',
      miniFridge: 'Mini Fridge',
      seaside: 'Seaside View',
      capacity: 'Guests',
      viewPhotos: 'View Photos',
      mapTitle: 'Map',
      contactTitle: 'Contact Information',
      address: 'Takaishvili Street 87, Ureki',
      phone: 'Phone',
      email: 'Email',
      closePhotos: 'Close Photos',
      whatsapp: 'WhatsApp'
    },
    ka: {
      rooms: 'ოთახები',
      map: 'რუკა',
      contact: 'კონტაქტი',
      language: 'ენა',
      welcomeTitle: 'ტინიკოს სასტუმროში',
      welcomeSubtitle: 'თქვენი კომფორტული ყოფნა ურეკში',
      roomsTitle: 'ჩვენი ოთახები',
      roomNumber: 'ოთახი',
      floor: 'სართული',
      amenities: 'მომსახურება',
      wifi: 'უფასო WiFi',
      bathroom: 'კერძო სველი წერტილი',
      balcony: 'აივანი',
      aircon: 'კონდიციონერი',
      tv: 'ტელევიზორი',
      miniFridge: 'მინი მაცივარი',
      seaside: 'ზღვისპირა ხედი',
      capacity: 'ადგილიანი',
      viewPhotos: 'ფოტოების ნახვა',
      mapTitle: 'რუკა',
      contactTitle: 'საკონტაქტო ინფორმაცია',
      address: 'თაყაიშვილი ქუჩა 87, ურეკი',
      phone: 'ტელეფონი',
      email: 'ელ-ფოსტა',
      closePhotos: 'ფოტოების დახურვა',
      whatsapp: 'WhatsApp'
    },
    ru: {
      rooms: 'Номера',
      map: 'Карта',
      contact: 'Контакты',
      language: 'Язык',
      welcomeTitle: 'Гостевой дом Тинико',
      welcomeSubtitle: 'Ваш комфортный отдых в Уреки',
      roomsTitle: 'Наши номера',
      roomNumber: 'Номер',
      floor: 'Этаж',
      amenities: 'Удобства',
      wifi: 'Бесплатный WiFi',
      bathroom: 'Частная ванная',
      balcony: 'Балкон',
      aircon: 'Кондиционер',
      tv: 'Телевизор',
      miniFridge: 'Мини-холодильник',
      seaside: 'Вид на море',
      capacity: 'Местный',
      viewPhotos: 'Посмотреть фото',
      mapTitle: 'Карта',
      contactTitle: 'Контактная информация',
      address: 'Улица Такаишвили 87, Уреки',
      phone: 'Телефон',
      email: 'Эл. почта',
      closePhotos: 'Закрыть фото',
      whatsapp: 'WhatsApp'
    }
  };
  const rooms = [
    { id: 1, number: 1, floor: 1, capacity: 4, amenities: ['wifi', 'aircon', 'tv'] },
    { id: 2, number: 2, floor: 1, capacity: 4, amenities: ['wifi', 'bathroom', 'aircon', 'tv', 'miniFridge'] },
    { id: 3, number: 3, floor: 2, capacity: '3-4', amenities: ['wifi', 'bathroom', 'balcony', 'aircon', 'tv', 'miniFridge'] }, 
    { id: 4, number: 4, floor: 2, capacity: '4-5', amenities: ['wifi', 'bathroom', 'balcony', 'aircon', 'tv', 'miniFridge'] },
    { id: 5, number: 5, floor: 2, capacity: '2-3', amenities: ['wifi', 'bathroom', 'balcony', 'aircon', 'tv', 'miniFridge', 'seaside'] },
    { id: 6, number: 6, floor: 2, capacity: '4', amenities: ['wifi', 'bathroom', 'balcony', 'aircon', 'tv', 'miniFridge', 'seaside'] } 
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ka', name: 'ქართული', flag: '🇬🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const t = translations[currentLanguage];

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

   const nextRoomImage = () => {
    const currentRoomImages = roomImageSets[selectedRoom.number];
    setCurrentRoomImage((prev) => (prev + 1) % currentRoomImages.length);
  };

  const prevRoomImage = () => {
    const currentRoomImages = roomImageSets[selectedRoom.number];
    setCurrentRoomImage((prev) => (prev - 1 + currentRoomImages.length) % currentRoomImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500 ">
      {/* Header */}
      <header className=" bg-white shadow-lg sticky top-0 z-40 ">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Tiniko Guest House</h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('rooms')}
                className="text-gray-700 hover:text-cyan-400 transition-colors"
              >
                {t.rooms}
              </button>
              <button 
                onClick={() => scrollToSection('map')}
                className="text-gray-700 hover:text-cyan-400 transition-colors"
              >
                {t.map}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-cyan-400 transition-colors"
              >
                {t.contact}
              </button>
              
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <Globe className="w-5 h-5" />
                  <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 flex space-x-6">
            <button 
              onClick={() => scrollToSection('rooms')}
              className="text-gray-700 hover:text-cyan-400 transition-colors"
            >
              {t.rooms}
            </button>
            <button 
              onClick={() => scrollToSection('map')}
              className="text-gray-700 hover:text-cyan-400 transition-colors"
            >
              {t.map}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-cyan-400 transition-colors"
            >
              {t.contact}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-500">
        <div className="absolute inset-0 cursor-pointer" onClick={nextGalleryImage}>
          <img 
            src={galleryImages[currentGalleryImage]} 
            alt="Hotel"
            className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
          />
        </div>
        
        {/* Navigation arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevGalleryImage();
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-200 z-20 shadow-lg hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextGalleryImage();
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-200 z-20 shadow-lg hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="px-4">
            
            
          </div>
        </div>

        {/* Gallery indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentGalleryImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentGalleryImage === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

       <section id="rooms" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.roomsTitle}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {rooms.map((room) => (
              <div key={room.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                <img 
                  src={roomImageSets[room.number][0]} 
                  alt={`Room ${room.number}`}
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setSelectedRoom(room);
                    setCurrentRoomImage(0);
                  }}
                />
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {t.roomNumber} {room.number}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t.floor} {room.floor}
                  </p>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="font-medium mb-2">{t.amenities}:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        <Users className="w-4 h-4 mr-1" />
                        {room.capacity} {t.capacity}
                      </span>
                      {room.amenities.includes('wifi') && (
                        <span className="flex items-center text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                          <Wifi className="w-4 h-4 mr-1" />
                          {t.wifi}
                        </span>
                      )}
                      {room.amenities.includes('bathroom') && (
                        <span className="flex items-center text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                          <Bath className="w-4 h-4 mr-1" />
                          {t.bathroom}
                        </span>
                      )}
                      {room.amenities.includes('balcony') && (
                        <span className="flex items-center text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                          <Home className="w-4 h-4 mr-1" />
                          {t.balcony}
                        </span>
                      )}
                      {room.amenities.includes('aircon') && (
                        <span className="flex items-center text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                          <Wind className="w-4 h-4 mr-1" />
                          {t.aircon}
                        </span>
                      )}
                       {room.amenities.includes('tv') && (
                        <span className="flex items-center text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
                          <Tv className="w-4 h-4 mr-1" />
                          {t.tv}
                        </span>
                      )}
                      {room.amenities.includes('miniFridge') && (
                        <span className="flex items-center text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          <Snowflake className="w-4 h-4 mr-1" />
                          {t.miniFridge}
                        </span>
                      )}
                      {room.amenities.includes('seaside') && (
                        <span className="flex items-center text-sm bg-teal-100 text-teal-800 px-2 py-1 rounded">
                          <Waves className="w-4 h-4 mr-1" />
                          {t.seaside}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedRoom(room);
                      setCurrentRoomImage(0); // Reset to first image when opening modal
                    }}
                    className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors mt-auto"
                  >
                    {t.viewPhotos}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Photo Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">
                  {t.roomNumber} {selectedRoom.number}
                </h3>
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src={roomImageSets[selectedRoom.number][currentRoomImage]} 
                  alt={`Room ${selectedRoom.number}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
                
                <button
                  onClick={prevRoomImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextRoomImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {roomImageSets[selectedRoom.number].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentRoomImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentRoomImage === index ? 'bg-cyan-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setSelectedRoom(null)}
                className="w-full mt-6 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {t.closePhotos}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Map Section */}
      <section id="map" className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.mapTitle}</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.123456789!2d41.96789!3d41.98654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUreki%2C%20Takaishvili%20Street%2087!5e0!3m2!1sen!2sge!4v1640995200000!5m2!1sen!2sge"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tiniko Guest House Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            {/* Address */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ADDRESS</h3>
              <p className="text-gray-600">{t.address}</p>
            </div>
            
            {/* Phone */}
           <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">PHONE</h3>
              <div className="space-y-2 text-gray-600">
                <div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>+995 593-49-48-52</span>
                    <a 
                      href="https://wa.me/995593494852" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600 transition-colors"
                    >
                      {t.whatsapp}
                    </a>
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentLanguage === 'ka' ? 'ლელა' : currentLanguage === 'ru' ? 'Лела' : 'Lela'}
                  </div>
                </div>
                <div>
                  <div>+995 591-11-41-01</div>
                  <div className="text-sm text-gray-500">
                    {currentLanguage === 'ka' ? 'მიხეილ' : currentLanguage === 'ru' ? 'Михаил' : 'Mikheil'}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>+995 571-11-64-47</span>
                    <a 
                      href="https://wa.me/995571116447" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600 transition-colors"
                    >
                      {t.whatsapp}
                    </a>
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentLanguage === 'ka' ? 'ლუკა' : currentLanguage === 'ru' ? 'Лука' : 'Luka'}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>+995 511-45-35-44</span>
                    <a 
                      href="https://wa.me/995511453544" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600 transition-colors"
                    >
                      {t.whatsapp}
                    </a>
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentLanguage === 'ka' ? 'დემეტრე' : currentLanguage === 'ru' ? 'Дмитрий' : 'Dimitri'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">EMAIL</h3>
              <p className="text-gray-600">tinikohouse@gmail.com</p>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TinikoGuestHouse;