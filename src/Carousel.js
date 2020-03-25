import React from 'react';

class Carousel extends React.Component{
    state = {
        photos: [],
        active: 0
    };
static getDerivedStateFromProps({media}){
    let photos=['https://placeorg.com/600/600'];
    if(media.length){
        photos = media.map(({large})=> large);
    }
    return {photos};
}
handleIndexClick = e => {
this.setState({
    active: +e.target.dataset.index 
}

)
}
render(){
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