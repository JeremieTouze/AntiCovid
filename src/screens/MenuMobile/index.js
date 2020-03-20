
import { Row, Col, Card } from "antd";
import styled from "styled-components";
import { useRouter } from "next/router";
import Page from "@components/Page";
import { HomeFilled, WechatFilled, PhoneFilled}  from "@ant-design/icons";
import { HOME,PLANS, BLOG, CONTACT} from "@constants/routes";

const MenuMobile = () => {
    const router = useRouter();
    return (
        <Page title="MenuMobile">
            <Container justify="center" align="middle">
                    <Row justify="center">
                        <HomeFilled />
                        <Link
                            className="text-uppercase"
                            onClick={() => router.push(HOME)}

                        >
                            ACCEUIL
                        </Link>
                    </Row>
                    <Row justify="center">
                        <Link
                            className="text-uppercase"
                            onClick={() => router.push(PLANS)}

                        >
                            AIDES
                        </Link>
                    </Row>
                    <Row justify="center">
                        <WechatFilled />
                        <Link
                            className="text-uppercase"
                            onClick={() => router.push(BLOG)}

                            
                        >
                            BLOG
                        </Link>
                    </Row>
                    <Row justify="center">
                    <PhoneFilled />
                        <Link
                            className="text-uppercase"
                            onClick={() => router.push(CONTACT)}

                        >
                            CONTACT
                        </Link>
                    </Row>
            </Container>
        </Page>


    )
}


const Container = styled(Col)`
`;
const Link = styled.a`
    font-size: 23px !important;
    font-weight: bold;
    color: white !important
`;

export default MenuMobile;
