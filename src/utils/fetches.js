export const login = (email, password) => {
  const user = {
    identifier: email,
    password: password,
  };
  const data = JSON.stringify(user);
  fetch('http://localhost:1337/api/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('token', data.jwt);
    })
    .catch((err) => console.log(err));
};
export const fetchProducts = async () => {
  try {
    const res = await fetch('http://localhost:1337/api/products');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return console.log(err);
  }
};
export const fetchCategories = async () => {
  try {
    const res = await fetch('http://localhost:1337/api/categories');
    const json = await res.json();
    return json.data;
  } catch (error) {
    return console.log(error);
  }
};
export const postProduct = async (product) => {
  try {
    const res = await fetch('http://localhost:1337/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return console.log(error);
  }
}