import { shoe1, shoe2, shoe3 } from "./images";
import { product1, product2, product3, product4 } from "./images";
import { shield, support, truck } from "./images";
import { customer1, customer2 } from "./images";
import { facebook, instagram, twitter } from "./images";
const navLinks = ["home", "about us", "Products", "Contact us"];
const statistics: { name: string; value: string }[] = [
  { name: "Brands", value: "1k+" },
  { name: "Shops", value: "500+" },
  { name: "Customers", value: "250k+" },
];
interface productType {
  imgUrl: string;
  label: string;
  price: number;
  rate: number;
}
const products: productType[] = [
  { imgUrl: product1, label: "Nike Air Jordan-01", price: 200.2, rate: 4.5 },
  { imgUrl: product2, label: "Nike Air Jordan-10", price: 210.2, rate: 4.7 },
  { imgUrl: product3, label: "Nike Air Jordan-100", price: 220.2, rate: 4.8 },
  { imgUrl: product4, label: "Nike Air Jordan-001", price: 230.2, rate: 4.5 },
];
export interface serviceType {
  name: string;
  iconUrl: string;
  description: string;
}
const services: serviceType[] = [
  {
    iconUrl: truck,
    name: "Free shipping",
    description:
      "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    iconUrl: shield,
    name: "Secure Payment",
    description:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    iconUrl: support,
    name: "Love to help you",
    description:
      "Our dedicated team is here to assist you every step of the way.",
  },
];
export interface customerType {
  name: string;
  rate: number;
  openion: string;
  imgUrl: string;
}
const customers: customerType[] = [
  {
    name: "Morich Brown",
    openion:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
    rate: 4.5,
    imgUrl: customer1,
  },
  {
    name: "Morich Brown",
    openion:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    rate: 4.6,
    imgUrl: customer2,
  },
];
const productsList: string[] = [
  "Air Force 1",
  "Air Max 1",
  "Air Jordan 1",
  "Air Force 2",
  "Nike Waffle Racer",
  "Nike Cortez",
];
const helpList: string[] = [
  "About us",
  "FAQs",
  "How it works",
  "Privacy policy",
  "Payment policy",
];
const socialIcons: { name: string; iconUrl: string }[] = [
  { name: "facebook", iconUrl: facebook },
  { name: "twitter", iconUrl: twitter },
  { name: "instagram", iconUrl: instagram },
];
const shoes = [shoe1, shoe2, shoe3];

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];
export {
  navLinks,
  statistics,
  shoes,
  products,
  services,
  customers,
  productsList,
  helpList,
  socialIcons,
  footerLinks,
};
