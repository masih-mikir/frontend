import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

import { Itinerary } from '../components/Itinerary/Itinerary';
import { InterfaceProductRequest, InterfaceRecreation } from '../interfaces/product';
import * as Actions from './productPage/actions';

export interface InterfaceProductPageProps extends RouteComponentProps<any> {

}

export interface InterfaceProductPageStates {
    recreations?: InterfaceRecreation[];
    budget: number;
}

export class ProductPage extends React.Component<InterfaceProductPageProps, InterfaceProductPageStates> {
    public startTimeInput: any;
    public endTimeInput: any;
    public requestData: InterfaceProductRequest;
    constructor(props: InterfaceProductPageProps) {
        super(props);
        const cityName = props.match.params.cityName;
        this.requestData = {
            city: cityName,
            end_time: 20,
            lat: 1.5,
            lng: 1.5,
            start_time: 0,
        }
        this.state = {
            budget: 0,
            recreations: undefined,
        };
        this.setRecreations = this.setRecreations.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }

    public render() {
        const cityName = this.props.match.params.cityName;
        const { recreations } = this.state;
        const innerRefStartTimeFunc = (node:any) => this.startTimeInput = node;
        const innerRefEndTimeFunc = (node: any) => this.endTimeInput = node;

        return (
            <Container>
                <Row>
                    <Col sm={12} className="content-section-heading text-center">
                        <h1 className="mb-3">Kota tujuan: {cityName}</h1>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                        <Form>
                            <FormGroup>
                                <Label for="start_time">Jam memulai petualangan</Label>
                                <Input innerRef={innerRefStartTimeFunc} type="time" name="start_time" id="start_time" placeholder="Start time" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="end_time">Akhir pertualangan hari ini</Label>
                                <Input innerRef={innerRefEndTimeFunc} type="time" name="end_time" id="end_time" placeholder="End time" />
                            </FormGroup>
                            <Button onClick={this.handleSubmit}>Kirim</Button>
                        </Form>
                    </Col>
                    
                    {recreations && this.renderAfterQuery(recreations)}
                </Row>
            </Container>
        )
    }

    private restartState(){
        this.setState({
            budget: 0,
            recreations: undefined,
        })
    }

    private sendRequest(){
        Actions.getRecreations(this.requestData, this.setRecreations);
        this.restartState()
    }

    private handleSubmit(e: any) {
        e.preventDefault()
        const startTime: number = this.hourToMinuteNumber(this.startTimeInput.value);
        const endTime: number = this.hourToMinuteNumber(this.endTimeInput.value);
        this.requestData.start_time = startTime;
        this.requestData.end_time = endTime;
        this.sendRequest();
    }

    private hourToMinuteNumber(time: string): number {
        const stringTimes: string[] = time.split(':');
        const hour: number = parseInt(stringTimes[0], 10);
        const minute: number = parseInt(stringTimes[1], 10);
        return (hour * 60) + minute;
    }

    private renderAfterQuery(recreations: InterfaceRecreation[]) {
        return (
            <React.Fragment>
                <Col sm={12} md={12} lg={12}>
                    <h2>Rencana perjalanan spesialmu sudah siap</h2>
                    <h3>Total Biaya: Rp{this.state.budget}</h3>
                </Col>
                <Itinerary recreations={recreations} startTime={this.requestData.start_time}/>
            </React.Fragment>
        )
    }

    private setRecreations(recreations: InterfaceRecreation[], budget: number) {
        this.setState({recreations, budget})
    }
}
