import { lazy } from 'react';

import { useRoutes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function AppRouter() {
  let element = useRoutes([
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/verify/*',
      element: <Navigate to="/" />,
    },
    {
      path: '/resetpassword/*',
      element: <Navigate to="/" />,
    },
    {
      path: '/logout',
      // element: <Logout />,
      element: <div>logout</div>,
    },
    {
      path: '/about',
      // element: <About />,
      element: <dib>about</dib>,
    },
    {
      path: '/',
      // element: <Dashboard />,
      element: <div>Dashboard</div>,
    }
    // ,
    // {
    //   path: '/customer',
    //   element: <Customer />,
    // },
    // {
    //   path: '/people',
    //   element: <People />,
    // },
    // {
    //   path: '/company',
    //   element: <Company />,
    // },
    // {
    //   path: '/expenses',
    //   element: <Expense />,
    // },
    // {
    //   path: '/product',
    //   element: <Product />,
    // },
    // {
    //   path: '/category/product',
    //   element: <ProductCategory />,
    // },
    // {
    //   path: 'category/expenses',
    //   element: <ExpenseCategory />,
    // },
    // {
    //   path: '/inventory',
    //   element: <Inventory />,
    // },
    // {
    //   path: '/order',
    //   element: <Order />,
    // },
    // {
    //   path: '/invoice',
    //   element: <Invoice />,
    // },
    // {
    //   path: '/invoice/create',
    //   element: <InvoiceCreate />,
    // },
    // {
    //   path: '/invoice/read/:id',
    //   element: <InvoiceRead />,
    // },
    // {
    //   path: '/invoice/update/:id',
    //   element: <InvoiceUpdate />,
    // },
    // {
    //   path: '/invoice/pay/:id',
    //   element: <InvoiceRecordPayment />,
    // },
    // {
    //   path: '/quote',
    //   element: <Quote />,
    // },
    // {
    //   path: '/quote/create',
    //   element: <QuoteCreate />,
    // },
    // {
    //   path: '/quote/read/:id',
    //   element: <QuoteRead />,
    // },
    // {
    //   path: '/quote/update/:id',
    //   element: <QuoteUpdate />,
    // },
    // {
    //   path: '/payment',
    //   element: <Payment />,
    // },
    // {
    //   path: '/payment/read/:id',
    //   element: <PaymentRead />,
    // },
    // {
    //   path: '/payment/update/:id',
    //   element: <PaymentUpdate />,
    // },
    // {
    //   path: '/employee',
    //   element: <Employee />,
    // },
    // {
    //   path: '/admin',
    //   element: <Admin />,
    // },
    // {
    //   path: '/settings',
    //   element: <Settings />,
    // },
    // {
    //   path: '/settings/edit/:settingsKey',
    //   element: <Settings />,
    // },
    // {
    //   path: '/payment/mode',
    //   element: <PaymentMode />,
    // },
    // {
    //   path: '/taxes',
    //   element: <Taxes />,
    // },
    // {
    //   path: '/email',
    //   element: <Email />,
    // },
    // {
    //   path: '/email/read/:id',
    //   element: <EmailRead />,
    // },
    // {
    //   path: '/email/update/:id',
    //   element: <EmailUpdate />,
    // },

    // {
    //   path: '/settings/advanced',
    //   element: <AdvancedSettings />,
    // },
    // {
    //   path: '/profile',
    //   element: <Profile />,
    // },
    // {
    //   path: '/lead',
    //   element: <Lead />,
    // },
    // {
    //   path: '/offer',
    //   element: <Offer />,
    // },
    // {
    //   path: '/offer/create',
    //   element: <OfferCreate />,
    // },
    // {
    //   path: '/offer/read/:id',
    //   element: <OfferRead />,
    // },
    // {
    //   path: '/offer/update/:id',
    //   element: <OfferUpdate />,
    // },
    // {
    //   path: '*',
    //   element: <NotFound />,
    // },
  ]);

  return element;
}
