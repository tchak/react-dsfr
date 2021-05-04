import Col from './components/foundation/Grid/Col';
import Row from './components/foundation/Grid/Row';
import Container from './components/foundation/Grid/Container';
import Icon from './components/foundation/Icon/index';
import Text from './components/foundation/Typography/Text/index';
import Title from './components/foundation/Typography/Title/index';
import TitleDisplay from './components/foundation/Typography/TitleDisplay/index';
import { Accordion, AccordionItem } from './components/interface/Accordion/index';
import { Breadcrumb, BreadcrumbItem } from './components/interface/Breadcrumb/index';
import Button from './components/interface/Button/index';
import { Callout, CalloutTitle, CalloutText } from './components/interface/Callout/index';
import {
  Card, CardDescription, CardDetail, CardImage, CardTitle,
} from './components/interface/Card/index';
import { Checkbox, CheckboxGroup } from './components/interface/Checkbox/index';
import {
  Footer, FooterLink, FooterBody, FooterBottom, FooterCopy, FooterPartners, FooterPartnersLogo,
  FooterPartnersTitle, FooterTop, FooterTopCategory,
} from './components/interface/Footer/index';
import {
  Header, HeaderNav, HeaderBody, NavItem, NavSubItem, MegaNavItem, MegaNavSubItem, Service, Tool,
  ToolItem, ToolItemGroup,
} from './components/interface/Header/index';
import Highlight from './components/interface/Highlight/index';
import Link from './components/interface/Link/index';
import Logo from './components/interface/Logo/index';
import MediaImage from './components/foundation/Media/MediaImage/index';
import MediaVideo from './components/foundation/Media/MediaVideo/index';
import {
  Modal, ModalClose, ModalContent, ModalFooter, ModalTitle,
} from './components/interface/Modal/index';
import Pagination from './components/interface/Pagination/index';
import { Radio, RadioGroup } from './components/interface/Radio/index';
import SearchBar from './components/interface/SearchBar/index';
import Select from './components/interface/Select/index';
import { SideMenu, SideMenuLink, SideMenuItem } from './components/interface/SideMenu/index';
import { Skiplinks, SkiplinkItem } from './components/interface/Skiplinks/index';
import { Table, SimpleTable } from './components/interface/Table/index';
import { Tabs, Tab } from './components/interface/Tabs/index';
import { Tag, TagGroup } from './components/interface/Tag/index';
import TextInput from './components/interface/TextInput/index';
import { Tile, TileImage, TileBody } from './components/interface/Tile/index';
import Toggle from './components/interface/Toggle/index';

const library = () => ({
  Accordion,
  AccordionItem,
  Logo,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Callout,
  CalloutTitle,
  CalloutText,
  Link,
  Card,
  CardDescription,
  CardDetail,
  CardImage,
  CardTitle,
  Checkbox,
  CheckboxGroup,
  Col,
  Row,
  Container,
  Icon,
  Text,
  Title,
  TitleDisplay,
  Footer,
  FooterTopCategory,
  FooterBody,
  FooterBottom,
  FooterLink,
  FooterCopy,
  FooterPartners,
  FooterTop,
  FooterPartnersTitle,
  FooterPartnersLogo,
  HeaderNav,
  NavSubItem,
  NavItem,
  MegaNavItem,
  MegaNavSubItem,
  Service,
  ToolItemGroup,
  Tool,
  Header,
  HeaderBody,
  ToolItem,
  Highlight,
  MediaVideo,
  MediaImage,
  Modal,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalTitle,
  Pagination,
  Radio,
  RadioGroup,
  SearchBar,
  Select,
  SideMenu,
  SideMenuItem,
  SideMenuLink,
  Skiplinks,
  SkiplinkItem,
  Table,
  SimpleTable,
  Tab,
  Tabs,
  Tag,
  TagGroup,
  TextInput,
  Tile,
  TileBody,
  TileImage,
  Toggle,
});
export default library();