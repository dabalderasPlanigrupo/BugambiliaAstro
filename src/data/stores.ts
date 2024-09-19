export interface Store {
  title: string;
  imageName: string;
  alt: string;
  horario: string;
  categoria:
    | 'Moda y Accesorios'
    | 'Diversión'
    | 'Gastronomía'
    | 'Salud y belleza'
    | 'Servicios'
    | 'Tecnología y accesorios'
    | 'Otros';
}

export const stores: Store[] = [
  {
    title: 'Aldo Conti',
    imageName: 'logo-aldoconti.jpg',
    alt: 'Logo Aldo Conti',
    horario: `Tel: 7773103680`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'Sally Beauty',
    imageName: 'logo-sally.jpg',
    alt: 'Logo Sally Beauty',
    horario: `Tel: 7773103169`,
    categoria: 'Salud y belleza',
  },
  {
    title: 'Ay Güey',
    imageName: 'logo-ayguey.jpg',
    alt: 'Logo Ay Güey',
    horario: `Tel: 7772020176`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'AT&T',
    imageName: 'logo-att.jpg',
    alt: 'Logo AT&T',
    horario: `Tel: 7773101023`,
    categoria: 'Tecnología y accesorios',
  },
  {
    title: 'MacStore',
    imageName: 'logo-macstore.jpg',
    alt: 'Logo MacStore',
    horario: `Tel: 7776884143`,
    categoria: 'Tecnología y accesorios',
  },
  {
    title: 'Todo Moda',
    imageName: 'logo-todomoda.jpg',
    alt: 'Logo Todo Moda',
    horario: `Tel: 7771585613`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'Cinemex',
    imageName: 'logo-cinemex.jpg',
    alt: 'Logo Cinemex',
    horario: `Tel: 7773101550`,
    categoria: 'Diversión',
  },
  {
    title: 'Autofin Monterrey',
    imageName: 'logo-autofinmonterrey.jpg',
    alt: 'Logo Autofin Monterrey',
    horario: `Tel: 7772020113`,
    categoria: 'Servicios',
  },
  {
    title: 'Izzi',
    imageName: 'logo-izzi.jpg',
    alt: 'Logo Izzi',
    horario: `Tel: 8001205000`,
    categoria: 'Servicios',
  },
  {
    title: 'Fresko La Comer',
    imageName: 'logo-fresko.jpg',
    alt: 'Logo Fresko La Comer',
    horario: `Tel: 7773182447`,
    categoria: 'Servicios',
  },
  {
    title: 'Cajero Banorte',
    imageName: 'logo-banorte.jpg',
    alt: 'Logo Cajero Banorte',
    horario: `Tel: `,
    categoria: 'Servicios',
  },
  {
    title: 'FullSand',
    imageName: 'logo-fullsand.jpg',
    alt: 'Logo FullSand',
    horario: `Tel: 7772676257`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'Gnc',
    imageName: 'logo-gnc.jpg',
    alt: 'Logo Gnc',
    horario: `Tel: 7773102815`,
    categoria: 'Salud y belleza',
  },
  {
    title: 'Feelings',
    imageName: 'logo-feelings.jpg',
    alt: 'Logo FullSand',
    horario: `Tel: 7771772224`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'Bizzarro Joyerías',
    imageName: 'logo-bizzarro.jpg',
    alt: 'Logo Bizzarro Joyerías',
    horario: `Tel: 7773101102`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'Ópticas Lux',
    imageName: 'logo-opticaslux.jpg',
    alt: 'Logo Ópticas Lux',
    horario: `Tel: 7773103569`,
    categoria: 'Salud y belleza',
  },
  {
    title: 'Totu Desing',
    imageName: 'logo-totudesign.jpg',
    alt: 'Logo Totu Desing',
    horario: `Tel: 5570593569`,
    categoria: 'Tecnología y accesorios',
  },
  {
    title: 'Leonardo Joyería',
    imageName: 'logo-leonardo.jpg',
    alt: 'Logo Leonardo Joyería',
    horario: `Tel: 7621002992`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'Cellfie',
    imageName: 'logo-cellfie.jpg',
    alt: 'Logo Cellfie',
    horario: `Tel: 5545941799`,
    categoria: 'Tecnología y accesorios',
  },
  {
    title: 'Izcalli',
    imageName: 'logo-izcalli.jpg',
    alt: 'Logo Izcalli',
    horario: `Tel: 7773102877`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'Alboa',
    imageName: 'logo-alboa.jpg',
    alt: 'Logo Alboa',
    horario: `Tel: 7773103680`,
    categoria: 'Diversión',
  },
  {
    title: 'Mas Visión',
    imageName: 'logo-masvision.jpg',
    alt: 'Logo Mas Visión',
    horario: `Tel: 7773103894`,
    categoria: 'Salud y belleza',
  },
  {
    title: 'Mobo Shop',
    imageName: 'logo-mobo.jpg',
    alt: 'Logo Mobo Shop',
    horario: `Tel: 7773103383`,
    categoria: 'Tecnología y accesorios',
  },
  {
    title: 'Annchery',
    imageName: 'logo-annchery.jpg',
    alt: 'Logo Annchery',
    horario: `Tel: 7772020002`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'Dental Shine',
    imageName: 'logo-dentalshine.jpg',
    alt: 'Logo Dental Shine',
    horario: `Tel: 7773101122`,
    categoria: 'Salud y belleza',
  },
  {
    title: 'BlueYog',
    imageName: 'logo-blueyog.jpg',
    alt: 'Logo BlueYog',
    horario: `Tel: `,
    categoria: 'Gastronomía',
  },
  {
    title: 'Cinemex Platino',
    imageName: 'logo-cinemexplatino.jpg',
    alt: 'Logo Cinemex Platino',
    horario: `Tel: 5552576969`,
    categoria: 'Diversión',
  },
  {
    title: 'Prado`sh',
    imageName: 'logo-pradosh.jpg',
    alt: 'Logo Prado`sh',
    horario: `Tel: 7772180297`,
    categoria: 'Moda y Accesorios',
  },
  {
    title: 'Juguetes Raptor',
    imageName: 'logo-raptor.jpg',
    alt: 'Logo Juguetes Raptor',
    horario: `Tel: 7776535948`,
    categoria: 'Diversión',
  },
  {
    title: 'Muñelocos',
    imageName: 'logo-munelocos.jpg',
    alt: 'Logo Muñelocos',
    horario: `Tel: `,
    categoria: 'Diversión',
  },
  {
    title: 'Arimor',
    imageName: 'logo-arimor.jpg',
    alt: 'Logo Arimor',
    horario: `Tel: `,
    categoria: 'Diversión',
  },
  {
    title: 'Colors Little Park',
    imageName: 'logo-colors.jpg',
    alt: 'Logo Colors Little Park',
    horario: `Tel: `,
    categoria: 'Diversión',
  },
  {
    title: 'Casa Maaia',
    imageName: 'logo-casamaaia.jpg',
    alt: 'Logo Casa Maaia',
    horario: `Tel: `,
    categoria: 'Servicios',
  },
  {
    title: 'The Sugar Ville',
    imageName: 'logo-thesugarville.jpg',
    alt: 'Logo The Sugar Ville',
    horario: `Tel: `,
    categoria: 'Gastronomía',
  },
  {
    title: 'Isla Bamboo',
    imageName: 'logo-bamboo.jpg',
    alt: 'Logo Isla Bamboo',
    horario: `Tel: `,
    categoria: 'Salud y belleza',
  },
];
