import React from 'react'

class Show extends React.Component {
  render() {
    return (
      <div>
        {this.props.avatars.map(avatar => {
          return <h3 key={avatar.name}>{avatar.name}</h3>
        })}
      </div>
    )
  }
}

export default Show
