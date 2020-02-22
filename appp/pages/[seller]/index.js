import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  Input,
  Container,
  Row,
  Col,
  Collapse,
  Button,
  CardBody,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import gql from "graphql-tag";
import React from "react";
import ReactDOM from "react-dom";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { Query, KeystoneProvider } from "@keystonejs/apollo-helpers";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://ad.loaloa.me/admin/api" }),
  cache: new InMemoryCache()
});
function HomePage() {
  const router = useRouter();
  const { seller } = router.query;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container>
        <Input
          style={{ marginTop: "1rem", width: "100%", borderRadius: "7px" }}
        ></Input>
        <Button
          outline
          color="primary"
          onClick={toggle}
          style={{
            marginTop: "1rem",
            width: "100%"
          }}
        >
          Danh mục
        </Button>
        <Collapse isOpen={isOpen} style={{ marginTop: "1rem" }}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
        <ApolloProvider client={client}>
          <KeystoneProvider>
            <Query
              query={gql`
                query {
                  allProducts(first: 12) {
                    name
                    price
                    images {
                      file {
                        publicUrl
                      }
                    }
                  }
                }
              `}
            >
              {({ data }) => {
                if (data) {
                  var result = data.allProducts.map(product => (
                    <Col
                      xs={{ size: "4", offset: "0" }}
                      style={{ marginTop: "7px" }}
                    >
                      <Link href="/123">
                        <a>
                          <Card>
                            <CardImg
                              top
                              width="100%"
                              src={product.images.length}
                              alt="Card image cap"
                            />

                            <CardBody style={{ padding: "7px" }}>
                              <CardTitle>{product.name}</CardTitle>
                              <CardSubtitle>1.000.000</CardSubtitle>
                              <CardText>{product.images.length}</CardText>
                            </CardBody>
                          </Card>
                        </a>
                      </Link>
                    </Col>
                  ));
                }
                return <Row noGutters="false">{result}</Row>;
              }}
            </Query>
          </KeystoneProvider>
        </ApolloProvider>
      </Container>
    </>
  );
}

export default HomePage;
