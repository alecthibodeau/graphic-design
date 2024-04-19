/* Images */
import image01 from './assets/images/01-shaking-hands.jpg';
import image02 from './assets/images/02-van-flowers.jpg';
import image03 from './assets/images/03-metal-effect.jpg';
import image04 from './assets/images/04-burnside-music.jpg';
import image05 from './assets/images/05-lp-smart-flesh.jpg';
import image06 from './assets/images/06-lp-sp866.jpg';
import image07 from './assets/images/07-lp-sp735.jpg';
import image08 from './assets/images/08-cd-sp866.jpg';
import image09 from './assets/images/09-cd-sp735.jpg';

/* Interfaces */
import GraphicDesignEntry from './interfaces/GraphicDesignEntry';

const textImageEditing: string = 'Image editing for creative agency';
const textPhotoshop: string = 'Adobe Photoshop';
const textVinylAlbumPackaging: string = 'Vinyl album packaging for record label';
const textAdobePhotoshopIllustratorIndesign: string = 'Adobe Photoshop, Illustrator and InDesign';
const textCompactDiscPackaging: string = 'Compact disc packaging for record label';

const graphicDesignEntries: GraphicDesignEntry[] = [
  {
    image: image01,
    captionOne: textImageEditing,
    captionTwo: textPhotoshop
  },
  {
    image: image02,
    captionOne: textImageEditing,
    captionTwo: textPhotoshop
  },
  {
    image: image03,
    captionOne: textImageEditing,
    captionTwo: textPhotoshop
  },
  {
    image: image04,
    captionOne: 'Branding for municipal park',
    captionTwo: 'Adobe Photoshop and Illustrator'
  },
  {
    image: image05,
    captionOne: textVinylAlbumPackaging,
    captionTwo: textAdobePhotoshopIllustratorIndesign
  },
  {
    image: image06,
    captionOne: textVinylAlbumPackaging,
    captionTwo: textAdobePhotoshopIllustratorIndesign
  },
  {
    image: image07,
    captionOne: textVinylAlbumPackaging,
    captionTwo: textAdobePhotoshopIllustratorIndesign
  },
  {
    image: image08,
    captionOne: textCompactDiscPackaging,
    captionTwo: 'Adobe Illustrator and InDesign'
  },
  {
    image: image09,
    captionOne: textCompactDiscPackaging,
    captionTwo: 'Adobe Photoshop and InDesign'
  }
];

const constants = {
  graphicDesignEntries
}

export default constants;
