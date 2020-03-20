import styled from "styled-components";
import { Form, Row } from "antd";

import { BLUE, GRAY, DARKGRAY, ORANGE, BOXSHADOW} from "@constants/style";
import BaseCard from "@components/Card";

import ContactInputs from "./Inputs";
import ContactSubmitBtn from "./SubmitBtn";
import ContactUploadBtn from "./UploadBtn";

export default function ContactForm() {
    const onFinish = values => {
        console.log(values);
    };

    return (
        <Block>
            <Form name="contact-form" onFinish={onFinish} hideRequiredMark>
                <ContactInputs />
                <Row gutter={[15, 15]} align="middle">
                    <ContactUploadBtn />
                    <ContactSubmitBtn />
                </Row>
            </Form>
        </Block>
    );
}

const Block = styled(BaseCard)`
    box-shadow: ${BOXSHADOW};

    @media screen and (max-width: 576px) {
        padding: 35px 20px 5px 20px;
    }
    padding: 35px 45px 5px 45px;
`;
