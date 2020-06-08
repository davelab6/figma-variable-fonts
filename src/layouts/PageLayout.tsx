import * as React from 'react';
import {Layout} from 'antd';
import {Redirect} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {routes} from '../components/routes';
import './PageLayout.css';

const PageLayout: React.StatelessComponent<{}> = () => {
    return (
        <Layout>
            <Layout>
                <Layout.Content>
                    <Redirect to="/home" />
                    {renderRoutes(routes)}
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default PageLayout;
