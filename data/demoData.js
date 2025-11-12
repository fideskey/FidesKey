import { Globe, Scale, TrendingUp, Shield, HeartPulse, Leaf, AcademicCap, Cpu, Trophy, Ticket, Users, Gender, Compass, Home, Settings } from '../components/Icons.js';

export const trendingTopics = [
  "topics.tech", "topics.sustainability", "topics.economy", "topics.health",
  "topics.education", "topics.ai", "topics.energy", "topics.cybersecurity", "topics.geopolitics",
  "topics.crises", "topics.medical", "topics.climate", "topics.football", "topics.cinema"
];

export const sidebarData = [
  { icon: Globe, titleKey: 'cat.international', subcategoryKeys: ['sub.international.1', 'sub.international.2', 'sub.international.3', 'sub.international.4', 'sub.international.5', 'sub.international.6', 'sub.international.7'] },
  { icon: Scale, titleKey: 'cat.politics', subcategoryKeys: ['sub.politics.1', 'sub.politics.2', 'sub.politics.3', 'sub.politics.4', 'sub.politics.5', 'sub.politics.6', 'sub.politics.7'] },
  { icon: TrendingUp, titleKey: 'cat.economy', subcategoryKeys: ['sub.economy.1', 'sub.economy.2', 'sub.economy.3', 'sub.economy.4', 'sub.economy.5', 'sub.economy.6', 'sub.economy.7', 'sub.economy.8'] },
  { icon: Shield, titleKey: 'cat.security', subcategoryKeys: ['sub.security.1', 'sub.security.2', 'sub.security.3', 'sub.security.4', 'sub.security.5', 'sub.security.6'] },
  { icon: HeartPulse, titleKey: 'cat.health', subcategoryKeys: ['sub.health.1', 'sub.health.2', 'sub.health.3', 'sub.health.4', 'sub.health.5', 'sub.health.6', 'sub.health.7'] },
  { icon: Leaf, titleKey: 'cat.environment', subcategoryKeys: ['sub.environment.1', 'sub.environment.2', 'sub.environment.3', 'sub.environment.4', 'sub.environment.5', 'sub.environment.6', 'sub.environment.7'] },
  { icon: AcademicCap, titleKey: 'cat.education', subcategoryKeys: ['sub.education.1', 'sub.education.2', 'sub.education.3', 'sub.education.4', 'sub.education.5', 'sub.education.6'] },
  { icon: Cpu, titleKey: 'cat.tech', subcategoryKeys: ['sub.tech.1', 'sub.tech.2', 'sub.tech.3', 'sub.tech.4', 'sub.tech.5', 'sub.tech.6', 'sub.tech.7'] },
  { icon: Trophy, titleKey: 'cat.sports', subcategoryKeys: ['sub.sports.1', 'sub.sports.2', 'sub.sports.3', 'sub.sports.4', 'sub.sports.5', 'sub.sports.6', 'sub.sports.7'] },
  { icon: Ticket, titleKey: 'cat.culture', subcategoryKeys: ['sub.culture.1', 'sub.culture.2', 'sub.culture.3', 'sub.culture.4', 'sub.culture.5', 'sub.culture.6', 'sub.culture.7'] },
  { icon: Users, titleKey: 'cat.society', subcategoryKeys: ['sub.society.1', 'sub.society.2', 'sub.society.3', 'sub.society.4', 'sub.society.5', 'sub.society.6'] },
  { icon: Gender, titleKey: 'cat.gender', subcategoryKeys: ['sub.gender.1', 'sub.gender.2', 'sub.gender.3', 'sub.gender.4'] },
];

export const modeSelectorData = [
    { id: 'standard', icon: Home, label: 'Standard' },
    { id: 'focus', icon: Settings, label: 'Focus' },
    { id: 'discover', icon: Compass, label: 'Descubrir' },
];

