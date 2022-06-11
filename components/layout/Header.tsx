import styles from './Header.module.scss';

const navItems = [
  'Store',
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'AirPods',
  'TV & Home',
  'Only on Apple',
  'Accessories',
  'Support',
];
const Header = () => {
  return (
    <>
      <nav className={styles.appleNavHeader}>
        <div className="container">
          <ul className={styles.mobileNav}>
            <li>
              <a className={styles.menuIcon}>
                <span>Menu</span>
              </a>
            </li>
            <li>
              <a className={styles.appleIcon}>
                <span>Apple</span>
              </a>
            </li>
            <li>
              <a className={styles.bagIcon}>
                <span>Bag</span>
              </a>
            </li>
          </ul>

          <ul className={styles.nav}>
            <li>
              <a className={styles.appleIcon}>
                <span>Apple</span>
              </a>
            </li>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href="#">
                  <span>{item}</span>
                </a>
              </li>
            ))}

            <li>
              <a className={styles.searchIcon}>
                <span>Search</span>
              </a>
            </li>
            <li>
              <a className={styles.bagIcon}>
                <span>Bag</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={styles.tvNav}>
        <div className="container">
          <a>Apple TV+</a>
          <div className={styles.stream_btn}>Stream now</div>
        </div>
      </nav>
      <div className={styles.promo_content}>
        <div className="container">
          <p>
            Friday Night Baseball, now streaming on Apple TV+.
            <a>
              <span>Learn more</span>
              <span className="icon more"></span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
