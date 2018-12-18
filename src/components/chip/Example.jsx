/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Chip from './Chip';

class Example extends Component {
  state = {
    people: [
      {
        name: 'Max',
      },
      {
        name: 'Jack',
      },
      {
        name: 'Leo',
      },
    ],
  }

  removeChip = (e, id) => {
    this.setState(({ people }) => ({
      people: people.filter(({ name }) => name !== id),
    }));
  }

  toggleActiveChip = id => {
    this.setState(({ people }) => ({
      people: people.map(({ name, active }) => {
        if (name === id) {
          active = !active;
        }
        return {
          name,
          active,
        };
      }),
    }));
  }

  render() {
    const { people } = this.state;

    return (
      <Fragment>
        {people.map(({ name, active }) => (
          <Chip
            text={name}
            key={name}
            id={name}
            className={active ? 'active' : ''}
            withClose
            withIcon
            onCloseClick={this.removeChip}
            onChipClick={this.toggleActiveChip}
          />
        ))}
      </Fragment>
    );
  }
}

export default Example;
/* eslint-enable */
