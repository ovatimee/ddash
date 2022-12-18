import { useEffect, useState } from "react";


export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data =  await res.json()
        setData(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json()
      setData(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

// export const useCreate = async (userData, path) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   setLoading(true);
//   try {
//     const response = await axios.post(baseUrl + path, userData, config);
//     setData(response.data.data);
//   } catch (error) {
//     setError(error);
//   }
//   setLoading(false);
//   return { data, loading, error };
// };
