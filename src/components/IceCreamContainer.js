import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux/iceCream/iceCreamActions'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCream - {props.noOfIceCreams}</h2>
            <button onClick={ props.buyIcecream }>Buy IceCream </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfIceCreams: state.iceCream.noOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (IceCreamContainer)
