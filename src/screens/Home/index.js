import Page from "@components/Page";
import styled from "styled-components";
import HomeImage from "./Image";
import HomeDescription from "./Description";
import HomeMobile from "./HomeMobile";
import useWindowSize from "@hooks/useWindowSize";
import { Breakpoint, BreakpointProvider } from 'react-socks';

const Home = () => {
    // const size = useWindowSize();
    // if (size.width > 768) {
    //     dc = (
    //         <React.Fragment>
    //             <HomeImage />
    //             <HomeDescription />
    //         </React.Fragment>
    //     )
    // } else {
    //     dc = (
    //         <React.Fragment>
    //             <HomeImage />
    //             <HomeDescription />
    //         </React.Fragment>
    //     )
    // }

    return (
        <Page title="Accueil">
            <BreakpointProvider>
                <Breakpoint small down>
                    <HomeMobile/>
                </Breakpoint>
                <Breakpoint large up>
                    <HomeImage />
                    <HomeDescription />
                </Breakpoint>
            </BreakpointProvider>

        </Page>
    )
}



export default Home;
