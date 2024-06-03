import {Newspaper,
    Person,
    Air,
    SvgIconComponent} from '@mui/icons-material';
import { RouteName } from '../../types/commonTypes';

export const tabs: Record<RouteName, string> = {
    NEWS: '/news',
    WEATHER: '/weather',
    ACCOUNT: '/account',
};

export const tabsIcons: Record<RouteName, SvgIconComponent> = {
    NEWS: Newspaper,
    WEATHER: Air,
    ACCOUNT: Person,
};