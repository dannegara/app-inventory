import apps from '../../data/apps.json';
import appDetails from '../../data/app_details.json';

export type App = (typeof apps)[number];

export type AppDetails = typeof appDetails;
