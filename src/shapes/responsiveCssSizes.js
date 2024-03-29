import PropTypes from 'prop-types';
import errorPropDefinition from './utils/errorPropDefinition';
import {
  sizeKeys,
} from '../config/styleConstants';

const cssSizes = ['0', ...sizeKeys];

function isCssValue(value) {
  return value === '' || value.split(' ').every((val) => cssSizes.indexOf(val) >= 0);
}

export function cssSizeValue(props, propName, componentName, location, propFullName) {
  const {
    [propName]: value,
  } = props;
  if (value !== undefined && (typeof value !== 'string' || !isCssValue(value))) {
    return errorPropDefinition(value, propFullName || propName, componentName);
  }
  return null;
}

export default PropTypes.oneOfType([
  cssSizeValue,
  PropTypes.shape({
    xxl: cssSizeValue,
    xl: cssSizeValue,
    l: cssSizeValue,
    m: cssSizeValue,
    s: cssSizeValue,
    xs: cssSizeValue,
    xxs: cssSizeValue,
  }),
]);
