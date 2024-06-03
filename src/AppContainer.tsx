import { Box } from "@mui/joy";
import NavigationContainer from "./Containers/NavigationContainer/NavigationContainer";

type Props = {
    children: React.ReactNode,
};

const AppContainer = (props: Props) => {
    const { children } = props;
    console.log('appcontainerLoaded', {props})
    return <>
     <Box
      sx={{
        flexGrow: 1,
      }}
    >

        {children}
    </Box>
    <Box
      sx={{
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
      }}
    >
        <NavigationContainer />
    </Box>

    </>
}

export default AppContainer;