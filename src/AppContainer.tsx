import { Box, Sheet } from "@mui/joy";
import NavigationContainer from "./Containers/NavigationContainer/NavigationContainer";

type Props = {
    children: React.ReactNode,
};

const AppContainer = (props: Props) => {
    const { children } = props;
    console.log('appcontainerLoaded', {props})
    return <Sheet
    sx={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    }}
    >
     <Box
      sx={{
        flex: 1,
        overflow: 'scroll'
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
    </Sheet>
}

export default AppContainer;