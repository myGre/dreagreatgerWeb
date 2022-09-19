
export const setItem = (key: string, value: string) => {
  return sessionStorage.setItem(key, value);
}

export const getItem = (key: string) => {
  return sessionStorage.getItem(key) || '';
}
export const delItem = (key: string) => {
  return sessionStorage.removeItem(key);
}