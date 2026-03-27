import { useEffect } from "react";

const SQUARE_URL = "https://jc-barbershop-107540.square.site";

const Book = () => {
  useEffect(() => {
    window.location.replace(SQUARE_URL);
  }, []);

  return null;
};

export default Book;
