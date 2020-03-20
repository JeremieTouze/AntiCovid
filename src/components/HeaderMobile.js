import styled from "styled-components";
import { Row, Col } from "antd";
import { useRouter } from "next/router";

import { NAVLINKS, CONTACT, HOME } from "@constants/routes";
import { ORANGE } from "@constants/style";

import Logo from "./Logo";
import Title from "./Title";

export default function HeaderMobile({ title }) {
    const router = useRouter();

    return (
        <Container>
            <Row align="middle" className="text-center">
                <Col span={1}>
                    <div onClick={() => router.push(HOME)} className="cursor-pointer">
                        <p>=</p>
                    </div>
                </Col>
                <Col span={22}>
                    {title === "Accueil" ? (
                        <div onClick={() => router.push(HOME)} className="cursor-pointer">
                            <Logo />
                        </div>) : (
                            <div>
                                <Title>{title}</Title>
                            </div>
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}

const Container = styled.header`
    padding: 10px 15px;
`;

const Link = styled.a`
    font-size: 14px !important;

    color: ${props => (props.active ? `${ORANGE} !important` : "initial")};
    font-weight: ${props => (props.active ? `bold` : "initial")};
`;