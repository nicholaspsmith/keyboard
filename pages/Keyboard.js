import React, { Component } from 'react'
import styled from 'styled-components'

const KeyStyle = styled.div`
  border: 1px solid black;
  width: 15px;
  height: 100px;
  background: ${({sharp}) => sharp ? '#000' : '#fff'};
  float: left;
  margin: 0;
`

class Octave {
  constructor(a){
    this.c     = {
      freq: a * Math.pow(2, -9/12),
      noteName: 'c'
    } 
    this.cSharp = {
      freq: a * Math.pow(2, -8/12),
      noteName: 'c#'
    }  
    this.d = {
      freq: a * Math.pow(2, -7/12),
      noteName: 'd'
    } 
    this.dSharp = {
      freq: a * Math.pow(2, -6/12),
      noteName: 'd#'
    } 
    this.e = {
      freq: a * Math.pow(2, -5/12),
      noteName: 'e'
    } 
    this.f = {
      freq: a * Math.pow(2, -4/12),
      noteName: 'f'
    } 
    this.fSharp = {
      freq: a * Math.pow(2, -3/12),
      noteName: 'f#'
    } 
    this.g = {
      freq: a * Math.pow(2, -2/12),
      noteName: 'g'
    } 
    this.gSharp = {
      freq: a * Math.pow(2, -1/12),
      noteName: 'g#'
    } 
    this.a = {
      freq: a * Math.pow(2,  0/12),
      noteName: 'a'
    }
    this.aSharp = {
      freq: a * Math.pow(2,  1/12),
      noteName: 'a#'
    }
    this.b = {
      freq: a * Math.pow(2,  2/12),
      noteName: 'b'
    }
  }
}

const baseFrequency = 440
const octaves = 4
const notes = []

for (var i = 0 - octaves/2; i < octaves/2; i++) {
  let a = baseFrequency * Math.pow(2, i)
  let octave = new Octave(a)
  notes.push(octave)
}

class Key extends Component {
  render() {
    const { note, name, octave } = this.props
    const sharp = name.indexOf('Sharp') > -1
    return (
      <KeyStyle sharp={sharp}>
      </KeyStyle>
    )
  }
}

class Keyboard extends Component {
  renderOctave = (octave, num) => {
    const keys = Object.keys(octave)
    console.log(keys)
    console.log(octave[keys[0]])
    return keys.map(name => <Key key={octave[name].freq} note={octave[name].freq} name={name} octave={num} />)
  }
  render() {
    console.log(notes)
    return <div>
      {notes.map((octave, num) => this.renderOctave(octave, num))}
    </div>
  }
}

export default Keyboard