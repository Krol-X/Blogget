import PropTypes from 'prop-types';
import style from './Text.module.css';
import classNames from 'classnames';

export const Text = (props) => {
  const {
    As = 'span',
    color = 'black',
    size, dsize, tsize,
    className,
    center,
    medium, bold,
    children,
    href,
    dateTime,
    onClick
  } = props;

  const classes = classNames(
    className,
    style[color],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fsd${dsize}`]]: dsize},
    {[style[`fst${tsize}`]]: tsize},
    {[style.medium]: (medium && !bold)},
    {[style.bold]: bold}
  );

  return (
    <As className={classes} dateTime={dateTime} href={href}
      onClick={onClick}
    >
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  dsize: PropTypes.number,
  tsize: PropTypes.number,
  className: PropTypes.string,
  center: PropTypes.bool,
  medium: PropTypes.bool,
  bold: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  href: PropTypes.string,
  dateTime: PropTypes.string,
  onClick: PropTypes.func
};
