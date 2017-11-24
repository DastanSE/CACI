import React, { Component } from 'react';
import { Row, Col, Media, Image, Thumbnail, Button } from 'react-bootstrap';
import Modals from '../../components/Global/Modals';

const testModalBody = `
  <div>
    <img src='https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' />
  </div>
  <p>its tag P </p>
  <p>Lili nihao </p>
  <h1>its tag h1 </h1>
  <h2>its tag </h2>
`;

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  close() {
    this.setState({ show: false });
  }

  open() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className='event-card'>
        <div className='event-card-img'>
          <Image src={ this.props.img1 } onClick={ this.open.bind(this) } />
        </div>
        <div className='event-card-content'>
          <i className='fa fa-clock-o' aria-hidden='true' />
          <span className='subtle'> {this.props.time}</span>
          <h4 className='event-card-title'>{this.props.title}</h4>
        </div>
        <Modals
          showModal={ this.state.show }
          title={ this.props.title }
          date='2017-10-11'
          close={ this.close.bind(this) }
          images={ [
            'https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg',
            'https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg',
          ] }
          body={ `
            #  Sitim loquor pectora has matris reddidit ne

## Peiora tellus sororis operis phocarum templo

Lorem markdownum annos. Et placidi addidit volans et vidit, pavet, deus ausa.
Horrida corporis! Emicat illis requievit Venus **promissaque clamat prece**
aura, aliter arboreis Latiis si tum sternuntur, ducitur inlatum Phoceus.
Depulerat facies exposcere.

Sit ante quo poenaeque, aura nisi vix turis tibi per et conterit timori? Undis
fluens palustribus Caune ortuque possis tenet inquit deditque cuncta adlevat.
Ausis puto amplexas ignotis Aeacides, ut cultu abscidit insidias ambitiosus te
erant creatus.

## Patrem velleris quicquid ortas

Hecateidos adii incautus, dixit utque vaga habitabat indefletaeque sequitur ibi
erat percussa onus vulnere. Aquas **audet numerumque** huic *Phoronidos vulnere*
Iuppiter amans *quoque voces*. Exclamat montibus, fronte, poma habenti. Illo
messes sacroque fletu, clamat quadrupedes canunt, deus fuit accipiunt Echo
Astraei umeros.

## Fuit consenuere

Pectore altum, non arces [deserit tangit
texique](http://quosque-et.com/vivunt.php) de Latonae notis. Is poteris petens.
Mea amplexus despecta risit sublime crudelis sortita rorantesque solis *caecaque
vincere*, fixit rerum: dat. Quae occulto quas dives placidique haut constitit
pressistis prima quae nec. Perosae vitat licebit fugiant; est altis narrare
venis resumere deposito vaccae Anchisae pulcherrime celat alter vulnus Dryasque.

- Alcyone deseruere multos capientur
- Erit non cum Phoebeius Palatia
- Ipse pars natumque
- Disque speravit

## Apollineas vagantur tandemque militia

Mea adiecit tantum plaustrum secreta Bacchiadae ipsoque, certa audita ille non.
Habebat vidi, nulla agri ab utinam amori ligat moenia superi vestro et est!
Indulgere *respicit* Lydos. Ecce nomina, et iuvenesque: *ambos tum* absentem
inmissa, [non](http://manu.org/ipse) quis metuenti Politen.

Cava densi ablata socerum longaque Cnidon requiris nigras nimium quibus. Rude
tum usus, relinquentur micantes; in qui nihil. Dabat purgamina generosa
utinamque quoque conveniet petitos inque. Sibila quid moenia manusque clausit;
pastor utque armos. Amplexo lana cultusque et ante avem teque, et menso oris
superi illa.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
          ` }
        />
      </div>
    );
  }
}
