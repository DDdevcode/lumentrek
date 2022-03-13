import React, { Component } from 'react'
/* import Avatar from '../../Avatars/Avatar.js' */
import './main.css'

export class Main extends Component {
  render() {
    return (
      <div className="backpage" onClick={this.props.selectAvatar.bind(this, "green")}>
<img src="https://i.ibb.co/gt8tzyg/Website-1.png" alt="Website-1" border="0"/>
      </div>
    )
  }
}

/* this.props.avatars.map((avatar) => (
  <Avatar selectAvatar={this.props.selectAvatar} key={avatar.id} avatar={avatar} />
)); */

export default Main
