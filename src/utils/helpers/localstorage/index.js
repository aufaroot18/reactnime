function getItemLocalStorage(name) {
  const item = localStorage.getItem(name);
  return item;
}

function setItemLocalStorage(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

export { getItemLocalStorage, setItemLocalStorage };
