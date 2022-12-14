import React from 'react'
import Button from './Button'
import { uniqueId } from 'lodash'

const CategoriesButtons = ({ ingredientCategories, activeCategory, setActiveCategory }) => {
  return (
    <div className='categories-buttons btn-group btn-group-sm'>
      {ingredientCategories.map(({ id, name }) => (
        <Button key={uniqueId()} handler={setActiveCategory} value={id} text={name} isActive={activeCategory === id} />
      ))}
      <Button handler={setActiveCategory} value={'all'} text={'all'} isActive={activeCategory === 'all'} />
    </div>
  )
}

export default CategoriesButtons
