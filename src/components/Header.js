import styled from "styled-components";
import { Row, Col } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";

import { NAVLINKS, CONTACT, HOME } from "@constants/routes";
import { ORANGE } from "@constants/style";

import Logo from "./Logo";
import BaseButton from "./Button";
import Title from "./Title";

export default function Header({ title }) {
    const router = useRouter();

    return (
        <Container>
            <Row align="middle" className="text-center">
                <Col
                    xs={{ span: 1, order: 1 }}
                    sm={{ span: 0, order: 1 }}
                    lg={{ span: 0, order: 1 }}
                >
                    <div onClick={() => router.push(HOME)} className="cursor-pointer">
                        <MenuIcon />
                    </div>
                </Col>
                <Col
                    xs={{ span: 0, order: 3 }}
                    sm={{ span: 6, order: 3 }}
                    lg={{ span: 6, order: 1 }}
                >
                    <ContactButton
                        className="bg-orange text-uppercase"
                        onClick={() => router.push(CONTACT)}
                    >
                        Contact
                    </ContactButton>
                </Col>
                <Col
                    xs={{ span: 0, order: 2 }}
                    sm={{ span: 24, order: 1 }}
                    lg={{ span: 12, order: 2 }}
                >
                    <div onClick={() => router.push(HOME)} className="cursor-pointer">
                        <Logo />
                    </div>
                </Col>
                <Col
                    xs={{ span: 22, order: 2 }}
                    sm={{ span: 0, order: 1 }}
                    lg={{ span: 0, order: 2 }}
                >
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
                <Col
                    xs={{ span: 0, order: 2 }}
                    sm={{ span: 18, order: 2 }}
                    lg={{ span: 6, order: 3 }}
                >
                    <Row>
                        {NAVLINKS.map(({ href, label }) => (
                            <Col key={href}>
                                <Link
                                    className="text-uppercase"
                                    key={href}
                                    onClick={() => router.push(href)}
                                    active={router.pathname === href}
                                >
                                    {label}
                                </Link>
                            </Col>
                        ))}
                    </Row>
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

const MenuIcon = styled(MenuOutlined)`
color: white;
font-size: 30px;
`;