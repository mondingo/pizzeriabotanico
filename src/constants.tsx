
import { MenuCategory } from './types';

export const PHONE_NUMBER = "853 84 11 90";
export const FORMATTED_PHONE = "tel:853841190";

export const SCHEDULE = [
  { days: "Lunes", hours: "19:30 – 00:00" },
  { days: "Martes", hours: "Cerrado", closed: true },
  { days: "Miércoles", hours: "Cerrado", closed: true },
  { days: "Jueves", hours: "19:30 – 00:00" },
  { days: "Viernes", hours: "13:30 – 16:00, 19:30 – 00:00" },
  { days: "Sábado", hours: "13:30 – 16:00, 19:30 – 00:00" },
  { days: "Domingo", hours: "13:30 – 16:00, 19:30 – 00:00" }
];

export const MENU: MenuCategory[] = [
  {
    id: "pizzas-clasicas",
    title: "Pizzas Clásicas",
    items: [
      { name: "Margarita", description: "Tomate, mozzarella, albahaca", price: "7,50€" },
      { name: "Margarita Original", description: "Tomate, mozzarella fresca de buffala, albahaca", price: "9,00€" },
      { name: "Prosciutto", description: "Tomate, mozzarella, jamón york", price: "8,80€" },
      { name: "Romana", description: "Tomate, mozzarella, jamón york, champiñones", price: "9,20€" },
      { name: "Boloñesa", description: "Tomate, mozzarella, carne picada, cebolla", price: "9,20€" },
      { name: "Carbonara", description: "Nata, mozzarella, bacon, cebolla, champiñones", price: "10,20€" },
      { name: "Barbacoa", description: "Salsa barbacoa, mozzarella, carne picada, cebolla, bacon", price: "10,20€" },
      { name: "4 Estaciones", description: "Tomate, mozzarella, jamón york, bacon, atún, champiñones", price: "10,20€" },
      { name: "4 Quesos", description: "Tomate, mozzarella, gorgonzola, gouda, grana padano", price: "10,20€" },
      { name: "Marinera", description: "Tomate, mozzarella, atún, anchoas, aceitunas negras", price: "10,20€" },
      { name: "Suiza", description: "Tomate, mozzarella, bacon, cebolla, gorgonzola", price: "10,20€" },
      { name: "Hawaiana", description: "Tomate, mozzarella, jamón york, piña", price: "10,20€" },
      { name: "Vegetariana", description: "Tomate, mozzarella, espárragos, cebolla, champiñones, rodajas de tomate, berenjena", price: "10,80€" }
    ]
  },
  {
    id: "pizzas-especiales",
    title: "Pizzas Especiales",
    items: [
      { name: "Montesa", description: "Tomate, mozzarella, bacon, champiñones, queso de cabra", price: "11,20€" },
      { name: "Carbonara Sweet", description: "Nata, mozzarella, bacon, champiñones, cebolla caramelizada", price: "11,20€" },
      { name: "Barbacoa Cream", description: "Salsa barbacoa cremosa, mozzarella, cebolla, carne picada, bacon", price: "11,20€" },
      { name: "Barbacoa Hot", description: "Salsa barbacoa picante, bacon, mozzarella, cebolla, carne picada, pepperoni", price: "11,20€" },
      { name: "5 Quesos", description: "Nata, mozzarella, gouda, cheddar, cabra, grana padano", price: "11,20€" },
      { name: "César", description: "Mozzarella, bacon, pollo crujiente, rúcula, salsa césar", price: "11,20€" },
      { name: "4 Quesos con Ajo Negro", description: "Nata, mozzarella, gorgonzola, queso manchego, ajo negro, grana padano", price: "12,80€" },
      { name: "Summer", description: "Crema de queso, mozzarella, aguacate, salmón ahumado, cebolla morada, sésamo negro, salsa mostaza y miel", price: "12,80€" },
      { name: "María", description: "Tomate, mozzarella, ajo, rúcula, jamón serrano, grana padano", price: "12,80€" },
      { name: "Boquerones", description: "Tomate, mozzarella, tomate cherry, boquerones en vinagre, patatas chips", price: "12,80€" }
    ]
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    items: [
      { name: "Caprese", description: "Tomate, mozzarella fresca de buffala, aceitunas negras, albahaca, sal, aceite de oliva, pimienta negra", price: "7,20€" },
      { name: "Campera", description: "Lechuga, cherry, bacon, nueces, queso, vinagre de Módena", price: "8,20€" },
      { name: "César", description: "Pollo crujiente, lechuga, tomate cherry, picatostes, salsa césar", price: "8,20€" },
      { name: "De La Casa", description: "Rúcula, canónigos, pollo rebozado, salsa de yogur, nueces, picatostes, queso, pasas", price: "8,80€" }
    ]
  },
  {
    id: "pan-y-pasta",
    title: "Pan de Pizza y Pasta",
    items: [
      { name: "Pan de pizza con mantequilla casera", price: "5,50€" },
      { name: "Pan de pizza con paté", price: "8,00€" },
      { name: "Lasaña boloñesa", price: "9,80€" },
      { name: "Lasaña vegetal", price: "9,80€" },
      { name: "Tortellini relleno de boloñesa", price: "9,80€" },
      { name: "Tortellini verde relleno de espinacas y ricota", price: "9,80€" },
      { name: "Fiochetti relleno de gorgonzola", price: "9,80€" },
      { name: "Fiochetti relleno de pera", price: "9,80€" }
    ]
  },
  {
    id: "postres",
    title: "Postres",
    items: [
      { name: "Tiramisú", price: "4,50€" },
      { name: "Tarta queso", price: "4,00€" },
      { name: "Tarta zanahoria", price: "4,00€" },
      { name: "Panna cotta", price: "4,00€" },
      { name: "Pizza Nutella®", price: "9,20€" },
      { name: "Pizza Oreo®", price: "9,20€" }
    ]
  }
];
