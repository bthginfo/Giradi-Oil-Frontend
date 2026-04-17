import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { RootProvider } from "./components/RootProvider";
import { HomePage } from "./components/pages/HomePage";
import { lazy } from "react";

const ShopPage = lazy(() => import("./components/pages/ShopPage").then((m) => ({ default: m.ShopPage })));
const ProductDetailPage = lazy(() => import("./components/pages/ProductDetailPage").then((m) => ({ default: m.ProductDetailPage })));
const AboutPage = lazy(() => import("./components/pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./components/pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const ImpressumPage = lazy(() => import("./components/pages/ImpressumPage").then((m) => ({ default: m.ImpressumPage })));
const DatenschutzPage = lazy(() => import("./components/pages/DatenschutzPage").then((m) => ({ default: m.DatenschutzPage })));
const AGBPage = lazy(() => import("./components/pages/AGBPage").then((m) => ({ default: m.AGBPage })));
const WiderrufPage = lazy(() => import("./components/pages/WiderrufPage").then((m) => ({ default: m.WiderrufPage })));
const CheckoutPage = lazy(() => import("./components/pages/CheckoutPage"));
const OrderConfirmationPage = lazy(() => import("./components/pages/OrderConfirmationPage").then((m) => ({ default: m.OrderConfirmationPage })));
const SetupGuidePage = lazy(() => import("./components/pages/SetupGuidePage").then((m) => ({ default: m.SetupGuidePage })));
const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootProvider,
    children: [
      {
        Component: Layout,
        children: [
          { index: true, Component: HomePage },
          { path: "shop", Component: ShopPage },
          { path: "shop/:id", Component: ProductDetailPage },
          { path: "unsere-tradition", Component: AboutPage },
          { path: "kontakt", Component: ContactPage },
          { path: "checkout", Component: CheckoutPage },
          { path: "bestellung-bestaetigt", Component: OrderConfirmationPage },
          { path: "setup", Component: SetupGuidePage },
          { path: "impressum", Component: ImpressumPage },
          { path: "datenschutz", Component: DatenschutzPage },
          { path: "agb", Component: AGBPage },
          { path: "widerruf", Component: WiderrufPage },
          { path: "*", Component: NotFoundPage },
        ],
      },
    ],
  },
]);