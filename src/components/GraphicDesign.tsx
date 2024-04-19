/* Images */
import image01 from '../assets/images/01-shaking-hands.jpg';
import image02 from '../assets/images/02-van-flowers.jpg';
import image03 from '../assets/images/03-metal-effect.jpg';
import image04 from '../assets/images/04-burnside-music.jpg';
import image05 from '../assets/images/05-lp-smart-flesh.jpg';
import image06 from '../assets/images/06-lp-sp866.jpg';
import image07 from '../assets/images/07-lp-sp735.jpg';
import image08 from '../assets/images/08-cd-sp866.jpg';
import image09 from '../assets/images/09-cd-sp735.jpg';

interface GraphicDesignEntry {
  image: string;
  captionOne: string;
  captionTwo: string;
}

const graphicDesignEntries = [
  {
    image: image01,
    captionOne: 'Image editing work for creative agency',
    captionTwo: 'Adobe Photoshop',
  },
  {
    image: image02,
    captionOne: 'Image editing work for creative agency',
    captionTwo: 'Adobe Photoshop',
  },
  {
    image: image03,
    captionOne: 'Image editing work for creative agency',
    captionTwo: 'Adobe Photoshop',
  },
  {
    image: image04,
    captionOne: 'Branding for municipal park',
    captionTwo: 'Adobe Photoshop and Illustrator'
  },
  {
    image: image05,
    captionOne: 'Vinyl album packaging for record label',
    captionTwo: 'Adobe Photoshop, Illustrator and InDesign'
  },
  {
    image: image06,
    captionOne: 'Vinyl album packaging for record label',
    captionTwo: 'Adobe Photoshop, Illustrator and InDesign'
  },
  {
    image: image07,
    captionOne: 'Vinyl album packaging for record label',
    captionTwo: 'Adobe Photoshop, Illustrator and InDesign'
  },
  {
    image: image08,
    captionOne: 'Compact disc packaging for record label',
    captionTwo: 'Adobe Illustrator and InDesign'
  },
  {
    image: image09,
    captionOne: 'Compact disc packaging for record label',
    captionTwo: 'Adobe Photoshop and InDesign'
  }
];

function GraphicDesign(): JSX.Element {
  function renderImage(entry: GraphicDesignEntry, index: number): JSX.Element {
    return (
      <div key={`graphicDesign${index + 1}`}>
        <img
          className="entry-image"
          alt={`graphic design sample #${index + 1}`}
          src={entry.image}
        />
        <div className="caption-one">{entry.captionOne}</div>
        <div className="caption-two">{'Tools: ' + entry.captionTwo}</div>
      </div>
    );
  }

  return (
    <div className="graphic-design">
      <h1>Graphic Design</h1>
      <h2>
        <a href="https://alect.me">Alec Thibodeau</a>
      </h2>
      <div className="graphic-design-images">
        {graphicDesignEntries.map(renderImage)}
      </div>
    </div>
  );
}

export default GraphicDesign;
