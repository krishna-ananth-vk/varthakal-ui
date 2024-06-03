import { Grid } from "@mui/joy";

type Props = {
    children: React.ReactNode,
};

const AppContainer = (props: Props) => {
    const { children } = props;

    return <Grid>
        {children}
    </Grid>
}

export default AppContainer;