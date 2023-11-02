import { useContext, useEffect } from 'react';

import { REDUCER_ACTIONS } from '../../appContants';
import Button from '../../components/Button';
import Category from '../../components/Category';
import Search from '../../components/Search';
import ModuleContext from '../../hooks/context/ModuleContext';
import { getCategories } from '../../services/category';
import './index.css';

const Categories = () => {
  const { categories, dispatchCategory } = useContext(ModuleContext);
  const noDataMessage = `No Categories found, Please create one`;

  useEffect(() => {
    loadCategories(dispatchCategory);
  }, []);

  return (
    <div className="content-container">
      <div className="m-8 flex justify-end">
        <Search placeholder={`Search category using title...`} />
        <Button label="Search" type="create" />
      </div>
      <div className="category-list">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category) => (
            <Category
              key={category.id}
              name={category.name}
              description={category.description}
            />
          ))
        ) : (
          <span className="font-bold text-2xl my-auto text-gray-500">
            {noDataMessage}
          </span>
        )}
      </div>
    </div>
  );
};

const loadCategories = async (dispatchCategory) => {
  let moduleData = await getCategories();
  dispatchCategory({
    type: REDUCER_ACTIONS.ADD_ALL,
    payload: moduleData.data,
  });
};

export default Categories;
