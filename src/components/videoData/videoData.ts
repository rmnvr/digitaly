import AgeDorVideo from './AgeDorVideo';
import VittoriVideo from './VittoriVideo';
import GrrranitDocVideo from './GrrranitDocVideo';
import CapebVideo from './CapebVideo';
import VolvoVideo from './VolvoVideo';
import ImpaktImmoVideo from './ImpaktImmoVideo';
import PisteVideo from './PisteVideo';
import GrrranitSpecVideo from './GrrranitSpecVideo';

const videoData = [
  {
    id: 'yf19jCtVSRc',
    title: "Marque employeur - Âge d'Or",
    gif: "/gifs/AGE_DOR.gif",
    component: AgeDorVideo,
  },
  {
    id: 'w0TDMYj7lfQ',
    title: 'Présentation produit - Volvo',
    gif: "/gifs/Volvo.gif",
    component: VolvoVideo,
  },
  {
    id: 'GLvYkmyYcKY',
    title: 'Teaser - Théâtre Grrranit',
    gif: "/gifs/Grrranit_Spectacle.gif",
    component: GrrranitSpecVideo,
  },

  {
    id: 'v8V_uDSbOMs',
    title: 'Présentation produit - Impakt Immobilier',
    gif: "/gifs/Impakt.gif",
    component: ImpaktImmoVideo,
  },
  {
    id: 'zfkLExgz6D8',
    title: 'Vidéo promotionnelle - Groupe Vittori',
    gif: "/gifs/Vittori.gif",
    component: VittoriVideo,
  },
  {
    id: 'eQ0omQcjH5E',
    title: 'Spot publicitaire - La Piste Cyclable',
    gif: "/gifs/LPC.gif",
    component: PisteVideo,
  },
  {
    id: 'sk1bz-QY0IQ',
    title: 'Documentaire - Théâtre Grrranit',
    gif: "/gifs/Grrranit_Doc.gif",
    component: GrrranitDocVideo,
  },

  {
    id: 'MP-RS9Tr7BY',
    title: 'Vidéo promotionnelle - Capeb',
    gif: "/gifs/Capeb.gif",
    component: CapebVideo,
  },
];

export default videoData;