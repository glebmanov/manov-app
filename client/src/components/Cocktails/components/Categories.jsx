import React, { useState } from 'react'
import CategoriesButtons from './CategoriesButtons'
import OptionButtons from './OptionButtons'
import ListIngredients from './ListIngredients'

const Categories = ({
  categories,
  ingredientList,
  handleOnChange,
  checkedState,
  options,
  activeOption,
  setActiveOption,
}) => {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className='categories'>
      <div className='buttons'>
        <CategoriesButtons
          categories={Object.keys(categories)}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <OptionButtons options={options} activeOption={activeOption} handler={setActiveOption} />
      </div>
      <ListIngredients
        ingredientList={ingredientList}
        categories={categories}
        activeCategory={activeCategory}
        handleOnChange={handleOnChange}
        checkedState={checkedState}
      />
    </div>
  )
}

export default Categories
