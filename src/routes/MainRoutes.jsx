import MainLayout from '../layouts/MainLayout';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/Cart/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProductDetail from '../pages/ProductDetail';
import ProductsPage from '../pages/ProductsPage';

const mainRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sepet',
        element: <CartPage />,
      },
      {
        path: '/odeme',
        element: <CheckoutPage />,
      },
      {
        path: '/urunler',
        element: <ProductsPage />,
      },
      {
        path: '/hakkimizda',
        element: <AboutPage />,
      },
      {
        path: '/iletisim',
        element: <ContactPage />,
      },
      {
        path: '/urun/:productId',
        element: <ProductDetail />,
      },
    ],
  },
];

export default mainRoutes;
