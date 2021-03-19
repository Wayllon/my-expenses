import { useEffect, useReducer } from 'react'
import axios from 'axios'

const reducer = (state, action) => {

    if (action.type === 'REQUEST') {
      return {
        ...state,
        loading: true
  
      }
    }
    if (action.type === 'SUCCESS') {
      return {
        ...state,
        loading: false,
        data: action.data
      }
    }
    return state
  }
  
  export const useGet = URL => {
    const [data, dispatch] = useReducer(reducer, {
      loading: true,
      data: {}
    })
    useEffect(() => {
      dispatch({ type: 'REQUEST' })
      axios
        .get(URL)
        .then(res => {
          dispatch({ type: 'SUCCESS', data: res.data })
        })
    }, [URL])
    return data
  }