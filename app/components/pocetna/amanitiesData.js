import { AiOutlineKey } from 'react-icons/ai';
import { RiToolsLine } from 'react-icons/ri';
import { MdFingerprint } from 'react-icons/md';
import { BsWater } from 'react-icons/bs';
import { MdOutlineDirectionsCar } from 'react-icons/md';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';

const amanitiesData = [
  {
    id: 1,
    heading: 'Sigurnost',
    description: 'Sigurno, brzo i efikasno pronađive svoj smeštaj.',
    icon: AiOutlineKey,
  },
  {
    id: 2,
    heading: 'Kvalitet',
    description:
      'Kvalitet eksterijera i enterijera sa vrhunskim panoramskim pogledom.',
    icon: RiToolsLine,
  },
  {
    id: 3,
    heading: 'Lokacija',
    description: 'Residence hill poseduje izuzetnu lokaciju za vaš odmor.',
    icon: MdFingerprint,
  },
  {
    id: 4,
    heading: 'Spa centar',
    description:
      'Savršen dodatak vašem Spa danu ili Spa odmoru, nudimo širok spektar tretmana.',
    icon: BsWater,
  },
  {
    id: 5,
    heading: 'Parking mesta',
    description: 'Na raspolaganju su 500 parking mesta.',
    icon: MdOutlineDirectionsCar,
  },
  {
    id: 6,
    heading: 'Fitness Center',
    description: 'Ne odustajte od fizičkih aktivnosti.',
    icon: MdOutlineFitnessCenter,
  },
  {
    id: 7,
    heading: 'Restoran',
    description: 'Vrhunska hrana i piće uz profesionalnu uslugu.',
    icon: MdOutlineRestaurantMenu,
  },
  {
    id: 8,
    heading: 'Garaža',
    description: 'Podzemna garaža gde će vaša vozila biti sigurna.',
    icon: GiHomeGarage,
  },
];

export default amanitiesData;
