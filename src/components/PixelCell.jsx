import React from 'react';

const GRID_INITIAL_COLOR = '#313131';

export default class PixelCell extends React.Component {
  shouldComponentUpdate(nextProps) {
    const keys = ['color', 'width'];
    const isSame = keys.every(key => this.props.cell[key] === nextProps.cell[key]);
    return !isSame;
  }
  render() {
    const {
      cell: { color, width },
      id, onMouseDown, onMouseUp, onMouseOver, onTouchMove
    } = this.props;
    const styles = {
      width: `${width}%`,
      paddingBottom: `${width}%`,
      backgroundColor: color || GRID_INITIAL_COLOR
    };

    return (
      <div
        onMouseDown={ev => onMouseDown(id, ev)}
        onMouseUp={ev => onMouseUp(id, ev)}
        onMouseOver={ev => onMouseOver(id, ev)}
        onFocus={ev => onMouseOver(id, ev)}
        onTouchStart={ev => onMouseDown(id, ev)}
        onTouchEnd={ev => onMouseUp(id, ev)}
        onTouchCancel={ev => onMouseUp(id, ev)}
        onTouchMove={ev => onTouchMove(id, ev)}
        style={styles}
      />
    );
  }
}
