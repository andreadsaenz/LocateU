import Head from 'next/head';
import { Fragment } from 'react';
import HeaderOne from '../components/header/header-1';
import { getAllItems } from '../lib/items-util';
import PageBanner from '../components/page-banner/index';
import HeaderTwo from '../components/header/header-2';

import Team from '../components/team';


function LoginPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Login</title>
            </Head>
            <HeaderTwo />
        </Fragment>
    );
}

export function getStaticProps() {
    const services = getAllItems('services');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const teamItems = getAllItems('teams');

    return {
        props: {
            services,
            testimonialItems,
            brandItems,
            teamItems,
        },
    };
}

export default LoginPage;
