import styled from "styled-components";
import { Row, Col } from "antd";
import { useRouter } from "next/router";

import { NAVLINKS, CONTACT, HOME } from "@constants/routes";
import { ORANGE } from "@constants/style";

import Logo from "./Logo";
import BaseButton from "./Button";

export default function HeaderMobile() {
    const router = useRouter();

    return (
        <Container>
            <Row align="middle" className="text-center">

                <Col
                    xs={{ span: 24, order: 1 }}
                    sm={{ span: 24, order: 1 }}
                    lg={{ order: 2, span: 12 }}
                >
                    <div onClick={() => router.push(HOME)} className="cursor-pointer">
                        <Logo />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

const Container = styled.header`
    padding: 10px 15px;
`;

const ContactButton = styled(BaseButton)`
    padding: 0 30px;
    transition: all 0.5s;

    &:hover {
        color: ${ORANGE};
        border: 1px solid ${ORANGE};
        background-color: white;
    }
`;

const Link = styled.a`
    font-size: 14px !important;

    color: ${props => (props.active ? `${ORANGE} !important` : "initial")};
    font-weight: ${props => (props.active ? `bold` : "initial")};
`;
