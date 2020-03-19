import React from 'react'


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChat: false,
            isIcon: true,
            button: true,
            text: "",
            data: []
        }
    }
    openChatBox = () => {
        this.setState({ isChat: true, isIcon: false })

    }
    closeChatBox = () => {
        this.setState({ isChat: false, isIcon: true })
    }
    sendChatBox = () => {
        this.state.data.push(this.state.text)
        this.setState({ data: this.state.data})
        console.log(this.state.data)
    }
    handleChat = (e) => {
        e.preventDefault();
        this.setState({ text: e.target.value })
    }

    render() {
      
        return (

            <div className="container">

                {this.state.isChat ? <div className="card shadow col-sm-4 my-5">
                    <header>
                        {/* {this.state.button? */}
                        <button type="button" className="btn btn-success  btn-block my-3" style={{ fontSize: '20px', display: 'flex', justifyContent: 'end', color: 'black', fontWeight: '400', fontFamily: 'sans-serif' }} >Chat</button>
                        {/* :<button type="button" className= "btn btn-danger  btn-block my-3" style={{ fontSize: '20px', display: 'flex', justifyContent: 'end', color: 'black', fontWeight: '400', fontFamily: 'sans-serif' }} >Chat</button>} */}
                    </header>
                    <label className='mx-1' style={{ fontFamily: 'fantasy' }}>Message</label>
                    <div className="form-group">
                        <textarea
                            className="form-control rounded-0"
                            name="msg" rows="5" placeholder="Type message..."
                            onChange={this.handleChat}
                            value={this.state.text}
                            style={{ backgroundColor: '#ddd', height: '40vh' }} ></textarea>
                    </div>
                    <button type="button" className="btn btn btn-success btn btn-block my-1" style={{ lineHeight: 2, fontSize: '19PX' }} onClick={this.sendChatBox}>send </button>


                    <button type="button" className="btn btn btn-danger btn btn-block mb-2" style={{ lineHeight: 2, fontSize: '19PX' }} onClick={this.closeChatBox}>Close</button>



                </div> : null}
                {this.state.isIcon ? <button type="text" className="btn btn-primary " onClick={this.openChatBox} >chat</button> : null}
            </div>
        )
    }
}
export default Chat;