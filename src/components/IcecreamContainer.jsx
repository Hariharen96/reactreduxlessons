import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/Index'

const IcecreamContainer = (props) => {
    return (
        <div>
            <h1>Num of icecreams - {props.numOfIcecreams}</h1>
            <button onClick={()=>props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfIcecreams: state.icecream.numOfIcecreams
    }
}

const mapDispatchToProps = disptach => {
    return{
        buyIceCream: () => disptach(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)
