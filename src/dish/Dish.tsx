import React from 'react';
import Container from '../common/grid/container';
import Row from '../common/grid/row';
import Col from '../common/grid/col';
import Text from '../common/typography/text';

type DishProps = {
  title: string;
  description: string;
};

type DishState = {};

class Dish extends React.Component<DishProps, DishState> {
  render() {
    return (
      <Container width={'640px'} borderRadius={'4px'} pl={'0'} pr={'0'}>
        <img src="https://via.placeholder.com/640x320/" alt="burger" />
        <Row>
          <Col>
            <Text textVariant={'large'} fontWeight={'bold'}>
              {this.props.title}
            </Text>
          </Col>
          <Col size={{ _: 'auto', lg: '5%' }}>
            <Text textVariant={'large'} fontWeight={'bold'}>
              --
            </Text>
          </Col>
        </Row>
        <div>{this.props.description}</div>
        <div>Build controls</div>
      </Container>
    );
  }
}

export default Dish;

/* constructor(props: DishProps) {
  super(props);
}
 */
