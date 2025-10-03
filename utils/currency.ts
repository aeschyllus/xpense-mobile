const intl = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
});

export const formatPrice = (price: number) => intl.format(price);
