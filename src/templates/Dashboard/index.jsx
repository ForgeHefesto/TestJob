import Styled from '.';
import Table from '../../components/Table';
import Head from 'next/head';
import { Heading } from '../../components/Heading';
import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard({
  children = [],
  model = 'Table',
  type,
  url,
}) {
  if (model == 'form') {
    return (
      <div>
        <Head>
          <title>JobTest-comments</title>
        </Head>
        <Heading>JobTest</Heading>
        <div className="container mt-4">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Name</label>
                <input
                  disabled={true}
                  type="text"
                  defaultValue={children.name}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Username</label>
                <input
                  disabled={true}
                  type="text"
                  defaultValue={children.username}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input
                disabled={true}
                type="email"
                defaultValue={children.email}
                className="form-control"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Street</label>
                <input
                  disabled={true}
                  type="text"
                  defaultValue={children.address.street}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label >City</label>
                <input
                  disabled={true}
                  type="text"
                  defaultValue={children.address.city}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Suite</label>
                <input
                  disabled={true}
                  type="text"
                  defaultValue={children.address.suite}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-3">
                <label >Zip</label>
                <input
                  disabled={true}
                  type="text"
                  defaultValue={children.address.zipcode}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-3">
                <label >Lag</label>
                <input
                  disabled={true}
                  type="text"
                  defaultValue={children.address.geo.lat}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-3">
                <label >long</label>
                <input
                  disabled={true}
                  type="text"
                  defaultValue={children.address.geo.lng}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-4">
                  <label >Phone</label>
                  <input
                    disabled={true}
                    type="text"
                    defaultValue={children.phone}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-8">
                  <label >Website</label>
                  <input
                    disabled={true}
                    type="text"
                    defaultValue={children.website}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label >Campany-name</label>
                  <input
                    disabled={true}
                    type="text"
                    defaultValue={children.company.name}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label >catchPhrase</label>
                  <input
                    disabled={true}
                    type="text"
                    defaultValue={children.company.catchPhrase}
                    className="form-control"
                  />
                </div>
                  <div className="form-group col-md-4">
                  <label >BS</label>
                  <input
                    disabled={true}
                    type="text"
                    defaultValue={children.company.bs}
                    className="form-control"
                  />
                </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (model == 'table') {
    if (type) {
      return (
        <div>
          <Head>
            <title>JobTest</title>
          </Head>
          <Heading>JobTest</Heading>
          <Table
            id="ID"
            url={url}
            description="DESCRIÇÃO"
            title="TITULO"
            children={children}
            type={false}
          ></Table>
        </div>
      );
    } else {
      return (
        <div>
          <Head>
            <title>JobTest-comments</title>
          </Head>
          <Heading>JobTest</Heading>
          <Table
            id="ID"
            url={url}
            description="DESCRIÇÃO"
            title="NOME"
            children={children}
            type={true}
          ></Table>
        </div>
      );
    }
  }
}
