import styled from "styled-components";
import { Row, Col, Card } from "antd";

import { BLUE } from "@constants/style";

const HomeImage = () => (
    <ImgContainer justify="center" align="bottom">
        <Col sm={24} md={20} lg={14}>
            <DescriptionCard>
                <p className="description">
                    AntiCovid est une plateforme solidaire pour aider les entrepreneurs à
                    surmonter la crise du Covid 19.
                </p>
                <p className="encouragement">
                    Vous n'êtes pas seule(e), ensemble nous allons passer la crise et ressortir
                    plus forts.
                </p>
            </DescriptionCard>
        </Col>
    </ImgContainer>
);

const ImgContainer = styled(Row)`
    height: 300px;
    background: url(/background.jpg) no-repeat center center fixed;
    background-size: cover;
    margin-bottom: 20px;
`;

const DescriptionCard = styled(Card)`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    color: ${BLUE};
    text-align: center;

    .ant-card-body {
        padding: 30px 100px 15px 100px;
    }

    .description {
        font-size: 17px;
        line-height: 20px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    .encouragement {
        font-size: 16px;
        line-height: 20px;
    }
`;

export default HomeImage;
