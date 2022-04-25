import { Fragment } from 'react';
import Head from 'next/head';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import HeaderOne from '../components/header/header-1';
import Hero from '../components/home-page/hero';
import About from '../components/home-page/about';


function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>LocateU - Sistema de navegación peatonal</title>
                <meta
                    name='description'
                    content='LocateU - Sistema de navegación peatonal '
                />
            </Head>
            <HeaderOne />
            <Hero heroItems={props.heroItems} />
            <About />
        </Fragment>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');
    const pricingItems = getAllItems('pricing');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            pricingItems,
            testimonialItems,
            brandItems,
        },
    };
}

export default HomePage;
