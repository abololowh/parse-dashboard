import Icon      from 'components/Icon/Icon.react';
import PropTypes from 'lib/PropTypes';
import React     from 'react';
import styles    from 'components/MultiSelect/MultiSelect.scss';

let MultiSelectOption = ({ checked, children, ...other }) => (
  <div {...other} className={styles.option}>
    {children}
    {checked ?
      <div className={styles.checked}>
        <Icon width={20} height={20} name='check' fill='#ffffff' />
      </div> :
      <div className={styles.unchecked} />
    }
  </div>
);

export default MultiSelectOption;