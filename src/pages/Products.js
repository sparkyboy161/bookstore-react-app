import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container, Col, Row
} from 'reactstrap';

import axios from 'axios';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [

            ]
        };
    }

    componentDidMount() {
        const url = 'https://l08y0.sse.codesandbox.io/products';
        axios.get(url)
            .then(response => {
                // handle success
                console.log(response.data);
                this.setState({
                    products: response.data
                })
            })
    }

    render() {
        const { products } = this.state;
        return (
            <div>
                <h1>Products</h1>
                <Container>
                    <Row>

                        {
                            products.map(product => (
                                <Col sm="3">
                                    <Card>
                                        <CardImg top width="100%" src={product.image_url} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>{product.name}</CardTitle>
                                            <CardText>{product.description}</CardText>
                                            <Button>Add to cart</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Products;