import React, { Component } from 'react';
import service from '../api/service';

class Favorites extends Component {
    state = {
        user: {},
        movies: [],
        favorites: []
    }

    getProfileUser = async () => {
        await service.getProfileUser(this.props.user);
        this.setState({ user: this.props.user })
        console.log("THIS STATE USER ID", this.state.user)
    }

    getFavId = async () => {
        let res = await service.getFavId(this.props.user._id);
        this.setState({ favorites: res.favorites })
    }

    componentDidMount = () => {
        this.getProfileUser();
        this.getFavId();
    }


    render() {
        return (
            <div className="row__inner">
                {this.state.favorites && this.state.favorites.map((eachFav) => {
                    return (
                        <div className="tile" key={eachFav._id}>
                            <div className="tile__media">
                                <img className="tile__img" src={eachFav.poster} alt="" />
                            </div>
                            <div className="tile__title">
                                <a href={`/details/${eachFav._id}`}>Details</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Favorites;