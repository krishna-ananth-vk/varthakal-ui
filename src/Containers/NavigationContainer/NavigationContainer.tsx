import { ListItemDecorator, Tab, TabList, Tabs, tabClasses } from "@mui/joy"
import { useState } from "react";
import { tabs, tabsIcons } from "./NavigationContianerUtil";
import { SvgIconComponent } from "@mui/icons-material";
import { RouteName } from "../../types/commonTypes";
import { useHistory } from "react-router-dom";
import { PAGE_ROUTES } from "../../utils/constants";

const NavigationContainer = () =>{
    const history = useHistory();


    const [route, setRoute] = useState('NEWS');

    const handleRouteChange = (newRoute:RouteName)=>{
        console.log('fata', {newRoute});
        setRoute(newRoute)
        history.push(PAGE_ROUTES[newRoute]);
    }
    return(
        <div>
        <Tabs
        size="lg"
        value={route}
        onChange={(_event, value) => handleRouteChange(value as RouteName)}
        sx={(theme) => ({
            width: '100vw',
            mx: '0',
            boxShadow: theme.shadow.sm,
            [`& .${tabClasses.root}`]: {
              py: 1,
              flex: 1,
              transition: '0.3s',
              fontWeight: 'md',
              fontSize: 'md',
              [`&:not(.${tabClasses.selected}):not(:hover)`]: {
                opacity: 0.7,
              },
            },
          })}
        >
        <TabList
            variant="plain"
            size="sm"
            disableUnderline
        >
        {
            Object.keys(tabs).map((aRoute)=>{
                const Icon: SvgIconComponent = tabsIcons[aRoute as RouteName];
                return (
                    <Tab
                        key={aRoute}
                        disableIndicator
                        orientation="vertical"
                        value={aRoute}
                    >
                        <ListItemDecorator>
                            {<Icon/>}
                        </ListItemDecorator>

                        {aRoute}
                    </Tab>
                );
            })
        }
        </TabList>
        </Tabs>
        
        </div>
    )
}

export default NavigationContainer;