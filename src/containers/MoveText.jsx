import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moves from '../static_data/moves.json'
import { markFavMove, unmarkFavMove } from '../actions'

class MoveText extends React.Component {
  favClickHandler() {
    const { value, favMove } = this.props
    favMove(value)
  }
  unfavClickHandler() {
    const { value, unFavMove } = this.props
    unFavMove(value)
  }

  render() {
    const { value, favMoves } = this.props
    return (
      <div id="text" className="BS col-xs-12">
        <img
          id="move"
          alt=""
          src={moves[value].url}
          className="img-responsive"
        />
        {favMoves.includes(value) ? (
          <button
            type="button"
            className="btn btn-default pull-right heart"
            onClick={() => this.unfavClickHandler()}
          >
            <span className="glyphicon glyphicon-heart" />
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-default pull-right heart"
            onClick={() => this.favClickHandler()}
          >
            <span className="glyphicon glyphicon-heart-empty" />
          </button>
        )}
        <p id="moveTips">{moves[value].tips}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  value: state.imgReducer,
  favMoves: state.favReducer,
})

const mapDispatchToProps = {
  favMove: markFavMove,
  unFavMove: unmarkFavMove,
}

MoveText.propTypes = {
  value: PropTypes.string.isRequired,
  favMoves: PropTypes.arrayOf(PropTypes.string).isRequired,
  favMove: PropTypes.func.isRequired,
  unFavMove: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveText)
