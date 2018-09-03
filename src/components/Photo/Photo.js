import React from "react";
import Vibrant from 'node-vibrant'
import { withStyles } from '@material-ui/core/styles';
import {compose, map, filter, sortBy, prop, keys, reverse, head} from 'ramda'

const styles = (theme) => ({
  label: {
    position: 'absolute',
    bottom: '3px',
    width: '100%',
    fontSize: '1.7vw',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:empty': {
      display: 'none',
    }
  },
  labelSpan: {
    display:'inlineBlock',
    margin: '0.5em 5px',

    '&:empty': {
      display: 'none',
    }
  },
  img: {
    width: '100%',
    borderRadius: '10px',
  },
})

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: 'hsl(0, 0%, 0%)',
      color: 'hsl(0,0%,0%)',
    }
  }

  chooseColors = (palette) => {
    const color = compose(
      head,
      reverse,
      sortBy(prop('population')),
      map(item => ({
        name: item,
        population: palette[item]._population,
        rgb: palette[item]._rgb,
        hsl: palette[item]._hsl,
      })),
      filter(item => palette[item] !== null),
      keys,
    )(palette)

    const hsl = color.hsl;
    const foreLum = (hsl[2]*100+25)%100;
    return {
      background: `hsl(${hsl[0]*360}, ${hsl[1]*100}%, ${hsl[2]*100}%)`,
      foreground: `hsl(${hsl[0]*360}, ${hsl[1]*100}%, ${foreLum}%)`,
    }
  }

  onImageLoaded = async (e) => {
    const palette = await( Vibrant.from(e.target).getPalette())
    const colors = this.chooseColors(palette);
    this.setState({
      backgroundColor: colors.background,
      color: colors.foreground,
    })
  }

  renderPhoto = () => (
    <div style={{position:'relative'}}>
      <img src={this.props.path} alt={this.props.alt} className={this.props.classes.img} onLoad={this.onImageLoaded}/>
      <div className={this.props.classes.label} style={{backgroundColor: this.state.backgroundColor}}>
        <span  className={this.props.classes.labelSpan} style={{color: this.state.color,}}>{this.props.label}</span>
      </div>
    </div>
  )

  renderLink = (content) => (
    <a href={this.props.to} alt={this.props.alt}>{content}</a>
  )

  renderCarouselLink = (content) => {
    // const filename = this.props.path.split('/').pop()
    // const dest = `${this.props.location.pathname}/${filename}`
    const dest ='dest'
    return <a href={dest}>{content}</a>
  }

  render() {
    return (
      this.props.to ? this.renderLink(this.renderPhoto()) : this.renderCarouselLink(this.renderPhoto())
    )
  }

}

Photo.defaultProps = {};

Photo.propTypes = {};

// export default withRouter(Photo);
export default compose(
  withStyles(styles),
)(Photo)