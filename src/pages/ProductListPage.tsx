import * as React from 'react'

import { InterfaceProductItem, ProductItem } from '../components/ProductItem'

export class ProductListPage extends React.Component<{}, {}> {
    public render () {
        const items: InterfaceProductItem[] = [
            {
                img: 'https://kota.tokopedia.com/jakarta/wp-content/uploads/2016/08/berglee-fig11_017.jpg',
                title: 'jakarta',
            },
            {
                img: 'https://www.garuda-indonesia.com/images/discover/destination/top-20-destination/archive-list-banner/top-destination-surabaya.jpg',
                title: 'surabaya',
            },
            {
                img: 'https://qph.fs.quoracdn.net/main-qimg-405918aa7db648058f6dbefbc8f0335e',
                title: 'bandung',
            },
        ];

        return (
            <div className="container">
                <div className="content-section-heading text-center">
                    <h2 className="mb-3">Pilih kota tujuan kamu</h2>
                </div>
                <div className="row no-gutters">
                    {this.renderItems(items)}
                </div>
            </div>
        )
    }

    private renderItems(items: InterfaceProductItem[]) {
        return items.map(item => {
            return <ProductItem img={item.img} title={item.title} key={item.title}/>
        })
    }
}