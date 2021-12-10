import React from 'react';
import {Col, Row} from "antd";
import "./Navigation.scss";

const Navigation: React.FC = () => {
    return (
        <div className="nav-block font-navigation">
            <Row justify="start">
                <Col span={2} className={"nav-el-block"}>Классы</Col>
                <Col span={2} className={"nav-el-block"}>Оценки</Col>
                <Col span={3} className={"nav-el-block"}>Расписание</Col>
                <Col span={4} className={"nav-el-block"}>Домашние задания</Col>
                <Col span={3} className={"nav-el-block"}>Инструменты</Col>
            </Row>
        </div>
    );
};

export default Navigation;