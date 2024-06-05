import { Box, Sheet } from "@mui/joy";
import {
  Query, QueryCache, QueryClient, QueryClientProvider,
} from 'react-query';
import NavigationContainer from "./Containers/NavigationContainer/NavigationContainer";
import { AxiosError } from "axios";

type Props = {
    children: React.ReactNode,
};

const AppContainerProvider = (props: Props) => {
  const { children } = props;

  const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
    queryCache: new QueryCache({
        onError: async (e: unknown, query: Query) => {
            const error = e as AxiosError<unknown>;
            console.log(error, query)
        },
    }),
});
return(  <QueryClientProvider client={queryClient}>
                    {children}

</QueryClientProvider>)


}

const AppContainer = (props: Props) => {
    const { children } = props;
    console.log('appcontainerLoaded', {props})
    return     <AppContainerProvider>

    <Sheet
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
    </AppContainerProvider>

}

export default AppContainer;