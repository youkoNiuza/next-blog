import { useEffect, useState } from 'react';
import { fetchCategories } from 'core/api/fetchCategories';
import { fetchUser } from 'core/api/fetchUser';

export default function usePublicData(sourceData:PublicData = {}):PublicData {
  const [publicData, setPublicData] = useState(sourceData);
  useEffect(() => {
    async function fetchPublicData() {
      const fetchCategoryResult = await fetchCategories();
      const categories = await fetchCategoryResult.json();
      const fetchUserResult = await fetchUser();
      const user = await fetchUserResult.json();
      return {
        categories,
        user,
      };
    }
    try {
      // const res = await fetchPublicData();
      // setPublicData(fetchPublicData());
      fetchPublicData().then(res => setPublicData(res));
    } catch (error) {
      console.warn(error);
    }
  }, []);
  return publicData;
}
