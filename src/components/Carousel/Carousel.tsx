import * as React from 'react';

import {
    Carousel as CarouselBootstrap,
    CarouselCaption,
    CarouselControl,
    CarouselIndicators,
    CarouselItem
} from 'reactstrap';

const items = [
    {
        altText: 'Slide 1',
        caption: 'Slide 1',
        src: 'https://kucingpedia.com/wp-content/uploads/2016/06/Gambar-Kucing-Gemuk-Lucu.jpg',
    },
    {
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'https://kucingpedia.com/wp-content/uploads/2016/06/Kucing-Sedang-Nafsu-Makan.jpg',
    },
    {
        altText: 'Slide 3',
        caption: 'Slide 3',
        src: 'https://kucingpedia.com/wp-content/uploads/2016/06/Gambar-Unik-Kucing-Makan-Layaknya-Manusia.jpg',
    }
];

interface InterfaceCarouselStates {
    activeIndex: number;
    animating: boolean;
}

export class Carousel extends React.Component<{}, InterfaceCarouselStates> {
    constructor(props: any) {
        super(props);
        this.state = { activeIndex: 0, animating: false };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    public onExiting() {
        this.setState({ animating: true })
    }

    public onExited() {
        this.setState({ animating: false })
    }

    public next() {
        if (this.state.animating) { return; }
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    public previous() {
        if (this.state.animating) { return; }
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    public goToIndex(newIndex: number) {
        if (this.state.animating) { return; }
        this.setState({ activeIndex: newIndex });
    }

    public render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <CarouselBootstrap
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </CarouselBootstrap>
        );
    }
}
