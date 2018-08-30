import * as React from 'react'
import { CarouselCaption, CarouselItem as CarouselItemBootstrap } from 'reactstrap';

interface InterfaceCarouselItem {
    imageSource: string;
    captionHeader: string;
    captionText: string;

    onExiting(): void;
    onExited(): void;
};

export class CarouselItem extends React.Component<InterfaceCarouselItem,{}> {
    public render() {
        const { onExiting, onExited, imageSource, captionHeader, captionText } = this.props;
        return (
            <CarouselItemBootstrap
                onExiting={onExiting}
                onExited={onExited}
            >
                <img src={imageSource} alt={captionHeader} />
                <CarouselCaption captionText={captionText} captionHeader={captionHeader} />
            </CarouselItemBootstrap>
        )
    }
}
