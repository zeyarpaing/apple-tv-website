import styles from '../../styles/Header.module.scss';

const navItems = [
  'Store',
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'AirPods',
  'TV & Home',
  'Accessories',
  'Support',
];
const Header = () => {
  return (
    <header>
      <nav className={styles.appleNavHeader}>
        <div className="container">
          <ul>
            <li>
              <img src="/apple-logo.svg" alt="apple-logo" />
            </li>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href="#">{item}</a>
              </li>
            ))}
            <li>
              <a className="ac-gn-link ac-gn-link-bag"></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
