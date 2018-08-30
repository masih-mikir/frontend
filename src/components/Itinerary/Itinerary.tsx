import * as React from 'react';

import { DirectionsCar, LocalDining, Map } from '@material-ui/icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { InterfaceRecreation } from '../../interfaces/product';

import 'react-vertical-timeline-component/style.min.css';
import Popover from '../Popover/popover';
import './Itinerary.css';

export interface InterfaceItineraryProps {
    recreations: InterfaceRecreation[];
    addBudget?: any;
    startTime: number;
}

export class Itinerary extends React.Component<InterfaceItineraryProps, {}> {
    private currentTime: number;
    constructor(props: any) {
        super(props);
        this.currentTime = props.startTime;
        this.renderRecreations = this.renderRecreations.bind(this)
    }

    public render() {
        const { recreations } = this.props;

        const itineraries = recreations.map(this.renderRecreations)
        
        return (
            <VerticalTimeline>
                {itineraries}
            </VerticalTimeline>
        )
    }

    private renderRecreations(recreation: InterfaceRecreation) {
        const colorRecreations = { background: 'rgb(33, 150, 243)', color: '#fff' }
        const colorRestaurants = { background: 'rgb(233, 30, 99)', color: '#fff' }
        const colorTransport = { background: 'deepskyblue', color: '#fff' }
        let color;
        let icon;
        switch (recreation.category) {
            case 'recreation':
                color = colorRecreations;
                icon = <Map />;
                break;
            case 'transport':
                color = colorTransport;
                icon = <DirectionsCar />;
                break;
            case 'restaurant':
                color = colorRestaurants;
                icon = <LocalDining />;
                break;
        
            default:
                break;
        }
        const idKey = `${recreation.category}-${recreation.recreation_id}`;
        const startHour: number = Math.floor(this.currentTime / 60);
        const startMinute: number = Math.floor(this.currentTime % 60);
        this.currentTime += recreation.recreation_time_minute;
        const endHour: number = Math.floor(this.currentTime / 60);
        const endMinute: number = Math.floor(this.currentTime % 60);

        if (this.props.addBudget) {
            this.props.addBudget(recreation.recreation_price);
        }

        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={`${formatNumber(startHour)}.${formatNumber(startMinute)} - ${formatNumber(endHour)}.${formatNumber(endMinute)}`}
                iconStyle={color}
                icon={icon}
                key={idKey}
            >
                <h3 className="vertical-timeline-element-title">{recreation.recreation_name}</h3>
                <h4 className="vertical-timeline-element-subtitle">Rp. {recreation.recreation_price}</h4>
                <img className="img-fluid" src={recreation.recreation_image} alt={recreation.recreation_name} />
                <Popover
                    title={recreation.recreation_name}
                    content={recreation.recreation_description}
                    idKey={idKey}
                    toggleText={'Description'}
                />
            </VerticalTimelineElement>
        );
    }
}

const formatNumber = (before: number): string => {
    return ("0" + before).slice(-2);
}
