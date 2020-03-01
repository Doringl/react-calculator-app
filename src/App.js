import React from 'react';
import './App.css';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup
} from 'react-bootstrap';
import * as Math from 'mathjs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: '',
      history: ''
    };
  }

  getValue = value => {
    this.setState({ input: this.state.input + value.id });
  };

  process = () => {
    this.setState({ result: Math.evaluate(this.state.input) });
    this.history();
  };

  history = () => {
    this.setState(state => {
      state.history = state.input + ' = ' + state.result;
    });

    this.setState({ input: '' });
    this.setState({ result: '' });
  };

  clearAll = () => {
    this.setState({ input: '' });
    this.setState({ history: '' });
    this.setState({ result: '' });
  };

  clearOnce = () => {
    this.setState({
      input: this.state.input.substring(0, this.state.input.length - 1)
    });
  };

  render() {
    return (
      <div className='App'>
        <Container>
          <Row className='row'>
            <Col></Col>
            <Col xs={7}>
              <Form>
                <Form.Group controlId='ControlTextarea'>
                  <Form.Control
                    as='textarea'
                    rows='3'
                    placeholder='History'
                    readOnly
                    defaultValue={this.state.history}
                  />
                </Form.Group>
                <Form.Group controlId='ControlInput'>
                  <Form.Control
                    type='text'
                    placeholder={0}
                    defaultValue={this.state.input}
                    onKeyPress={event => {
                      event.preventDefault();
                    }}
                  />
                </Form.Group>
              </Form>
              <ButtonGroup
                size='lg'
                className='w-100 mb1'
                aria-label='First group'
              >
                <Button variant='dark'></Button>
                <Button
                  id='DEL'
                  variant='dark'
                  onClick={this.clearAll}
                  className='op grow'
                >
                  DEL
                </Button>
                <Button
                  id='<'
                  variant='dark'
                  onClick={this.clearOnce}
                  className='op grow'
                >
                  {'<'}
                </Button>
                <Button
                  id='='
                  variant='dark'
                  onClick={this.process}
                  className='op grow'
                >
                  =
                </Button>
              </ButtonGroup>
              <ButtonGroup
                size='lg'
                className='w-100 mb1'
                aria-label='Second group'
              >
                <Button
                  id='7'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('7'))}
                  className='grow num'
                >
                  7
                </Button>
                <Button
                  id='8'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('8'))}
                  className='grow num'
                >
                  8
                </Button>
                <Button
                  id='9'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('9'))}
                  className='grow num'
                >
                  9
                </Button>
                <Button
                  id='+'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('+'))}
                  className='op grow'
                >
                  +
                </Button>
              </ButtonGroup>
              <ButtonGroup
                size='lg'
                className='w-100 mb1'
                aria-label='Third group'
              >
                <Button
                  id='4'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('4'))}
                  className='grow num'
                >
                  4
                </Button>
                <Button
                  id='5'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('5'))}
                  className='grow num'
                >
                  5
                </Button>
                <Button
                  id='6'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('6'))}
                  className='grow num'
                >
                  6
                </Button>
                <Button
                  id='-'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('-'))}
                  className='op grow'
                >
                  -
                </Button>
              </ButtonGroup>
              <ButtonGroup
                size='lg'
                className='w-100 mb1'
                aria-label='Fourth group'
              >
                <Button
                  id='1'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('1'))}
                  className='grow num'
                >
                  1
                </Button>
                <Button
                  id='2'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('2'))}
                  className='grow num'
                >
                  2
                </Button>
                <Button
                  id='3'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('3'))}
                  className='grow num'
                >
                  3
                </Button>
                <Button
                  id='*'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('*'))}
                  className='op grow'
                >
                  x
                </Button>
              </ButtonGroup>
              <ButtonGroup
                size='lg'
                className='w-100 mb1'
                aria-label='Five group'
              >
                <Button variant='dark'></Button>
                <Button
                  id='0'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('0'))}
                  className='grow num'
                >
                  0
                </Button>
                <Button
                  id='.'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('.'))}
                  className='grow num'
                >
                  .
                </Button>
                <Button
                  id='/'
                  variant='dark'
                  onClick={() => this.getValue(document.getElementById('/'))}
                  className='op grow'
                >
                  /
                </Button>
              </ButtonGroup>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
