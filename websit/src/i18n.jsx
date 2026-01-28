import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Home: "Home",
        wlc: "welcome",
        categories: "categories",
        product: "product",
        products: "products",
        login: "login",
        logout: "logout",
        cart: "cart",
        register:"register",
      },
    },
    ar: {
      translation: {
        Home: "الرئيسية",
        wlc: "مرحبا بك",
        categories: "التصنيفات",
        product: "المنتج",
        products: "المنتجات",
        login: "تسجيل دخول",
        logout: "تسجيل خروج",
        cart: "السلة",
        register:"عمل  حساب  جديد ",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
