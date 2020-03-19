import React from 'react';


class App extends React.PureComponent {
    state = {
        like: 10,
        dislike: 100,
        likeStyle: false,
        disLike: false
    };
    // handleClick = () => this.setState({ name: "chenna" });




    handeLike = () => {
        if (!this.state.likeStyle && this.state.disLike) {
            this.setState({ likeStyle: true, like: this.state.like + 1, disLike: false, dislike: this.state.dislike - 1 })
        }
        else if (!this.state.likeStyle) {
            this.setState({ likeStyle: true, like: this.state.like + 1 })
        }
        else if (this.state.likeStyle) {
            this.setState({ likeStyle: false, like: this.state.like - 1 })
        }
    }
    handleDislike = () => {
        if (!this.state.disLike && this.state.likeStyle) {
            this.setState({ likeStyle: false, like: this.state.like - 1, disLike: true, dislike: this.state.dislike + 1 })
        }
        else if (!this.state.disLike) {
            this.setState({ disLike: true, dislike: this.state.dislike + 1 })
        }
        else if (this.state.disLike) {
            this.setState({ disLike: false, dislike: this.state.dislike - 1 })
        }
    }




    render() {
        const { like, dislike, likeStyle, disLike } = this.state;


        return (
            <div className={`mt-5 App`}>
                <button className={`buttonStyles ${likeStyle ? "activeButton" : ''}`} onClick={this.handeLike} >Like | {like}</button>
                <button className={`buttonStyles  ${disLike ? "activeButton" : ''}`} onClick={this.handleDislike}> DisLike | {dislike}</button>
            </div>
        )
    }
};


export default App;