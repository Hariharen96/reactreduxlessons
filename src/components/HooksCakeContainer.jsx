import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/Index'

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const Dispatch = useDispatch()
    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button onClick={()=>Dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer
