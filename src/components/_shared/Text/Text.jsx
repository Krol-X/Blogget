import PropTypes from 'prop-types';
import style from './Text.module.css';
import classNames from 'classnames';

export const Text = (props) => {
  const {
    As = 'span',
    color = 'black',
    size,
    dsize,
    tsize,
    className,
    children,
    href,
    center
  } = props;

  const classes = classNames(
    className,
    style[color],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fsd${dsize}`]]: dsize},
    {[style[`fst${tsize}`]]: tsize}
  );

  return <As className={classes} href={href}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  dsize: PropTypes.number,
  tsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  href: PropTypes.string,
  center: PropTypes.bool
};
