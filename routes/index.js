import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

function controllerRouting(app) {
  const router = express.Router();
  app.use('/', router);

  // App - Controller

  // will return if redis server is alive
  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  // will return the number of users and files in the DB
  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

  // User - Controller

  // will create a new user in the DB
  router.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });

  // will retrieve the user base on the token used
  router.get('/users/me', (req, res) => {
    UsersController.getMe(req, res);
  });

  // Authentication - Controller

  // will authenticate the user based on email and password
  router.get('/connect', (req, res) => {
    AuthController.getConnect(req, res);
  });

  // will authenticate the user based on token
  router.get('/disconnect', (req, res) => {
    AuthController.getDisconnect(req, res);
  });

  // Files - Controller

  // will upload a file to the server
  router.post('/files', (req, res) => {
    FilesController.postUpload(req, res);
  });

  // will retrieve the file document based on the ID
  router.get('/files/:id', (req, res) => {
    FilesController.getShow(req, res);
  });

  // will retrieve all the file documents
  // with a specific tag name and with pagination
  router.get('/files', (req, res) => {
    FilesController.getIndex(req, res);
  });

  // will update the file document based on the ID
  router.put('/files/:id/publish', (req, res) => {
    FilesController.putPublish(req, res);
  });

  // will update the file document based on the ID
  router.put('/files/:id/unpublish', (req, res) => {
    FilesController.putUnpublish(req, res);
  });

  // will delete the file document based on the ID
  router.get('/files/:id/data', (req, res) => {
    FilesController.getFile(req, res);
  });
}

export default controllerRouting;
