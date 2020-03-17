import { Row, Col, Typography } from "antd";

import AirtableBase from "@helpers/airtable";

import useCheckbox from "@hooks/useCheckBox";

import Page from "@components/Page";

import { companiesOptions, regionsOptions } from "./config";

const Plan = () => {
    const [plans, setPlans] = React.useState([]);
    const [CompaniesOptions, companiesValues] = useCheckbox(
        "Type d'entreprise",
        companiesOptions,
        []
    );
    const [RegionsOprions, regionsValues] = useCheckbox(
        "Région",
        regionsOptions,
        []
    );

    React.useEffect(() => {
        fetchData();
    }, [companiesValues, regionsValues]);

    const fetchData = () => {
        /*
        select({filterByFormula: `AND()`})
        */
        AirtableBase("Dispositifs")
            .select({ view: "Grid view" })
            .firstPage((err, records) => {
                if (err) console.error(err);
                else {
                    const data = records.map(record => record.fields);
                    setPlans(data);
                    console.log(data);
                }
            });
    };

    return (
        <Page title="Mes aides">
            <Row gutter={[25, 25]}>
                <CompaniesOptions />
                <RegionsOprions />
            </Row>
        </Page>
    );
};

export default Plan;
