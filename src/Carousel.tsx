/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {Photo} from '@frontendmasters/pet'

interface IProps {
    media: Photo[]

}
interface IState {
    active: number;
    photos: string[]
}

class Carousel extends React.Component<IProps, IState>{
    public state = {
        photos: [],
        active: 0
    };
public static getDerivedStateFromProps({media}: IProps){
    let photos=['https://placeorg.com/600/600'];
    if(media.length){
        photos = media.map(({large})=> large);
    }
    return {photos};
}
public handleIndexClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)){
        return;
    }
    if(e.target.dataset.index){

 this.setState({
    active: +e.target.dataset.index 
}

)
}};
public render(){
    const{photos, active} = this.state;
    return (
        <div className="carousel">
            <img src={photos[active]} alt="animal"/>
            <div className="carousel-smaller">
                {this.props.media.map((photo, index) => (
                    <img
                    key={photo.large}
                    onClick={this.handleIndexClick}
                    data-index={index}
                    src={photo.large}
                    className={index===active ? "active" : ""}
                    alt = "animal thumbnail"
                    />
                )
                )}
            </div>
        </div>
    );
};  
};
export default Carousel;