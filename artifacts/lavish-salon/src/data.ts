export const business = {
  name: 'Lavish Unisex Salon',
  shortName: 'Lavish',
  category: 'Unisex salon',
  phone: '07314007355',
  phoneDisplay: '07314 007355',
  phoneHref: 'tel:+917314007355',
  address: [
    'UG-06, BCM City, Navlakha Square',
    'near Reliance Fresh, Khandelwal Nagar',
    'Janki Nagar, Indore, Madhya Pradesh 452001',
  ],
  addressInline:
    'UG-06, BCM City, Navlakha Square, near Reliance Fresh, Khandelwal Nagar, Janki Nagar, Indore, Madhya Pradesh 452001',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Lavish+Unisex+Salon+UG-06+BCM+City+Navlakha+Square+Indore',
  rating: '4.3',
  reviews: '178',
  hours: 'Hours to be confirmed — call for today’s availability.',
  instagramHref: 'https://instagram.com',
} as const;

export const images = {
  hero: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1800',
  detail: 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  colour: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200',
  studio: 'https://images.pexels.com/photos/3993301/pexels-photo-3993301.jpeg?auto=compress&cs=tinysrgb&w=1200',
  portrait: 'https://images.pexels.com/photos/3992861/pexels-photo-3992861.jpeg?auto=compress&cs=tinysrgb&w=1200',
} as const;

export const services = [
  {
    id: 'hair',
    name: 'Hair',
    number: '01',
    detail: 'Cuts, colour and styling that look like you — only more considered.',
    items: [
      ['Haircut and Styling', 'Enquire'],
      ['Hair Spa', 'Enquire'],
      ['Hair Color', 'Enquire'],
      ['Hair Treatments', 'Enquire'],
    ],
  },
  {
    id: 'skin',
    name: 'Skin & Beauty',
    number: '02',
    detail: 'A quieter kind of glow, built around your skin on its best day.',
    items: [
      ['Facials', 'Enquire'],
      ['Cleanup', 'Enquire'],
      ['Bridal or Occasion Styling', 'Enquire'],
    ],
  },
  {
    id: 'grooming',
    name: 'Grooming',
    number: '03',
    detail: 'Sharp, unhurried grooming for every face and every kind of day.',
    items: [
      ['Beard Grooming', 'Enquire'],
      ['Shaving', 'Enquire'],
      ['Manicure and Pedicure', 'Enquire'],
    ],
  },
  {
    id: 'nails',
    name: 'Nails & Care',
    number: '04',
    detail: 'Small rituals of care that leave you feeling polished, rested, and ready.',
    items: [
      ['Manicure and Pedicure', 'Enquire'],
      ['Nail care and finishing', 'Enquire'],
      ['Occasion-ready details', 'Enquire'],
    ],
  },
] as const;

export const gallery = [
  { src: images.hero, alt: 'Hair styling in a warm, sunlit salon', label: 'The finish' },
  { src: images.detail, alt: 'Stylist creating a polished haircut', label: 'In the chair' },
  { src: images.colour, alt: 'Close-up of dimensional hair colour', label: 'The detail' },
  { src: images.studio, alt: 'A calm salon styling space', label: 'The room' },
  { src: images.portrait, alt: 'A client with a fresh, confident look', label: 'The feeling' },
];

export const faqs = [
  ['Do I need an appointment?', 'Call us to check availability. For colour, transformations and weekends, we recommend sending an enquiry so we can confirm the right time and service for you.'],
  ['Is Lavish truly unisex?', 'Yes. Lavish is for every person, every hair story and every kind of grooming ritual. Our menu is organised by what you want, not who you are.'],
  ['How do I check current pricing?', 'Services and pricing can vary by hair length, treatment, and finish. Call 07314 007355 for current pricing and availability.'],
  ['Where are you in Indore?', business.addressInline],
] as const;