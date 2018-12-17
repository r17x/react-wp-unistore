import {asyncComponent} from '../Components/Utils'

const Navbar = asyncComponent({
  importComponent: () => import('./Navbar'),
})

const Footer = asyncComponent({
  importComponent: () => import('./Footer'),
})

export {
  Navbar,
  Footer,
}
