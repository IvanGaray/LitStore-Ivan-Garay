import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'
import { Row, Col } from 'react-bootstrap';

import gamesData from '../gamesData.json'




function ItemListContainer() {

  const [productList, setProductList] = useState(0);

  useEffect(() => {

    const grabData                                   = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(gamesData);
      }, 2000);
    });

    grabData.then((response) => {
      setProductList(response);
    });
  }, []);

  return (
    <>
      <Row className="item-list-container" style={{maxHeight: '300px'}}>
        <Col md={12} className="d-flex justify-content-center">
          <ItemList items={productList} />
        </Col>
      </Row>
    </>
  );


}


export default ItemListContainer;