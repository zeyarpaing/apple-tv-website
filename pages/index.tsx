import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <video
        loop
        autoPlay
        src="https://www.apple.com/105/media/us/apple-tv-plus/2022/755f2d0d-659f-44e2-a345-57305fabfdfa/supercut/medium.mp4"
      ></video>
    </Layout>
  );
};

export default Home;
