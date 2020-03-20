import { Row, Col, Card } from "antd";
import styled from "styled-components";
import { BLUE, GRAY, DARKGRAY } from "@constants/style";
import BaseCard from "@components/Card";

const data = [
    { text: "Un accompagnement pour trouver les aides adéquates", icon: "/community.png" },
    { text: "Un Blog pour rester informé(e) et faire les bons choix", icon: "/blogImg.png" }
];

const HomeMobile = () => (
    <HomeMobileContainer justify="center" gutter={[25, 25]} className="text-center">
        <Col span={24} >
            <DescriptionContainer>
                <p className="description">
                    AntiCovid est une plateforme solidaire pour aider les entrepreneurs à
                    surmonter la crise du Covid 19.
                </p>
            </DescriptionContainer>

            <CardContainer>
                <h2 className="title">AntiCovid c'est :</h2>
                {data.map(({ text, icon }, index) => (
                    <StyledCard key={icon}>
                        <Img src={icon} />
                        <TextCard>{text}</TextCard>
                    </StyledCard>
                ))}
            </CardContainer>
            <AboutContainer>
                <p className="question">Qui est derrière AntiCovid ?</p>
                <p className="response">
                    Nous sommes une équipe d'entrepreneurs, bénévoles, bien décidés à unir nos
                    compétences pour que nos entreprises françaises tiennent le coup pendant la
                    crise !
                </p>
            </AboutContainer>
        </Col>


    </HomeMobileContainer>

)
const HomeMobileContainer = styled(Row)`
    padding: 0px 30px;
`
const DescriptionContainer = styled.span`
    .description {
        font-size: 15px;
        color: white;
        font-weight: 800;
        text-align: center;
    }

`
const CardContainer = styled(BaseCard)`
    box-shadow: 5px 5px 10px 0px ${DARKGRAY};
    padding: 20px 0px;
    margin: 10px  0px;
    .title{
        color: ${BLUE};
        font-size: 23px !important;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 10px;
    }
`

const StyledCard = styled(BaseCard)`
    margin: 20px 30px;
    border-radius: 25px;
    padding: 10px 10px;
    background-color: ${GRAY};
`;
const Img = styled.img`
    width: 60px;
    height: 35px;
    margin-bottom: 5px;
`;
const TextCard = styled.p`
    font-size: 17px !important;
    font-weight: 700;
    color: black;
`;
const AboutContainer = styled(Row)`
    padding: 20px 0px;
    .question {
        font-size: 23px;
        font-weight: bold;
        color: black;
    }

    .response {
        font-size: 16px;
        color: black;
    }
`
export default HomeMobile;
