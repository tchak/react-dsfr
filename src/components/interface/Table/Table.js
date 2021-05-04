import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './table.css';

/**
 *
 * @visibleName Table
 */
const Table = ({
  children,
  noScroll,
  caption,
  captionPosition,
  bordered,
  fixedLayout,
  className,
}) => {
  const _className = classNames('fr-table', {
    'fr-table--no-caption': (captionPosition === 'none'),
    'fr-table--caption-bottom': (captionPosition === 'bottom'),
    'fr-table--bordered': bordered,
    'fr-table--no-scroll': noScroll,
    'fr-table--layout-fixed': fixedLayout,
  }, className);
  return (
    <div
      className={_className}
      data-testid="table"
    >
      <table>
        <caption data-testid="table-caption">{caption}</caption>
        {children}
      </table>
    </div>
  );
};

Table.defaultProps = {
  fixedLayout: false,
  noScroll: false,
  bordered: false,
  captionPosition: 'top',
  className: '',
  children: null,
};

Table.propTypes = {
  fixedLayout: PropTypes.bool,
  noScroll: PropTypes.bool,
  bordered: PropTypes.bool,
  captionPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
  caption: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
export default Table;