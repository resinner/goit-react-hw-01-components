import PropTypes from 'prop-types';
import styles from '../Section/section.module.css';

const Section = ({ title, children}) => {
    return (
      <div className={styles.section}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
}

Section.defaultProps = {
  children: [],
};

export default Section;
