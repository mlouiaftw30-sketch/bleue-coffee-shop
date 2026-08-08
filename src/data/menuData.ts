import { MenuItem } from '../types';
import specialtyLatteImg from '../assets/images/specialty_latte_1786126331450.jpg';
import frenchPastryImg from '../assets/images/french_pastry_1786126342216.jpg';

export const MENU_ITEMS: MenuItem[] = [
  // Specialty Coffees
  {
    id: 'bleue-signature-latte',
    name: {
      en: 'Bleue! Orange Blossom Latte',
      fr: 'Latte Signature à la Fleur d\'Oranger',
      ar: 'لاتيه بماء الزهر التونسي',
    },
    description: {
      en: 'Our flagship espresso crafted with steamed organic oat milk, subtle organic Tunisian orange blossom, and raw Sidr honey.',
      fr: 'Notre espresso phare préparé avec du lait d\'avoine bio, une touche de fleur d\'oranger tunisienne et du miel pur.',
      ar: 'إسبريسو فاخر مع حليب الشوفان العضوي، لمسة من ماء الزهر التونسي، وعسل سدر نقي.',
    },
    priceTND: 8.5,
    category: 'coffee',
    image: specialtyLatteImg,
    tags: ['signature', 'hot', 'popular'],
    calories: 190,
    prepTime: '4 mins',
    options: {
      milk: ['Oat Milk', 'Almond Milk', 'Whole Milk', 'Coconut Milk'],
      sweetness: ['Standard', 'Less Sweet', 'Extra Sweet', 'Unsweetened'],
      extras: [{ name: 'Extra Espresso Shot', priceTND: 2.5 }, { name: 'Pistachio Crunch', priceTND: 1.5 }]
    }
  },
  {
    id: 'caramel-salted-iced-latte',
    name: {
      en: 'Caramel Sea Salt Iced Latte',
      fr: 'Latte Glacé Caramel & Sel de Guérande',
      ar: 'لاتيه مثلوج بالكراميل والملح',
    },
    description: {
      en: 'Double shot espresso poured over cold milk, ice, and homemade salted butter caramel sauce from Cap Bon butter.',
      fr: 'Double espresso versé sur du lait froid, des glaçons et notre caramel au beurre salé maison.',
      ar: 'جرعة مضاعفة من الإسبريسو فوق الحليب البارد والثلج، مع صوص الكراميل المملح المحلي.',
    },
    priceTND: 9.0,
    category: 'coffee',
    image: specialtyLatteImg,
    tags: ['iced', 'popular'],
    calories: 220,
    prepTime: '3 mins',
    options: {
      milk: ['Whole Milk', 'Oat Milk', 'Almond Milk'],
      sweetness: ['Standard', 'Less Sweet', 'Extra Sweet']
    }
  },
  {
    id: 'cardamom-espresso-flat-white',
    name: {
      en: 'Cardamom Flat White',
      fr: 'Flat White à la Cardamome',
      ar: 'فلات وايت بالهيل المعطر',
    },
    description: {
      en: 'Velvety micro-foam milk blended with dark roasted Arabica double shot infused with crushed cardamom pods.',
      fr: 'Mousse de lait veloutée mélangée à un double espresso infusé aux gousses de cardamome écrasées.',
      ar: 'رغوة حليب مخملية مدموجة مع إسبريسو أرابيكا غامق معتق بمسحوق الهيل المعطر.',
    },
    priceTND: 7.5,
    category: 'coffee',
    image: specialtyLatteImg,
    tags: ['hot', 'signature'],
    calories: 140,
    prepTime: '3 mins'
  },
  {
    id: 'single-origin-espresso',
    name: {
      en: 'Single Origin Espresso (Ethiopia Guji)',
      fr: 'Espresso Pure Origine (Éthiopie Guji)',
      ar: 'إسبريسو خالي مختار (إثيوبيا)',
    },
    description: {
      en: 'Bright notes of jasmine, bergamot, and sweet peach nectar with a silky cremal layer.',
      fr: 'Notes vives de jasmin, bergamote et nectar de pêche avec une créma soyeuse.',
      ar: 'نكهات زكية من الياسمين والبرغموت مع طبقة الكريمة المخملية.',
    },
    priceTND: 5.5,
    category: 'coffee',
    image: specialtyLatteImg,
    tags: ['hot', 'vegan'],
    calories: 5,
    prepTime: '2 mins'
  },
  {
    id: 'cold-brew-sidi-bou-said',
    name: {
      en: '24h Cold Brew Sidi Bou Said',
      fr: 'Cold Brew 24h Sidi Bou Said',
      ar: 'كولد برو 24 ساعة سيدي بوسعيد',
    },
    description: {
      en: 'Slow steep cold brew coffee served over clear ice sphere with a twist of Mediterranean lemon peel.',
      fr: 'Café infusé à froid pendant 24 heures, servi sur sphère de glace avec un zeste de citron méditerranéen.',
      ar: 'قهوة باردة منقوعة لمدة 24 ساعة تقدم مع كورة ثلج وقشر الليمون المتوسطي.',
    },
    priceTND: 8.0,
    category: 'cold_drinks',
    image: specialtyLatteImg,
    tags: ['iced', 'vegan', 'signature'],
    calories: 10,
    prepTime: '1 min'
  },

  // Cold Drinks & Refreshers
  {
    id: 'deglet-nour-date-smoothie',
    name: {
      en: 'Tozeur Date & Almond Cream Smoothie',
      fr: 'Smoothie aux Dattes Deglet Nour & Amandes',
      ar: 'سموذي دقلة النور واللوز',
    },
    description: {
      en: 'Rich organic Deglet Nour dates from Tozeur blended with cold almond milk, banana, and a pinch of cinnamon.',
      fr: 'Dattes bio Deglet Nour de Tozeur mixées avec du lait d\'amande frais, banane et une pointe de cannelle.',
      ar: 'تمر دقلة النور العضوي الممتاز مخلوط مع حليب اللوز البارد والموز ورشة قرفة.',
    },
    priceTND: 10.0,
    category: 'cold_drinks',
    image: specialtyLatteImg,
    tags: ['signature', 'vegan', 'gluten_free', 'popular'],
    calories: 280,
    prepTime: '4 mins'
  },
  {
    id: 'mediterranean-citrus-iced-tea',
    name: {
      en: 'Sidi Bou Said Jasmine & Lemon Mint Refresher',
      fr: 'Thé Glacé Jasmin & Menthe Citron',
      ar: 'شاي ياسمين مثلج بالنعناع والليمون',
    },
    description: {
      en: 'Chilled green tea with natural jasmine petals, squeezed Cap Bon lemons, fresh garden mint, and wild agave.',
      fr: 'Thé vert glacé aux fleurs de jasmin, citrons du Cap Bon pressés et menthe fraîche.',
      ar: 'شاي أخضر بارد برائحة الياسمين مع ليمون الكاب بون الطازج وأوراق النعناع.',
    },
    priceTND: 7.0,
    category: 'cold_drinks',
    image: specialtyLatteImg,
    tags: ['iced', 'vegan', 'gluten_free'],
    calories: 85,
    prepTime: '3 mins'
  },

  // Pastries & Bakery
  {
    id: 'artisanal-butter-croissant',
    name: {
      en: 'French Butter Croissant (Pain Pur Beurre)',
      fr: 'Croissant Pur Beurre de Charente',
      ar: 'كرواسون الزبدة الفرنسية',
    },
    description: {
      en: 'Baked fresh every morning with 84% AOP butter. Flaky outer crust with airy, honeycombed interior.',
      fr: 'Cuit chaque matin avec du beurre AOP. Feuilletage croustillant et mie alvéolée.',
      ar: 'محضور طازج كل صباح بزبدة فرنسية عالية الجودة مع طبقات هشة مقرمشة.',
    },
    priceTND: 4.5,
    category: 'pastries',
    image: frenchPastryImg,
    tags: ['popular'],
    calories: 260,
    prepTime: 'Ready to serve'
  },
  {
    id: 'pain-au-chocolat-pistachio',
    name: {
      en: 'Pistachio & Valrhona Chocolate Roll',
      fr: 'Pain au Chocolat Valrhona & Pistaches',
      ar: 'بان أو شوكولا بالفستق والشوكلاتة',
    },
    description: {
      en: 'Feuilleté layered with dark Valrhona chocolate bars and topped with crushed Sicilian pistachios.',
      fr: 'Pâte feuilletée aux barres de chocolat noir Valrhona, nappée de pistaches concassées.',
      ar: 'طبقات هشة حشوة الشوكولاتة الداكنة المغطاة بفستق صقلي مجروش.',
    },
    priceTND: 6.5,
    category: 'pastries',
    image: frenchPastryImg,
    tags: ['signature', 'popular'],
    calories: 340,
    prepTime: 'Ready to serve'
  },
  {
    id: 'bleue-almond-baklava-tart',
    name: {
      en: 'Bleue! Pistachio & Almond Honey Tart',
      fr: 'Tartelette Feuilletée Amande & Pistache au Miel',
      ar: 'تارت اللوز والفستق مع العسل',
    },
    description: {
      en: 'Crisp pastry shell filled with roasted Tunisian almond frangipane, topped with green pistachios and blossom syrup.',
      fr: 'Fond de tarte croustillant garni de frangipane aux amandes de Tunisie, pistaches et sirop aromatisé.',
      ar: 'قاعدة تارت مقرمشة محشوة بعجينة اللوز التونسي المحمص، مع الفستق وقطر ماء الزهر.',
    },
    priceTND: 8.5,
    category: 'pastries',
    image: frenchPastryImg,
    tags: ['signature'],
    calories: 310,
    prepTime: 'Ready to serve'
  },

  // Brunch & Bowls
  {
    id: 'avocado-poached-egg-toast',
    name: {
      en: 'Avocado & Dukkah Poached Egg Toast',
      fr: 'Toast Avocat, Œuf Poché & Dukkah',
      ar: 'توست أفوكادو مع بيض بوشيه ودوّقة',
    },
    description: {
      en: 'Sourdough bread topped with smashed Hass avocado, organic poached eggs, feta cheese, and roasted hazelnut dukkah.',
      fr: 'Pain au levain, écrasé d\'avocat Hass, œufs pochés bio, feta et dukkah aux noisettes torréfiées.',
      ar: 'خبز التوست المحمص مع الأفوكادو، بيض عضوي بوشيه، جبنة فيتا وخلطة الدوّقة المكسرة.',
    },
    priceTND: 18.0,
    category: 'brunch',
    image: frenchPastryImg,
    tags: ['popular', 'signature'],
    calories: 420,
    prepTime: '10 mins'
  },
  {
    id: 'mediterranean-halloumi-quinoa-bowl',
    name: {
      en: 'Grilled Halloumi & Roasted Veggie Bowl',
      fr: 'Bowl Halloumi Grillé & Légumes Rôtis',
      ar: 'وعاء الحلوم المشوي والخضار المشوية',
    },
    description: {
      en: 'Warm quinoa with grilled Cyprus halloumi, roasted cherry tomatoes, courgettes, zaatar chickpeas, and pomegranate molasses.',
      fr: 'Quinoa tiède, halloumi grillé, tomates cerises rôties, courgettes, pois chiches au zaatar et mélasse de grenade.',
      ar: 'كينوا دافئة مع جبن حلوم مشوي، طماطم كرزية، كوسة مشوية، حمص بالزعتر ودبس الرمان.',
    },
    priceTND: 22.0,
    category: 'brunch',
    image: frenchPastryImg,
    tags: ['vegetarian', 'gluten_free'],
    calories: 480,
    prepTime: '12 mins'
  },

  // Teas & Desserts
  {
    id: 'tunisian-pine-nut-mint-tea',
    name: {
      en: 'Traditional Sidi Bou Said Mint Tea with Pine Nuts',
      fr: 'Thé à la Menthe de Sidi Bou Said aux Pignons',
      ar: 'شاي بالنعناع مع البندق (البنيون)',
    },
    description: {
      en: 'Authentic green tea steeped with fresh spearmint leaves and served hot with roasted pine nuts floating on top.',
      fr: 'Thé vert traditionnel infusé à la menthe fraîche, servi chaud avec des pignons de pin torréfiés.',
      ar: 'شاي أخضر تقليدي مع النعناع الطازج، يقدم ساخناً مع حبات الصنوبر المحمصة.',
    },
    priceTND: 7.0,
    category: 'tea_desserts',
    image: specialtyLatteImg,
    tags: ['signature', 'hot', 'vegan', 'gluten_free'],
    calories: 90,
    prepTime: '5 mins'
  },
  {
    id: 'matcha-vanilla-cloud-latte',
    name: {
      en: 'Ceremonial Uji Matcha Vanilla Cloud',
      fr: 'Matcha Cérémonial d\'Uji au Nuage de Vanille',
      ar: 'ماتشا أوجي مع رغوة الفانيليا',
    },
    description: {
      en: 'First harvest Japanese ceremonial matcha whisked with warm oat milk and layered with sweet vanilla cold foam.',
      fr: 'Matcha japonais de cérémonie, lait d\'avoine tiède et mousse froide de vanille.',
      ar: 'ماتشا يابانية فاخرة مخفوقة مع حليب الشوفان ورغوة الفانيليا الباردة.',
    },
    priceTND: 11.0,
    category: 'tea_desserts',
    image: specialtyLatteImg,
    tags: ['iced', 'vegan'],
    calories: 160,
    prepTime: '4 mins'
  },
  {
    id: 'bleue-tiramisu-espresso',
    name: {
      en: 'Bleue! Signature Coffee Tiramisu',
      fr: 'Tiramisu Artisanal au Café Bleue!',
      ar: 'تيراميسو بالقهوة التونسية',
    },
    description: {
      en: 'Savoiardi biscuits soaked in single origin Ethiopia espresso, layered with light mascarpone cream and cocoa dust.',
      fr: 'Biscuits cuillère imbibés d\'espresso d\'Éthiopie, crème mascarpone légère et cacao intense.',
      ar: 'بسكويت الملاكم المنقوع في إسبريسو إثيوبي مع طبقات الكريمة والكاكاو.',
    },
    priceTND: 9.5,
    category: 'tea_desserts',
    image: frenchPastryImg,
    tags: ['signature', 'popular'],
    calories: 380,
    prepTime: 'Ready to serve'
  }
];
