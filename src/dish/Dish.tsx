import React from 'react';
import Container from '../common/grid/container';
import Row from '../common/grid/row';
import Col from '../common/grid/col';
import Text from '../common/typography/text';
import Box from '../common/box';
import { Tier } from '../models/tier';

type DishProps = {
  image: string;
  name: string;
  description: string;
  tiers: Tier[];
};

type DishState = {
  materials: string[];
  total: number;
  quantity: number;
};

class Dish extends React.Component<DishProps, DishState> {
  render() {
    return (
      <Container width={'640px'} borderRadius={'4px'} pl={'0'} pr={'0'} bg="#E0E0E0">
        <img src={this.props.image} alt="burger" style={{ maxWidth: '100%' }} />
        <Box py={'1rem'} px={'2rem'}>
          <Row>
            <Col>
              <Text textVariant={'large'} fontWeight={'bold'}>
                {this.props.name}
              </Text>
            </Col>
            <Col size={{ _: 'auto', lg: '5%' }}>
              <Text textVariant={'large'} fontWeight={'bold'}>
                --
              </Text>
            </Col>
          </Row>
          <div>{this.props.description}</div>
        </Box>
      </Container>
    );
  }
}

export default Dish;

/* constructor(props: DishProps) {
  super(props);
}
 */
