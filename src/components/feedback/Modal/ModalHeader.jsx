import React from 'react';
import PropTypes from 'prop-types';
import iconShape from 'src/shapes/iconShape';
import Block from '../../layout/Block';
import FlexBox from '../../layout/FlexBox';
import Row from '../../layout/Row';
import Icon from '../../general/Icon';
import Text from '../../general/Text';
import styles from './modal.scss';

const ModalHeader = ({
  className,
  icon,
  children,
  hasCloseIcon,
  onClose,
}) => (
  <Block
    className={className}
    background="grey-lightest"
    padding="m l"
    hasBorderBottom
  >
    <FlexBox align="space-between">
      <Row
        valign="center"
        margin="xs"
      >
        {icon && (
          <Block padding="0 xs" className="lh0">
            <Icon
              size="m"
              {...icon}
            />
          </Block>
        )}
        {children && (
          <Block padding="0 xs">
            <Text
              size="s"
              weight="medium"
            >
              {children}
            </Text>
          </Block>
        )}
      </Row>
      {hasCloseIcon && (
        <div
          className={styles['close-button']}
          role="button"
          tabIndex="0"
          onClick={onClose}
          onKeyDown={(e) => {
            const { keyCode } = e;
            if ([13, 32].indexOf(keyCode) >= 0) {
              e.preventDefault();
              onClose();
            }
          }}
        >
          <Icon
            name="close"
            size="l"
          />
        </div>
      )}
    </FlexBox>
  </Block>
);

ModalHeader.propTypes = {
  className: PropTypes.string,
  icon: iconShape,
  children: PropTypes.node,
  hasCloseIcon: PropTypes.bool,
  onClose: PropTypes.func,
};

ModalHeader.defaultProps = {
  className: '',
  icon: null,
  children: null,
  hasCloseIcon: true,
  onClose() {},
};

export default ModalHeader;
