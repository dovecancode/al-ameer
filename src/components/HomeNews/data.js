const newsArticles = [
  {
    id: 1,
    source: {
      name: 'Neurosciencenews.com',
    },
    author: 'Neuroscience News',
    title: 'Can Cannabis Improve Exercise Experience?',
    description:
      'The study shows that both THC and CBD can enhance exercise experience, with CBD even outperforming THC in some aspects.',
    url: 'https://neurosciencenews.com/exercise-cannabis-mood-25429/',
    urlToImage:
      'https://neurosciencenews.com/files/2024/01/cannabis-exercise-neurosicnec.jpg',
    publishedAt: '2024-01-06T22:57:57Z',
    content:
      'Summary: A study of 42 runners reveals that using cannabis before exercise can boost mood and enjoyment. The study shows that both THC and CBD can enhance exercise experience, with CBD even outperfor',
  },
  {
    id: 2,
    source: {
      name: 'Eatingwell.com',
    },
    author: 'https://www.facebook.com/EatingWell/',
    title:
      '7 Sneaky Signs You Have Leaky Gut Syndrome, According to a Dietitian - EatingWell',
    description:
      'Digestive issues, irritated skin, food allergies, joint pain, chronic fatigue, mood disorders, hormone imbalances and autoimmune disease all have one thing in common—they can be signs of a leaky gut.',
    url: 'https://www.eatingwell.com/sneaky-signs-of-leaky-gut-syndrome-8421526',
    urlToImage:
      'https://www.eatingwell.com/thmb/x_MnorzoQ9goF7Z_t3n6h5jsIjs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/What-is-Leaky-Gut-Syndrome-9a150663f11640daa6adee7e64724557.jpg',
    publishedAt: '2024-01-06T13:00:00Z',
    content:
      'Is your gut leaking? This is probably not a question you get asked often. After all, youre not a faucet or a pipe. But similar to a leaking pipe, the lining in your gut can become damaged, allowing s… [+7348 chars]',
  },
  {
    id: 3,
    source: {
      name: 'IFLScience',
    },
    author: 'Dr. Katie Spalding',
    title:
      'Obscure Psychoactive Drug Incredibly Effective At Treating PTSD In Military Vets, Study Suggests - IFLScience',
    description: 'Bringing new meaning to "going for a trip in Mexico".',
    url: 'https://www.iflscience.com/obscure-psychoactive-drug-incredibly-effective-at-treating-ptsd-in-military-vets-study-suggests-72338',
    urlToImage:
      'https://assets.iflscience.com/assets/articleNo/72338/aImg/73266/soldier-meta.jpg',
    publishedAt: '2024-01-06T20:15:49Z',
    content:
      'For years now, the potential benefits of psychoactive drugs have been slowly moving from hippie nonsense to science-backed research. From magic mushrooms to psychedelic toad milk, it seems ever clear… [+4727 chars]',
  },
  {
    id: 4,
    source: {
      name: 'PsyPost',
    },
    author: 'Stacey Coleen Lubag',
    title:
      'Microplastics in drinking water affect behavior and immunity in mice, study reveals - PsyPost',
    description:
      'Researchers have found that exposure to microplastics caused notable behavioral changes and immune responses in mice, especially in older subjects, suggesting potential health impacts in humans.',
    url: 'https://www.psypost.org/2024/01/microplastics-in-drinking-water-affect-behavior-and-immunity-in-mice-study-reveals-220525',
    urlToImage:
      'https://www.psypost.org/wp-content/uploads/2024/01/Abstract-cloud-of-tiny-particles.jpg',
    publishedAt: '2024-01-06T20:02:52Z',
    content:
      'A study published in the International Journal of Molecular Sciences has uncovered startling effects of microplastics on mice, revealing significant behavioral changes and immune responses in both yo… [+3744 chars]',
  },

  {
    id: 5,
    source: {
      name: 'New York Post',
    },
    author: 'Fox News',
    title:
      "'Scientific breakthrough' leads to discovery of first antibiotic that kills drug-resistant bacteria in 50 years - New York Post ",
    description:
      'Scientists in Switzerland have announced the discovery of a new class of antibiotics shown to be effective against deadly, drug-resistant bacteria.',
    url: 'https://nypost.com/2024/01/06/lifestyle/new-antibiotic-kills-deadly-drug-resistant-bacteria-in-scientific-breakthrough/',
    urlToImage:
      'https://nypost.com/wp-content/uploads/sites/2/2024/01/newspress-collage-pr0ytwt11-1704570696767.jpg?quality=75&strip=all&1704552739&w=1024',
    publishedAt: '2024-01-06T20:01:00Z',
    content:
      'Scientists in Switzerland have announced the discovery of a new class of antibiotics shown to be effective against deadly, drug-resistant bacteria.\r\nThe antibiotic, called zosurabalpin, works by bloc… [+5055 chars]',
  },
  {
    id: 6,
    source: {
      name: 'Earth.com',
    },
    author: null,
    title:
      'Cause of fatigue in long Covid patients has finally been revealed - Earth.com',
    description:
      'Researchers have made a significant discovery regarding the persistent fatigue experienced by long Covid patients',
    url: 'https://www.earth.com/news/cause-of-fatigue-in-long-covid-patients-has-finally-been-revealed/',
    urlToImage:
      'https://cff2.earth.com/uploads/2024/01/04120925/Long-Covid-patients-scaled.jpg',
    publishedAt: '2024-01-06T19:11:00Z',
    content:
      'Researchers at the Amsterdam University Medical Center have made a significant discovery regarding the persistent fatigue experienced by long Covid patients. \r\nThe experts have identified a biologica… [+4024 chars]',
  },
  {
    id: 7,
    source: {
      name: 'WALB',
    },
    author: 'Ty Grant',
    title:
      'Ga. DPH warns of widespread flu activity throughout the state - WALB',
    description:
      'Some people are at higher risk of developing serious flu-related complications if they get sick.',
    url: 'https://www.walb.com/2024/01/06/ga-dph-warns-widespread-flu-activity-throughout-state/',
    urlToImage:
      'https://gray-walb-prod.cdn.arcpublishing.com/resizer/v2/GD3L36ZWAZAKVP2KUCJRUQNSEI.bmp?auth=59d707ecd7f2239b1f2dcf24d60e0980fd253b04a88eeae1e80b699146d08a9b&width=1200&height=600&smart=true',
    publishedAt: '2024-01-06T16:35:00Z',
    content:
      'ALBANY, Ga. (WALB) - Flu activity is widespread throughout the state, and the current flu report lists flu activity at the highest level.\r\nKathleen E. Toomey, M.D., M.P.H., DPH commissioner says, It … [+2267 chars]',
  },

  {
    id: 8,
    source: {
      name: 'WBAY',
    },
    author: 'Stacker',
    title:
      "Seniors in these Wisconsin counties have the highest Alzheimer's rates - WBAY",
    description:
      'An estimated 110,900 people in Wisconsin over age 65 have Alzheimer’s, according to estimates released by the Alzheimer’s Association in 2023.',
    url: 'https://www.wbay.com/2024/01/06/seniors-these-wisconsin-counties-have-highest-alzheimers-rates/',
    urlToImage:
      'https://gray-wbay-prod.cdn.arcpublishing.com/resizer/v2/OT5S37YG6NHUVGR5N3BIHYAJYY.jpg?auth=0c7bc7e406d15031037cdd79254f1a4361411129b222813fe838865d25d976c8&width=1200&height=600&smart=true',
    publishedAt: '2024-01-06T14:55:53Z',
    content:
      '(Stacker) - An estimated 110,900 people in Wisconsin over age 65 have Alzheimers, according to estimates released by the Alzheimers Association in 2023.\r\nAlzheimers disease afflicts an estimated 6.7 … [+17787 chars]',
  },
  {
    id: 9,
    source: {
      name: 'Phys.Org',
    },
    author: 'Chris Packham',
    title:
      'Saturday Citations: Honey yields, exercising under the influence, unexpected benefits of hearing aids - Phys.org',
    description:
      "It's the futuristic year 2024! Where is the power loom that natural philosophers have been promising me? What's that? Edmund Cartwright already made one? In 1785? And it revolutionized industrial weaving? Sorry, it's been so long since the last Saturday post …",
    url: 'https://phys.org/news/2024-01-saturday-citations-honey-yields-unexpected.html',
    urlToImage: 'https://scx2.b-cdn.net/gfx/news/hires/2018/1-honey.jpg',
    publishedAt: '2024-01-06T14:00:01Z',
    content:
      "It's the futuristic year 2024! Where is the power loom that natural philosophers have been promising me? What's that? Edmund Cartwright already made one? In 1785? And it revolutionized industrial wea… [+3950 chars]",
  },
  {
    id: 10,
    source: {
      name: 'CNBC',
    },
    author: 'Renée Onque',
    title:
      '4 simple ways to eat for longevity in the new year, according to a Harvard nutrition expert - CNBC',
    description:
      "There are easy changes you can make to your eating habits that will aid in longevity. Here's how.",
    url: 'https://www.cnbc.com/2024/01/06/harvard-expert-4-simple-ways-to-eat-for-longevity-in-2024.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/107355024-1704488403835-gettyimages-1657875467-d29b2775.jpeg?v=1704488514&w=1920&h=1080',
    publishedAt: '2024-01-06T14:00:01Z',
    content:
      '1. Eat more whole foods\r\n"Well, first of all, focus on whole and minimally processed foods, especially plant foods," says Hu. Aim to incorporate more whole foods, like fruits, vegetables, whole grain… [+3017 chars]',
  },
  {
    id: 11,
    source: {
      name: 'BBC News',
    },
    author: 'Annabel Bourne',
    title: "What's the best time of the day to exercise? - BBC.com",
    description:
      'There is growing evidence that the time of day we exercise makes a difference to our performance and health, but can we train our bodies to peak at different times of the day?',
    url: 'https://www.bbc.com/future/article/20240105-whats-the-best-time-of-the-day-to-exercise',
    urlToImage: 'https://ychef.files.bbci.co.uk/624x351/p0h39wjj.jpg',
    publishedAt: '2024-01-06T14:00:00Z',
    content:
      'By Annabel BourneFeatures correspondent\r\nWhen is the best time to exercise?\r\nThere is growing evidence that the time of day we exercise makes a difference to our performance and health, but can we tr… [+7463 chars]',
  },
  {
    id: 12,
    source: {
      name: 'Financial Times',
    },
    author:
      'Sarah White, Guy Chazan, Barney Jopson, Andy Bounds, Giuliana Ricozzi',
    title:
      "Europe battles 'tridemic' of respiratory illnesses - Financial Times",
    description:
      'Winter surge in people catching flu, Covid-19 or RSV risks overwhelming hospitals',
    url: 'https://www.ft.com/content/449c4748-ef63-4f0a-b26e-4e528889fac4',
    urlToImage:
      'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252Fadbeb9ac-6093-4fa6-a302-3c66242dfcfc.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900',
    publishedAt: '2024-01-06T13:00:55Z',
    content:
      'Europe is facing a tridemic that threatens to push health systems to the limit as a surge in flu cases is compounded by Covid-19 and other respiratory illnesses.\r\nSpain and Italy are among the countr… [+5392 chars]',
  },
]

export default newsArticles
