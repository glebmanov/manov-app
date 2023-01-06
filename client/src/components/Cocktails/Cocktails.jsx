import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getCocktails, getIngredients } from 'store/cocktailsSlice'

import CocktailPage from './pages/CocktailPage'
import CocktailsPage from './pages/CocktailsPage'
import IngredientsPage from './pages/IngredientsPage'
import EditorPage from './pages/EditorPage'
import Favorites from './pages/Favorites'

import './styles/cocktails.scss'

const Cocktails = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.user.isAuth)
  const cocktails = useSelector(state => state.cocktails.cocktails)
  const categories = useSelector(state => state.cocktails.categories)
  const ingredients = useSelector(state => state.cocktails.ingredients)

  useEffect(() => {
    dispatch(getCocktails({}))
    dispatch(getCategories())
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <div className='nav'>
        <nav>
          <Link to='/cocktails'>
            <span>Search</span>
          </Link>
          <Link to='build'>
            <span>Build</span>
          </Link>
          {isAuth && (
            <Link to='favorites'>
              <span>Favorite</span>
            </Link>
          )}
          {isAuth && (
            <Link to='editor'>
              <span>Editor</span>
            </Link>
          )}
        </nav>
      </div>
      <div className='content'>
        <Routes>
          <Route index element={<CocktailsPage cocktails={cocktails} />} />
          <Route path=':id' element={<CocktailPage />} />
          <Route path='build' element={<IngredientsPage ingredients={ingredients} categories={categories} />} />
          {isAuth && <Route path='favorites' element={<Favorites />} />}
          {isAuth && <Route path='editor' element={<EditorPage ingredients={ingredients} categories={categories} />} />}
        </Routes>
      </div>
    </>
  )
}

export default Cocktails
