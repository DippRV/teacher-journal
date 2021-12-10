import React from 'react';
import {Col, Row} from "antd";
import "./Header.scss"
import Navigation from "./Navigation/Navigation";


const Header: React.FC = () => {
    return (
        <>
            <div className={"font-header header-block"}>
                <Row>
                    <Col span={24}>Teacher journal</Col>
                </Row>
            </div>
            <Navigation />
        </>
    );
};

export default Header;