const initialVideoData = [
    // International
    { id: 2, category: 'cat.international', subcategoryKey: 'sub.international.6', duration: '7:30', title: 'videos.2.title', source: 'Council on Foreign Relations', sourceIcon: Globe, views: '21K', likes: '1.1K', shares: '300', thumbnail: 'https://images.unsplash.com/photo-1569333333423-74b73405085a?auto=format&fit=crop&w=800&q=60', highlights: ['videos.2.h1', 'videos.2.h2'], publishDate: '2024-11-12', relevance: 97 },
    { id: 20, category: 'cat.international', subcategoryKey: 'sub.international.4', duration: '15:00', title: 'videos.6.title', source: 'Council on Foreign Relations', sourceIcon: Globe, views: '8K', likes: '400', shares: '90', thumbnail: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=60', highlights: ['videos.6.h1', 'videos.6.h2'], publishDate: '2024-11-13', relevance: 90 },

    // Politics
    { id: 6, category: 'cat.politics', subcategoryKey: 'sub.politics.2', duration: '12:10', title: 'videos.6.title', source: 'The Economist', sourceIcon: Scale, views: '12K', likes: '550', shares: '150', thumbnail: 'https://images.unsplash.com/photo-1529107386315-e0921a547016?auto=format&fit=crop&w=800&q=60', highlights: ['videos.6.h1', 'videos.6.h2'], publishDate: '2024-10-05', relevance: 93 },
    { id: 17, category: 'cat.politics', subcategoryKey: 'sub.politics.4', duration: '4:10', title: 'videos.17.title', source: 'Transparencia Internacional', sourceIcon: Scale, views: '10K', likes: '500', shares: '100', thumbnail: 'https://images.unsplash.com/photo-1587398182792-5871895a62a0?auto=format&fit=crop&w=800&q=60', highlights: ['videos.17.h1', 'videos.17.h2'], publishDate: '2024-09-22', relevance: 86 },
    { id: 24, category: 'cat.politics', subcategoryKey: 'sub.politics.6', duration: '18:20', title: 'videos.17.title', source: 'The Economist', sourceIcon: Scale, views: '22K', likes: '1.8K', shares: '450', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=60', highlights: ['videos.17.h1', 'videos.17.h2'], publishDate: '2024-11-06', relevance: 95 },

    // Economy
    { id: 4, category: 'cat.economy', subcategoryKey: 'sub.economy.3', duration: '5:15', title: 'videos.4.title', source: 'Fondo Monetario Internacional', sourceIcon: TrendingUp, views: '25K', likes: '1.5K', shares: '400', thumbnail: 'https://images.unsplash.com/photo-1643101341142-832d2069f5a6?auto=format&fit=crop&w=800&q=60', highlights: ['videos.4.h1', 'videos.4.h2'], publishDate: '2024-11-03', relevance: 94 },
    { id: 13, category: 'cat.economy', subcategoryKey: 'sub.economy.1', duration: '4:20', title: 'videos.13.title', source: 'Bloomberg Economics', sourceIcon: TrendingUp, views: '18K', likes: '890', shares: '210', thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60', highlights: ['videos.13.h1', 'videos.13.h2'], publishDate: '2024-11-05', relevance: 92 },
    { id: 22, category: 'cat.economy', subcategoryKey: 'sub.economy.5', duration: '32:00', title: 'videos.4.title', source: 'Fondo Monetario Internacional', sourceIcon: TrendingUp, views: '15K', likes: '900', shares: '250', thumbnail: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=60', highlights: ['videos.4.h1', 'videos.4.h2'], publishDate: '2024-11-09', relevance: 91 },
    
    // Security
    { id: 8, category: 'cat.security', subcategoryKey: 'sub.security.4', duration: '8:00', title: 'videos.8.title', source: 'OTAN', sourceIcon: Shield, views: '19K', likes: '1.3K', shares: '350', thumbnail: 'https://images.unsplash.com/photo-1614064548237-096537d54648?auto=format&fit=crop&w=800&q=60', highlights: ['videos.8.h1', 'videos.8.h2'], publishDate: '2024-11-14', relevance: 98 },
    { id: 16, category: 'cat.security', subcategoryKey: 'sub.security.2', duration: '6:18', title: 'videos.16.title', source: 'Europol', sourceIcon: Shield, views: '15K', likes: '950', shares: '250', thumbnail: 'https://images.unsplash.com/photo-1550645612-82f5897e8f69?auto=format&fit=crop&w=800&q=60', highlights: ['videos.16.h1', 'videos.16.h2'], publishDate: '2024-11-10', relevance: 90 },

    // Health
    { id: 3, category: 'cat.health', subcategoryKey: 'sub.health.2', duration: '6:40', title: 'videos.3.title', source: 'Nature Journal', sourceIcon: HeartPulse, views: '40K', likes: '3.5K', shares: '800', thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=60', highlights: ['videos.3.h1', 'videos.3.h2'], publishDate: '2024-11-08', relevance: 99 },
    { id: 11, category: 'cat.health', subcategoryKey: 'sub.health.1', duration: '3:15', title: 'videos.11.title', source: 'The Lancet', sourceIcon: HeartPulse, views: '32K', likes: '2.4K', shares: '500', thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=60', highlights: ['videos.11.h1', 'videos.11.h2'], publishDate: '2024-09-15', relevance: 98 },
    { id: 21, category: 'cat.health', subcategoryKey: 'sub.health.3', duration: '2:50', title: 'videos.11.title', source: 'The Lancet', sourceIcon: HeartPulse, views: '50K', likes: '4.1K', shares: '1100', thumbnail: 'https://images.unsplash.com/photo-1579165466949-5f80a3d4b4a5?auto=format&fit=crop&w=800&q=60', highlights: ['videos.11.h1', 'videos.11.h2'], publishDate: '2024-11-11', relevance: 99 },

    // Environment
    { id: 5, category: 'cat.environment', subcategoryKey: 'sub.environment.3', duration: '5:50', title: 'videos.5.title', source: 'National Geographic', sourceIcon: Globe, views: '45K', likes: '3.1K', shares: '780', thumbnail: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=60', highlights: ['videos.5.h1', 'videos.5.h2'], publishDate: '2024-11-01', relevance: 88 },
    { id: 14, category: 'cat.environment', subcategoryKey: 'sub.environment.1', duration: '7:55', title: 'videos.14.title', source: 'World Wildlife Fund', sourceIcon: Leaf, views: '35K', likes: '2.9K', shares: '700', thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60', highlights: ['videos.14.h1', 'videos.14.h2'], publishDate: '2024-10-18', relevance: 92 },
    { id: 23, category: 'cat.environment', subcategoryKey: 'sub.environment.7', duration: '1:30', title: 'videos.14.title', source: 'World Wildlife Fund', sourceIcon: Leaf, views: '60K', likes: '5.0K', shares: '1500', thumbnail: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=800&q=60', highlights: ['videos.14.h1', 'videos.14.h2'], publishDate: '2024-11-07', relevance: 94 },

    // Education
    { id: 1, category: 'cat.education', subcategoryKey: 'sub.education.2', duration: '2:45', title: 'videos.1.title', source: 'MIT Technology Review', sourceIcon: AcademicCap, views: '24K', likes: '1.2K', shares: '340', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60', highlights: ['videos.1.h1', 'videos.1.h2'], publishDate: '2024-10-22', relevance: 95 },
    { id: 15, category: 'cat.education', subcategoryKey: 'sub.education.1', duration: '3:30', title: 'videos.15.title', source: 'Harvard Business Review', sourceIcon: AcademicCap, views: '14K', likes: '750', shares: '180', thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=60', highlights: ['videos.15.h1', 'videos.15.h2'], publishDate: '2024-10-25', relevance: 87 },
    
    // Tech
    { id: 12, category: 'cat.tech', subcategoryKey: 'sub.tech.1', duration: '9:05', title: 'videos.12.title', source: 'IBM Research', sourceIcon: Cpu, views: '30K', likes: '2.8K', shares: '650', thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=60', highlights: ['videos.12.h1', 'videos.12.h2'], publishDate: '2024-10-15', relevance: 96 },
    { id: 19, category: 'cat.tech', subcategoryKey: 'sub.tech.2', duration: '1:55', title: 'videos.12.title', source: 'MIT Technology Review', sourceIcon: AcademicCap, views: '18K', likes: '980', shares: '200', thumbnail: 'https://images.unsplash.com/photo-1614741118884-624f6c352a1a?auto=format&fit=crop&w=800&q=60', highlights: ['videos.12.h1', 'videos.12.h2'], publishDate: '2024-11-15', relevance: 96 },

    // Sports
    { id: 7, category: 'cat.sports', subcategoryKey: 'sub.sports.1', duration: '8:45', title: 'videos.7.title', source: 'FIFA Media', sourceIcon: Trophy, views: '55K', likes: '4.5K', shares: '1.2K', thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=60', highlights: ['videos.7.h1', 'videos.7.h2'], publishDate: '2024-10-28', relevance: 89 },
    { id: 25, category: 'cat.sports', subcategoryKey: 'sub.sports.5', duration: '2:10', title: 'videos.7.title', source: 'FIFA Media', sourceIcon: Trophy, views: '75K', likes: '6.2K', shares: '2000', thumbnail: 'https://images.unsplash.com/photo-1552064122-54012b2e2d57?auto=format&fit=crop&w=800&q=60', highlights: ['videos.7.h1', 'videos.7.h2'], publishDate: '2024-11-04', relevance: 92 },

    // Culture
    { id: 9, category: 'cat.culture', subcategoryKey: 'sub.culture.1', duration: '25:30', title: 'videos.9.title', source: 'Variety', sourceIcon: Ticket, views: '9K', likes: '720', shares: '180', thumbnail: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=800&q=60', highlights: ['videos.9.h1', 'videos.9.h2'], publishDate: '2024-08-20', relevance: 85 },
    { id: 18, category: 'cat.culture', subcategoryKey: 'sub.culture.2', duration: '6:25', title: 'videos.18.title', source: 'Sotheby\'s Institute of Art', sourceIcon: Ticket, views: '13K', likes: '850', shares: '220', thumbnail: 'https://images.unsplash.com/photo-1639103823391-76a27b87a412?auto=format&fit=crop&w=800&q=60', highlights: ['videos.18.h1', 'videos.18.h2'], publishDate: '2024-10-30', relevance: 84 },
    { id: 26, category: 'cat.culture', subcategoryKey: 'sub.culture.4', duration: '45:00', title: 'videos.9.title', source: 'Variety', sourceIcon: Ticket, views: '11K', likes: '950', shares: '250', thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=60', highlights: ['videos.9.h1', 'videos.9.h2'], publishDate: '2024-11-02', relevance: 88 },
    
    // Society
    { id: 10, category: 'cat.society', subcategoryKey: 'sub.society.1', duration: '4:55', title: 'videos.10.title', source: 'UN-Habitat', sourceIcon: Users, views: '11K', likes: '600', shares: '120', thumbnail: 'https://images.unsplash.com/photo-1542365889-1db8f85eb472?auto=format&fit=crop&w=800&q=60', highlights: ['videos.10.h1', 'videos.10.h2'], publishDate: '2024-09-30', relevance: 91 },
    
    // Gender
    { id: 27, category: 'cat.gender', subcategoryKey: 'sub.gender.1', duration: '5:30', title: 'videos.1.title', source: 'ONU Mujeres', sourceIcon: Gender, views: '15K', likes: '1.0K', shares: '250', thumbnail: 'https://images.unsplash.com/photo-1573496773905-f5b17e76b254?auto=format&fit=crop&w=800&q=60', highlights: ['videos.1.h1', 'videos.1.h2'], publishDate: '2024-11-16', relevance: 93 },
    { id: 28, category: 'cat.gender', subcategoryKey: 'sub.gender.2', duration: '6:15', title: 'videos.3.title', source: 'ONU Mujeres', sourceIcon: Gender, views: '12K', likes: '900', shares: '200', thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60', highlights: ['videos.3.h1', 'videos.3.h2'], publishDate: '2024-11-17', relevance: 92 },
];


const sourcesByCategory = {
  'cat.international': ['Council on Foreign Relations', 'UN News', 'Chatham House', 'Foreign Affairs Magazine'],
  'cat.politics': ['The Economist', 'Associated Press Politics', 'Reuters Politics', 'C-SPAN'],
  'cat.economy': ['Fondo Monetario Internacional', 'Bloomberg Economics', 'The Wall Street Journal', 'Financial Times'],
  'cat.security': ['OTAN', 'Europol', 'Jane\'s Defence Weekly', 'Stratfor'],
  'cat.health': ['Nature Journal', 'The Lancet', 'World Health Organization', 'New England Journal of Medicine'],
  'cat.environment': ['National Geographic', 'World Wildlife Fund', 'Greenpeace Reports', 'IPCC'],
  'cat.education': ['MIT Technology Review', 'Harvard Business Review', 'UNESCO', 'Coursera Official'],
  'cat.tech': ['IBM Research', 'Wired', 'Ars Technica', 'Google AI'],
  'cat.sports': ['FIFA Media', 'ESPN', 'Olympic Channel', 'Sky Sports'],
  'cat.culture': ['Variety', 'Sotheby\'s Institute of Art', 'The Metropolitan Museum of Art', 'Rolling Stone'],
  'cat.society': ['UN-Habitat', 'Pew Research Center', 'Human Rights Watch', 'Amnesty International'],
  'cat.gender': ['ONU Mujeres', 'The Geena Davis Institute', 'Malala Fund', 'Lean In Foundation'],
};

const thumbnailPool = [
    'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1605792657660-5de63fb55878?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1599930537489-132b1326c483?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1516116216624-53e6973bea1c?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1543351611-621068a53928?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd51622?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60'
];

let videoIdCounter = 100;
const generatedVideos = [];

sidebarData.forEach(category => {
  const sources = sourcesByCategory[category.titleKey];
  category.subcategoryKeys.forEach(subcategory => {
    for (let i = 0; i < 6; i++) {
      const randomTitleKey = `videos.${(videoIdCounter % 18) + 1}`;
      const randomSource = sources[Math.floor(Math.random() * sources.length)];
      
      let durationMinutes, durationSeconds;
      if (i < 2) { // 2 short videos
        durationMinutes = Math.floor(Math.random() * 2) + 1; // 1-2
        durationSeconds = Math.floor(Math.random() * 60);
      } else if (i < 4) { // 2 medium videos
        durationMinutes = Math.floor(Math.random() * 7) + 3; // 3-9
        durationSeconds = Math.floor(Math.random() * 60);
      } else if (i < 5) { // 1 long video
        durationMinutes = Math.floor(Math.random() * 20) + 10; // 10-29
        durationSeconds = Math.floor(Math.random() * 60);
      } else { // 1 extra long video
        durationMinutes = Math.floor(Math.random() * 20) + 30; // 30-49
        durationSeconds = Math.floor(Math.random() * 60);
      }

      const publishMonth = Math.floor(Math.random() * 11) + 1;
      const publishDay = Math.floor(Math.random() * 28) + 1;

      const newVideo = {
        id: videoIdCounter,
        category: category.titleKey,
        subcategoryKey: subcategory,
        duration: `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`,
        title: `${randomTitleKey}.title`,
        source: randomSource,
        sourceIcon: category.icon,
        views: `${(Math.random() * 90 + 5).toFixed(1)}K`,
        likes: `${(Math.random() * 4 + 0.5).toFixed(1)}K`,
        shares: `${Math.floor(Math.random() * 500) + 50}`,
        thumbnail: thumbnailPool[videoIdCounter % thumbnailPool.length],
        highlights: [`${randomTitleKey}.h1`, `${randomTitleKey}.h2`],
        publishDate: `2024-${publishMonth.toString().padStart(2, '0')}-${publishDay.toString().padStart(2, '0')}`,
        relevance: Math.floor(Math.random() * 40) + 60, // 60-99
      };
      generatedVideos.push(newVideo);
      videoIdCounter++;
    }
  });
});

export const videoData = [...initialVideoData, ...generatedVideos];