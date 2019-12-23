import React, { PureComponent } from 'react'

class Detail extends PureComponent {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card mx-auto mt-5 p-5">
                        <img className="img-thumbnail mr-5" src={this.props.location.state.avatar} />
                        <div>
                            <p>{this.props.location.state.name}</p>
                            <p>{this.props.location.state.email}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Detail
