import { expect } from 'chai';
import sinon from 'sinon';
import * as userController from '../controllers/userController.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

describe('Tests for UserController', () => {
  describe('createNew', () => {
    it('creates or signs up a new user', async () => {
      const mockRequest = {
        body: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
          password: 'johndoe124'
        }
      };

      const expectedResponse = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
        cookie: sinon.stub()
      };

      const findOneStub = sinon.stub(User, 'findOne').returns(null);
      const saveStub = sinon.stub(User.prototype, 'save').resolves({_id: 'someId'});


      await userController.createNew(mockRequest, expectedResponse);

      expect(findOneStub.calledOnce).to.be.true;
      expect(saveStub.calledOnce).to.be.true;
      expect(expectedResponse.status.calledWith(200)).to.be.true;

      findOneStub.restore();
      saveStub.restore();
    })
  });

  describe('forLogin', () => {
    it('Logs in an existing user', async () => {
      const mockRequest = {
        body: {
          "email": "johndoe@gmail.com",
          "password": "johndoe124"
        }
      };

      const expectedResponse = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
        cookie: sinon.stub()
      };

      const findOneStub = sinon.stub(User, 'findOne').resolves({ _id: 'someId', password: 'hashedPassword' });
      const comparePasswordStub = sinon.stub(bcrypt, 'compare').resolves(true);

      await userController.forLogin(mockRequest, expectedResponse);

      expect(findOneStub.calledOnce).to.be.true;
      expect(comparePasswordStub.calledOnce).to.be.true;

      findOneStub.restore();
      comparePasswordStub.restore();
    })
  });

  describe('forLogout', () => {
    it('Logs out an existing user', async () => {
      const mockedRequest = {};

      const expectedResponse = {
        clearCookie: sinon.stub(),
        send: sinon.stub()
      };

      await userController.forLogout(mockedRequest, expectedResponse);

      expect(expectedResponse.clearCookie.calledOnceWith('jwt')).to.be.true;
      expect(expectedResponse.send.calledOnceWith('Logged out sucessfully!')).to.be.true;
      }
    )
  });

  describe('getUser', () => {
    it('gets a user based on their id', async () => {
      const mockedRequest = {
        params: {
          "id": "someId"
        }
      };
      const expectedResponse = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      }

      const findOneStub = sinon.stub(User, 'findOne').resolves({ _id: 'someId', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' });
      await userController.getUser(mockedRequest, expectedResponse);

      expect(findOneStub.calledOnceWith({ _id: 'someId' })).to.be.true;
      expect(expectedResponse.status.calledOnceWith(200)).to.be.true;
      expect(expectedResponse.json.calledOnceWith({
      message: 'User details retrieved',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com'
    })).to.be.true;

    findOneStub.restore();
    });

    it('returns 404 when no user is found', async () => {
    const mockedRequest = {
      params: {
        id: "someId"
      }
    };

    const expectedResponse = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };

    const findOneStub = sinon.stub(User, 'findOne').resolves(null);

    await userController.getUser(mockedRequest, expectedResponse);

    expect(findOneStub.calledOnceWith({ _id: 'someId' })).to.be.true;
    expect(expectedResponse.status.calledOnceWith(404)).to.be.true;
    expect(expectedResponse.json.calledOnceWith({ message: 'No user found' })).to.be.true;

    findOneStub.restore();
  });
  })
})
