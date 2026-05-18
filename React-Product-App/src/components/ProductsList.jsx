import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const gotoProducts = (product) => {
    navigate('/product', { state: { product: product } });
  };

  useEffect(() => {
    async function getProducts() {
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        if (res.status === 200) {
          let productsData = await res.json();
          setProducts(productsData);
        } else {
          throw new Error('Failed to fetch');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-2xl text-blue-300">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl text-red-400">{error.message}</p>;
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || product.category === selectedCategory)
  );
  
  if(filteredProducts.length === 0){
    return <p className='text-2xl text-red-600 text-center pt-20'>Result Not Found</p>
  }

  const categories = ["men's clothing", "jewelery", "electronics", "women's clothing"];

  return (
    <>
      <div className="flex justify-center gap-4 mt-5 mb-10 flex-wrap">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg w-64 "
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center">
        {filteredProducts.map(product => (
          <div onClick={() => gotoProducts(product)} key={product.id} className="shadow-2xl p-10 rounded-2xl bg-gray-200 text-center hover:bg-gray-400">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mx-20 pr-10" />
            <p className="text-gray-600 text-2xl">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsList;
