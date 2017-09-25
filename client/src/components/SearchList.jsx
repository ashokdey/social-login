import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Preloader from './Preloader';
import SearchItem from './SearchItem';
import * as actions from '../actions';

class SearchList extends Component{

    constructor(props){
        super(props);
        this.state = {
            results: [],
            filteredItems: [],
            filterBy: 'all'
        }
        this._filter = this._filter.bind(this);
    }


    componentDidUpdate(){

    }

    _filter(e){
        const name = e.target.value;
        console.log('_filter value ==>', name);
        this.setState({filterBy: name});
        if(e.target.checked && this.props.search){

            if(name === 'all'){
                this.props.filterResults(this.props.search.results);
                return;
            }

            const filterOut = this.props.search.results.filter((item) => item.kind === name);
            // this.setState({filteredItems: filterOut});
            this.props.filterResults(filterOut);
        }
    }

    render(){

        if(this.props.search === null){
            return <p>Search anything in the box above !</p>
        }

        let cKey = 0;
        // console.log('**Inside Render results', this.props.search.results);
        // console.log('**Inside Render filtered items', this.props.search.filter);


        return(
            <div>
                <br/>
                <div className="row">
                    <div className="col s12 m8 offset-m1">
                        <input className="with-gap" value="all" checked={this.state.filterBy === 'all'} name="filter" id="all" type="radio" onChange={this._filter}/>
                        <label htmlFor="all">All</label>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <input className="with-gap" value="songs" checked={this.state.filterBy === 'songs'}  name="filter" id="song" type="radio" onChange={this._filter}/>
                        <label htmlFor="song">Songs</label>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <input className="with-gap" value="feature-movie" checked={this.state.filterBy === 'feature-movie'}  name="filter" id="feature-movie" type="radio" onChange={this._filter}/>
                        <label htmlFor="feature-movie">Feature Movies</label>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <input className="with-gap" value="postcard" checked={this.state.filterBy === 'postcard'}  name="filter" id="postcard" type="radio" onChange={this._filter}/>
                        <label htmlFor="postcard">Postcards</label>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <input className="with-gap" value="tv-episode" checked={this.state.filterBy === 'tv-episode'}  name="filter" id="tv-episode" type="radio" onChange={this._filter}/>
                        <label htmlFor="tv-episode">TV Episodes</label>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <br/>
                    {
                        (
                            (this.props.search.filter !== undefined)
                                ?
                                (
                                    (this.props.search.filter.length !== 0) ? this.props.search.filter.map((item) => {
                                        return <SearchItem key={++cKey} item={item} />
                                    })
                                    :
                                    'No filtered contents'
                                )
                            :
                            this.props.search.results.map((item) => {
                                return <SearchItem key={++cKey} item={item} />
                            })
                        )
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({search}){
    return {search};
}

export default connect(mapStateToProps, actions)(SearchList);
