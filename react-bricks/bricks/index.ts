import { types } from 'react-bricks'
import { website } from 'react-bricks-ui'
import Gallery from './Gallery'
import HeroUnit from './MyHeroUnit'
import Thumbnail from './Thumbnail'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  HeroUnit, // Example custom brick
  Thumbnail, // Thumbnail tutorialS
  Gallery // Gallery
  // Put here your other bricks...
]

export default bricks;
