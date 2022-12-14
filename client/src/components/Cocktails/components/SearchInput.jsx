import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCocktails, clearSearchedCocktails } from 'store/cocktailsSlice'
import { debounce } from 'lodash'

const SearchInput = () => {
  const dispatch = useDispatch()
  const searchedCocktails = useSelector(state => state.cocktails.searchedCocktails)
  const handlerInput = debounce(
    e => (e.target.value ? dispatch(getCocktails({ substring: e.target.value })) : dispatch(clearSearchedCocktails())),
    300,
  )
  const handlerClear = e => {
    e.target.value = ''
    dispatch(clearSearchedCocktails())
  }

  useEffect(() => {
    return () => {
      searchedCocktails.rows.length && dispatch(clearSearchedCocktails())
    }
  }, [dispatch])

  return (
    <div className='search' onInput={e => handlerInput(e)}>
      <input type='text' />
      <i onClick={e => handlerClear(e)}></i>
    </div>
  )
}

export default SearchInput
