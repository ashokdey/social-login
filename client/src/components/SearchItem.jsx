import React, {Component} from 'react';

class SearchItem extends Component{
  render(){
    const {collectionName, collectionId, wrapperType, trackPrice, currency, collectionViewUrl, releaseDate, artworkUrl100, kind} = this.props.item;
    // let {kind} = this.props;
    // kind = kind.charAt(0).toUpperCase() + kind.slice(1);

    return (
      <div>
        <div className="col s12 m4 l4">
          <div className="card">
            <div className="card-image">
              <img className="responsive" src={artworkUrl100} style={{maxHeight: '270px', maxWidth: '270px'}}/>
              <span className="card-title">{collectionName}</span>
            </div>
            <div className="card-content">
              <p><strong>Price: </strong> {trackPrice} <strong>{currency}</strong></p>
              <p><strong>Realeased On: </strong> {new Date(releaseDate).toDateString()}</p>
              <p><strong>Type: </strong> {kind}</p>
            </div>
            <div className="card-action">
              {
                collectionViewUrl ? <a href={collectionViewUrl} target="_blank" style={{cursor: 'pointer'}}>View in iTunes</a> 
                : 'No link'
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchItem;