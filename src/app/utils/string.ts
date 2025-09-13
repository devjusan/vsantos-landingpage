export const maxString = (str: string, max: number) => {
  if (str.length <= max) return str;
  return `${str.slice(0, max)}...`;
};

export const prefiryUrlName = (url: string) => {
  if (!url) return "";

  const _url = new URL(url);

  return maxString(_url.host, 20);
};

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

export const uppercaseFirst = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
};
