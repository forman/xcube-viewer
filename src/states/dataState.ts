import { Dataset } from '../model/dataset';
import { Place, PlaceGroup, } from '../model/place';
import { TimeSeriesGroup } from '../model/timeSeries';
import { ColorBars } from '../model/colorBar';
import { Server, ServerInfo } from "../model/server";
import { getApiServers, I18N } from '../config';
import { loadUserServers } from './userSettings';

export interface DataState {
    serverInfo: ServerInfo | null;
    datasets: Dataset[];
    colorBars: ColorBars | null;
    timeSeriesGroups: TimeSeriesGroup[];
    userPlaceGroup: PlaceGroup;
    userServers: Server[];
}

export function newDataState(): DataState {
    const extraUserServers = loadUserServers();
    const userServers = [...getApiServers()];
    extraUserServers.forEach(extraUserServer => {
        if (!userServers.find(userServer => userServer.id === extraUserServer.id)) {
            userServers.push(extraUserServer);
        }
    });
    return {
        serverInfo: null,
        datasets: [],
        colorBars: null,
        timeSeriesGroups: [],
        userPlaceGroup: {
            id: 'user',
            title: I18N.get('My places'),
            type: "FeatureCollection",
            features: [] as Array<Place>
        },
        userServers,
    };
}

