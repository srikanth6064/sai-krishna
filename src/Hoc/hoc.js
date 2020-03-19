import React from 'react'

const EnhancedComponent = (WrappedComponent, incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        handleUpdate = () => {
            this.setState({ count: this.state.count + incrementNumber })
        }
        render() {
            // console.log(this.props, "HOC")
            return <WrappedComponent
                count={this.state.count}
                handleUpdate={this.handleUpdate}
                {...this.props}
            />
        }
    }
    return NewComponent
};
export default EnhancedComponent;