import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';

import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Grid>
          <Row>
            <Col xs={6}>{children}</Col>
          </Row>
        </Grid>
      </main>
    </>
  )
}

export default Layout;
