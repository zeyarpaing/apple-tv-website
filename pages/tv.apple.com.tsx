import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const AppleTV: NextPage = () => {
  return (
    <>
      <nav className="tv-nav">
        <div className="container">
          <Link href="/">
            <a>Back</a>
          </Link>
          <span>Apple TV</span>
          <span></span>
        </div>
      </nav>
      <main className="tv-main">Apple TV Page</main>
    </>
  );
};

export default AppleTV;
